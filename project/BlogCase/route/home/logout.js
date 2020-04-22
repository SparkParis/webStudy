module.exports = (req, res) => {
  // 删除session(注意session是req)
  req.session.destroy(function () {
    // 删除cookie(cookie是res),clearCookie('cookie的ssid')
    res.clearCookie('connect.sid');
    // 重定向到登录页面
    res.redirect('/admin/login');
    // 将userInfo设置为空
    req.app.locals.userInfo = null;
  })
}