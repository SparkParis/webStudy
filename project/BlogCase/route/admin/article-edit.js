const { Article } = require('../../model/artcle')
module.exports = async (req, res) => {
  req.app.locals.currentLink = 'article';

  // 获取浏览器中传过来的值
  let { id } = req.query;
  // id存在表示是文章编辑页面,需要将该文章的信息查询出来并进行显示
  if (id) {
    // 修改操作
    // 查询
    let article = await Article.findOne({ _id: id });
    res.render('admin/article-edit', {
      article: article,
      link: '/admin/article-update?id=' + id,
      button: '修改'
    });

  } else {
    //添加用户操作
    res.render('admin/article-edit', {
      link: '/admin/article-add',
      button: '添加'
    });
  }

  // res.render('admin/article-edit');
}