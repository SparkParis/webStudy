const guard = (req, res, next) => {
  // 判断用户访问的是否是登录页面
  // 判断用户的登录状态
  // 如果用户是登录的,放行
  // 如果用户不是登录的,重定向到登录页面
  if (req.url != '/login' && !req.session.username) {
    res.redirect('/admin/login');
  } else {
    // 判断用户角色,如果是普通用户尝试访问用户管理页面直接跳到博客首页,并终止程序继续向下还行
    // if (req.session.role == 'normal') {
    //   res.redirect('/home/');
    //   return;
    // }
    next();
  }
}
// 将中间件的验证函数进行抛出
module.exports = guard;