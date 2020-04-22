// 导入模块
const { Article } = require('../../model/artcle');
// 数据分页:引入第三方模块
const pagigation = require('mongoose-sex-page');
module.exports = async (req, res) => {
  // 设置当前标识是哪个页面,
  req.app.locals.currentLink = 'article';

  // 获取当前页码
  let page = req.query.page;

  // 查询数据库中的所有文章显示在当前列表页面，在显示用户名的时候涉及到关联查询，通过id查看对应的作者名称,author返回的是一个对象,里面是author对应的user对象实例
  let articles = await pagigation(Article).find().page(page).size(2).display(3).populate("author").exec();
  // res.send(articles);
  res.render('admin/article', {
    articles: articles
  });
}