// 引入user模块
const { User } = require('../../model/user');
module.exports = async (req, res) => {
  // 设置标识判断当前页面是哪个链接,进行选定符的设定
  req.app.locals.currentLink = 'user';

  // 数据分页
  // 接收从客户端传过来的page当前页参数
  let page = req.query.page || 1;//这里设置默认的页码
  // 设置每页显示的数据条数
  let pageSize = 10;
  // 查询用户数据的总条数
  let count = await User.countDocuments();//查询所有用户不需要添加参数

  // 计算总页数
  let total = Math.ceil(count / pageSize);
  // 当前页显示的开始位置
  let start = (page - 1) * pageSize;

  let users = await User.find().limit(pageSize).skip(start);//查询所有的用户
  // 渲染页面,这里将分页的信息传递给页面进行页面的分页展示
  res.render('admin/user', {
    users: users,
    page: page,
    total: total
  })
}