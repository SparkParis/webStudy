const { User, validateUser } = require('../../model/user');

// 密码加密模块
const bcrypt = require('bcryptjs');

module.exports = async (req, res, next) => {
  // 设置表单验证,抽取出来放在model的user中
  // 通过try catch捕获对象
  try {
    await validateUser(req.body);
  } catch (err) {
    // 报错则重定向到当前页面,并将错误信息返回,将错误机制放在app.js文件中进行拦截
    // next函数只能存放字符串,先将对象转化为字符串,同样需要return,后面的代码不需要执行
    return next(JSON.stringify({ path: '/admin/user-edit', message: err.message }))

  }

  //验证通过,判断邮箱地址是否被注册,引入User模块,存在返回该对象,不存在返回null
  const user = await User.findOne({ email: req.body.email });
  // 如果用户存在则说该邮箱被占用
  if (user) {
    // 重定向到当前页面输出错误信息,return说明后面的语句将不再执行
    return next(JSON.stringify({ path: '/admin/user-edit', message: '邮箱被占用' }))

  }
  // 反之用户没有被注册进行用户的密码加密操作
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);
  //req.body中的密码进行修改
  req.body.password = password;
  // 创建文档
  User.create(req.body);
  // 将页面重定向到用户列表
  res.redirect('/admin/user');

}