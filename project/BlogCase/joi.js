// 引入模块
const Joi = require('joi');

// 验证规则
const schema = {
  username: Joi.string().min(2).max(20).required().error(new Error('用户名验证不通过')),
  birth: Joi.number().min(1900).max(2020).error(new Error("日期验证不通过"))
}
// 实施验证,验证的API是异步API,返回的是promise对象,通过异步函数解决返回值的问题
async function run() {
  // 通过try catch捕获错误
  try {
    await Joi.validate({ username: 'abs', birth: 2014 }, schema);
  } catch (error) {
    console.log(error.messge);//返回错误的信息
    return;//终止程序执行
  }
  //没有异常
  console.log('验证通过')
}
run();