const { Article } = require('../../model/artcle');
const path = require('path');

// 通过formidable获取表单中的二进制文件
const formidable = require('formidable');

module.exports = async (req, res) => {

  let id = req.query.id;

  // 创建表单解析对象
  const form = new formidable.IncomingForm();
  // 设置表单文件上传的位置,这里采用绝对路径
  form.uploadDir = path.join(__dirname, '../', '../', 'public/', 'uploads/');
  // 设置文件后缀名
  form.keepExtensions = true;
  // 解析表单
  form.parse(req, async (err, fields, files) => {
    await Article.updateOne({ _id: id }, {
      title: fields.title,
      publishDate: fields.publishDate,
      cover: files.cover.path.split('public')[1],
      content: fields.content,
    })
  })
  res.redirect('/admin/article')
}