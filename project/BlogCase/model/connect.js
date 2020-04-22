// 连接数据库
const mongoose = require('mongoose');
// 引入环境配置,这里需要获取值采用模板字符串
const config = require('config');
console.log(config.get('db.host'));

//连接,connnect返回的promise对象,可以调用链式编程
mongoose.connect(`mongodb://${config.get("db.user")}:${config.get("db.pwd")}@${config.get("db.host")}:${config.get("db.port")}/${config.get("db.name")}`, { useUnifiedTopology: true })
  .then(() => console.log('数据库连接成功'))
  .catch(() => console.log('数据库连接失败'))