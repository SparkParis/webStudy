const { User } = require('../../model/user')
module.exports = async (req, res) => {
  // form采用的是get方式提交,直接通过query来获取隐藏域中传过来的id值
  // 删除当前id对应的用户
  await User.findOneAndDelete({ _id: req.query.id });
  // 重定向到用户列表页面
  res.redirect('/admin/user');

}