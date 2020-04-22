const { User } = require('../../model/user');
// 导入密码验证
const bcrypt = require('bcryptjs');

module.exports = async (req, res, next) => {

  let { username, email, password, role, state } = req.body;
  let id = req.query.id;

  // 获取数据库中的对象
  let user = await User.findOne({ _id: id });

  // 判断密码是否正确,正确才能修改
  let isValid = await bcrypt.compare(password, user.password);
  if (isValid) {
    // 密码比对通过,通过user.update方法更新除密码以外的其他内容
    await User.updateOne({ _id: id }, {
      username: username,
      email: email,
      role: role,
      state: state
    })
    // 修改完成之后重定向到用户列表页面
    res.redirect('/admin/user')
  } else {
    // 密码比对失败则直接返回用户编辑页面,并返回ID
    // 交给错误处理机制进行处理
    next(JSON.stringify({ path: '/admin/user-edit', message: '密码比对失败不能进行用户信息的修改', id: id }))
  }

}