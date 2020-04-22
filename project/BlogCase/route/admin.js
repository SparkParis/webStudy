const express = require('express');
const admin = express.Router();

// 用户登录页面渲染
admin.get('/login', require('./admin/loginPage'));

// 用户登录
admin.post('/login', require('./admin/login'));

// 用户列表路由
admin.get('/user', require('./admin/userPages'))

// 用户退出功能
admin.get('/logout', require('./admin/logout'))

// 新增用户功能
admin.get('/user-edit', require('./admin/user-edit'))
// 新增用户添加功能
admin.post('/user-edit', require('./admin/user-edit-post'))

// 修改用户
admin.post('/user-update', require('./admin/user-update'));

// 删除用户
admin.get('/delete-user', require('./admin/user-delete'))

// 文章管理页面
admin.get('/article', require('./admin/article'));

// 文章编辑页面
admin.get('/article-edit', require('./admin/article-edit'));

// 文件添加
admin.post('/article-add', require('./admin/article-add'))

// 文章修改
admin.post('/article-update', require('./admin/article-update'))

// 删除文章
admin.get('/delete-article', require('./admin/article-delete'));

module.exports = admin; 