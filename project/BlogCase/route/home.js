
const express = require('express');
// 创建home路由,才可以挂载以一级路由下面
const home = express.Router();

// 创建博客首页路由
home.get('/', require('./home/index'))
// 创建文章详细页面
home.get('/article', require('./home/article'))

// 创建评论路由
home.post('/comment', require('./home/comment'))

// 普通用户退出登录
home.get('/logout', require('./home/logout'));



// 导出路由模块
module.exports = home;