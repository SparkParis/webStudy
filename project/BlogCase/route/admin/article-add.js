// 引入二进制表单解析模块
const formidable = require('formidable');
const path = require('path');
const { Article } = require('../../model/artcle')

module.exports = (req, res) => {
  // 创建表单解析对象
  const form = new formidable.IncomingForm();
  // 设置表单文件上传的位置,这里采用绝对路径
  form.uploadDir = path.join(__dirname, '../', '../', 'public/', 'uploads/');
  // 设置文件后缀名
  form.keepExtensions = true;
  // 解析表单
  form.parse(req, async (err, fields, files) => {
    // err:错误信息
    // fields:普通的表单信息
    // files:文件的表单信息
    /*files返回的信息
    "path": "F:\\code\\7_Node\\BlogCase\\public\\uploads\\upload_bc350cfa2eef2f597c7cb7867ed1b452.png",
    通过数组的split('public)方法截取public之后的文件路径保存在文件的服务器端:files.cover.path.split('public')[1]
    */
    //  res.send(files.cover.path.split('public')[1]);
    // 创建Article的文档对象
    await Article.create({
      title: fields.title,
      author: fields.author,
      publishDate: fields.publishDate,
      cover: files.cover.path.split('public')[1],
      content: fields.content,
    })

    // 重定向到文章列表页面
    res.redirect('/admin/article');
  })
}