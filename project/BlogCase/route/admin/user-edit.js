const { User } = require('../../model/user')
module.exports = async (req, res) => {
  // 设置当前连接的标识
  req.app.locals.currentLink = 'user';

  // 获取浏览器中传过来的值
  let { id, message } = req.query;
  // id存在表示是用户编辑页面,需要将该用户的信息查询出来并进行显示
  if (id) {
    // 修改操作
    // 查询
    let user = await User.findOne({ _id: id });
    res.render('admin/user-edit', {
      message: message,
      user: user,
      link: '/admin/user-update?id=' + id,
      button: '修改'
    });

  } else {
    //添加用户操作
    res.render('admin/user-edit', {
      message: message,
      link: '/admin/user-edit',
      button: '添加'
    });
  }

}