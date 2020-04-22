const { Article } = require('../../model/artcle');
// 数据分页模块
const pagination = require('mongoose-sex-page');
module.exports = async (req, res) => {
  // 获取当前页的页码
  const page = req.query.page || 1;
  // 查询数据库
  let result = await pagination(Article).page(page).size(4).display(2).find().populate('author').exec();
  // res.send(result);
  // return;
  res.render('home/default.art', {
    result: result
  });
}