const { Article } = require('../../model/artcle');
const { Comment } = require('../../model/comment');
module.exports = async (req, res) => {
  // 获取浏览器传过来的文章id的值
  let id = req.query.id;
  // 根据id值查询当前文章详情,需要查询作者的名字author属性名,采用联合查询
  let article = await Article.findOne({ _id: id }).populate('author');
  // 根据文章的id来查询所有评论,查询用户的名称
  let comments = await Comment.find().populate('uid');
  // res.send(comment);
  // return
  res.render('home/article.art', { article, comments });
}