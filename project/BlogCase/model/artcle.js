// 模块引入
const mongoose = require('mongoose');
// 创建规则,用户集合验证规则
const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, '请输入文章用户名'],
    minlength: 2,
    maxlength: 20,
  },
  author: {
    // 集合关联,这里的作者就是User集合中的id
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, '请输入作者'],
  },
  publishDate: {
    type: Date,
    default: Date.now
  },
  // 文章封面
  cover: {
    type: String,
    default: null
  },
  content: {
    type: String,
    default: null,
  }
});
// 创建文章集合
const Article = mongoose.model('Article', schema);
// 将集合暴露
module.exports = {
  Article
}
