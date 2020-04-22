// 导入评论集合
const { Comment } = require('../../model/comment');
module.exports = async (req, res) => {
  // 接收客户端传过来的参数通过req.body
  let { content, uid, aid } = req.body;
  // 将集合存储在客户端
  await Comment.create({
    aid: aid,
    uid: uid,
    time: new Date(),
    content: content,
  })
  // 评论成功之后重定向跳转到文章详情页面
  res.redirect('/home/article?id=' + aid);

  // res.send(comment);
}