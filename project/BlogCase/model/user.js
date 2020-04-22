// 创建用户集合
const mongoose = require('mongoose');
// 引入验证模块
const Joi = require('joi');

//创建用户集合规则
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20
  },
  email: {
    type: String,
    required: true,
    // 保证邮箱的唯一性
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  //admin:表示超级管理员,normal:表示普通用户
  role: {
    type: String,
    required: true,
  },
  // 0:启用,1:禁用
  state: {
    type: Number,
    default: 0
  }

})
// 创建集合
const User = mongoose.model('User', userSchema);

// 表单验证
const validateUser = (user) => {
  //设置验证规则
  const schema = {
    username: Joi.string().required().error(new Error('用户名不符合规则')),
    email: Joi.string().email().error(new Error('邮箱不符合规则')),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,20}$/).required().error(new Error('密码不符合规则')),
    role: Joi.string().valid('normal', 'admin').required().error(new Error('身份不符合规则')),
    state: Joi.number().valid(0, 1).required().error(new Error('状态不符合规则'))
  }
  // 将表单验证的结果promise对象返回
  return Joi.validate(user, schema);
}

//哈希加密
// 导入bcrypt
const bcrypt = require('bcryptjs');
// 异步API通过异步函数获取返回值
async function createUser() {
  createUser
  // 加密算法
  const salt = await bcrypt.genSalt(10);
  const pass = await bcrypt.hash('123456', salt);

  // 创建文档,创建文档是在路由中进行的
  const user = User.create({
    username: 'SparkParis',
    email: '123456@qq.com',
    password: pass,
    role: 'admin',
    state: 0
  });

}
// createUser();
//将创建的用户集合导出
module.exports = {
  // 注意导出的名称和当前的名称相同时,现在的名称可以省略User: User
  User,
  validateUser
}