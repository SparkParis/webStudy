const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
  // 文章的ID
  aid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article'
  },
  // 用户的id
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  // 评论时间
  time: {
    type: Date
  },
  // 评论内容
  content: {
    type: String
  }
})
/*
model(参数1,参数2)
- 参数1:集合名称
- 参数2:集合规则
*/
const Comment = mongoose.model('Comment', commentSchema);
// 将评论集合构造函数作为模块进行导出
module.exports = {
  Comment
}
// 评论成员不同就让其跳转到不同的页面