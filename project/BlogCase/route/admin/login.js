const bcrypt = require('bcryptjs');

const { User } = require('../../model/user');

module.exports = async (req, res) => {
  // 通过对象解构获取接收post参数
  const { email, password } = req.body;
  // 在服务器进行二次验证
  // if (email.trim().length == 0 || password.trim().length == 0) {
  //   return res.status(400).send('<h4>邮件地址或密码错误</h4>')
  // }
  // 通过渲染模板的方式实现
  if (email.trim().length == 0 || password.trim().length == 0) {
    // 通过return进行返回
    return res.status(400).render('admin/error', { msg: '邮件地址或密码错误' })
  }

  // 当用户名和值相同时可以省略value
  let user = await User.findOne({ email });
  if (user) {
    /*
    bcrypt.compare('明文密码','加密密码')
    返回值是true/false,注意:加密算法中的三个API都是异步API,通过异步函数解决返回值的获取问题
    */
    const isValid = await bcrypt.compare(password, user.password)
    if (isValid) {
      // 验证用户是否登录成功
      // 将用户名存储在请求对象中
      req.session.username = user.username;
      // 将用户的角色也存储在session
      req.session.role = user.role;

      /*
      登录成功存储用户信息到app.locals下,供全局访问,这里的req.app.locals就是app.js中的app
      */
      req.app.locals.userInfo = user;

      // 对用户的角色进行判断,如果是admin管理员跳转到用户管理页面,如果是普通用户跳转到博客首页
      if (user.role == 'admin') {
        // 重定向到用户列表页面
        res.redirect('/admin/user');
      } else {
        res.redirect('/home/');
      }

    } else {
      res.status(400).render('admin/error', { msg: '邮箱地址或密码错误' })
    }
  } else {
    res.status(400).render('admin/error', { msg: '邮箱地址或密码错误' })
  }
}
