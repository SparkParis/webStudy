// 创建网站服务器
const express = require('express');
const app = express();
const path = require('path');
// 输出客户端的信息到打印台上
const morgan = require('morgan');

// 引入config第三方模块自动配置当前环境(开发环境还是生产环境)
const config = require('config');

// 导入dataformat第三方模块处理模板中的日期,这个的第三方模块的使用是在art-template模板下使用的,同时需要配置模板,将第三方模块导入到模板中
const dataFormat = require('dataformat');
const template = require('art-template');
// 模板设置,导入第三方模块到模板中才能使用
template.defaults.imports.dataFormat = dataFormat;

// 引入body-parser模块处理post请求
const bodyParser = require('body-parser');
// 拦截所有的请求处理post请求参数
app.use(bodyParser.urlencoded({ extends: false }));

// session功能是实现
const session = require('express-session');
//通过中间件拦截所有请求并配置设置session,'里面的内容可以随便写'
app.use(session({
  secret: 'secret key',
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,//设置cookie的过期时间
  }
}));//设置session

// 连接数据库
require('./model/connect');

// express模板位置设置
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'art');
// 设置模板引擎
app.engine('art', require('express-art-template'));

// 开放静态资源访问(这样才能渲染页面,可以直接通过localhost/home/default.html来进行访问,说明静态资源已经开放出去)
app.use(express.static(path.join(__dirname, 'public')));

// console.log(config.get("title"));//获取配合信息
// 判断环境
if (process.env.NODE_ENV == 'development') {
  // 开发环境
  // 将客户端发送给服务器端的请求打印在控制台上,参数值是固定的
  app.use(morgan('dev'));
} else {
  // 项目环境
  console.log('项目环境')
}

// 导入路由模块
const home = require('./route/home');
const admin = require('./route/admin');

// 拦截admin请求(admin下的所有请求),根据是否登录
// 这里将中间件的函数进行抽离放在middleware
app.use('/admin', require('./middleware/loginGuard'));

// 拦截所有请求,为路由匹配路径,参数1是请求路径
// 模板中的相对路径是相对于地址栏中的请求路径
app.use('/home', home);
app.use('/admin', admin);

// 错误请求机制进行集中处理,注意这里的错误请求机制一定要放在所有路由的最后执行
app.use((error, req, res, next) => {
  // 接收next()传过来的错误信息,并将其进行解析为对象的形式,这里的error就是next()函数红传递过来的信息
  const result = JSON.parse(error);
  // 接收的参数的数量是不确定的,这里通过循环来获取对应的参数
  let params = [];
  // 这里通过for in进行接收
  for (let attr in result) {
    if (attr != 'path') {
      params.push(attr + '=' + result[attr]);//将对象中的值取出来放在数组中并通过&符号进行连接
    }
  }
  res.redirect(`${result.path}?${
    params.join('&')
    }`);
})

// 监听
app.listen(3000);
console.log('服务器启动成功')