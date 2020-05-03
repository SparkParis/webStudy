# webStudy
Web learning projects, notes, source code and some demos, involving HTML, CSS,js,less,vue,es, bootstrap.etc 

## project

### 1 [kaolaProject](https://sparkparis.github.io/webStudy/kaolaProject/index.html)

- Technology

  1. HTML
  2. CSS
  3. flex
  4. float

- State

  Through the use of HTML. CSS to imitate the koala site to build static pages, achieve the dynamic style of CSS, style and structure to achieve separation.

- [效果展示](https://sparkparis.github.io/webStudy/kaolaProject/index.html)
### 2 个人博客
本博客主要记录学习过程中技术笔记,项目展示情况,方便和各位一起交流

- 基于hexo(yilia)+github搭建的博客
- 选用主题yilia
- blog实现点
  - [分类构建](https://blog.csdn.net/dta0502/article/details/89607895)
  - 所有文章缺失模块
  - 侧边栏添加网易云音乐
  - [添加文章访问量](http://www.janszeng.top/2017/08/30/hexo_yilia_count/)
  - 添加版权信息(声明declare:true)
  - 添加RSS
  - SEO优化
  - 加密文章url
  - 添加sitemap
  - 添加百度统计
- [源码](https://github.com/SparkParis/sparkparis.github.io)
- [效果](https://sparkparis.github.io/)
### 3 Nodejs实现多人博客管理系统
- 技术:
  - Nodejs+Express框架
  - MongoDB数据库的CRUD操作,数据分页操作
  - 模板引擎art-template
  - jQuery
  - bootstrap
  - JavaScript
- 难点
  - 实现数据分页(通过两种方式)
    - 通过计算
    - 通过第三方模块mongoose-sex-page
  - 模板引擎的熟练使用
  - 文件上传
    - 第三方模块formidable解析表单,支持get请求参数，post请求参数、文件上传
    - 通过FileReader实现file文件上传之后的预览的解析获取
  - 通过session和cookie实现用户是否登录的验证,通过隐藏域实现删除
  - 通过第三方模块joi实现标三验证
  - 利用bcrypt的单程加密方式对密码加密
  - 第三方模块config对开发环境进行不同配置
- 功能描述
  - 实现的管理系统主要包括两种权限管理员和普通用户
    - 管理员进入用户管理管理界面
      - 用户管理:添加删除编辑用户
      - 文章管理:添加删除编辑文章
      - 退出登录
    - 普通用户登录进入博客首页
      - 博客首页有用户登录,退出,文章show
      - 点击文章进入文章详情页面
      - 文章详情页面实现文章评论(前提是已经登录)
      - 普通用户不能访问用户管理界面
- [源码](https://github.com/SparkParis/webStudy/tree/master/project/BlogCase)
- 效果展示服务器部署中
### 4 mongodb+express+node+Ajax+jQuery+js实现网站(前后端分类模式)
- 技术:
  - 前端:ajax+jquery+js+html+css+bootstrap
  - 后端:node+express框架
  - 数据库:mongodb
- [详细介绍见个人博客](https://sparkparis.github.io/2020/04/27/Ajax-project/)
- [源码](https://github.com/SparkParis/webStudy/tree/master/project/AlibaixiuCase)
- [效果展示]()
## demo
### 01_shoppingCart
- Technology
  1. HTML
  2. CSS
  3. float
  4. jQuery
- Achieve
  1. 全选/全不选功能模块
  2. 增减商品数量
  3. 计算总计和总额
  4. 删除商品模块
  5. 选中商品添加背景
- State:
  The shopping cart case mainly uses jQuery to implement the full selection function module of the shopping cart page, increase or decrease the number of products, calculate the total and total, delete the product module, and select the product to add a dynamic interaction with the background color

- [效果展示](https://sparkparis.github.io/webStudy/demo/01_shoppingCart/)
### 02_elevatorNavigationCase
- Technology
  1. HTML
  2. CSS
  3. float
  4. jQuery
  5. 互斥锁
- Achieve
  - 电梯导航
  - scroll滚动到固定位置电梯导航淡入淡出
  - 移动页面电梯导航跟随改变
  - 点击电梯导航跳转到页面的指定位置
- State:
  The elevator navigation case is mainly based on jQuery, which implements the interaction of static pages, the page is scrolled to a fixed position, and the elevator navigation bar is fixed on the left. The elevator navigation bar is used to jump to the specified position of the page, and the position element is used to implement the position animation
- [效果展示](https://sparkparis.github.io/webStudy/demo/02_elevatorNavigationCase/)

### 03_阿里百秀
- Technology
  1. HTML
  2. CSS
  3. float
  4. jQuery
  5. bootstrap
- Achieve
  - 通过调用组件实现导航栏
  - 通过调用插件实现登录
  - 通过调用插件标签页实现 tab 栏
-  State:
  基于jQuery和bootstrap插件应用到网页中
- [效果展示](https://sparkparis.github.io/webStudy/demo/03_alibaoxiu/)
### 04_todolist
- Technology
  1. HTML
  2. CSS
  3. float
  4. jQuery
  5. bootstrap
- Achieve
  - 实现todolist在本地存储
  - 增
  - 删
  - 正在进行和已完成选项的操作
  - 本地存储数据的渲染
  - 个数统计
- [效果展示](https://sparkparis.github.io/webStudy/demo/04_todoList/)
## notes
[个人博客地址](https://sparkparis.github.io/)
## code
- [学习笔记code]()
## 前端学习网址链接
- [前后端学习API](https://www.w3cschool.cn/tutorial)
- 后端
  - [nodejs查询w3cshool在线手册](https://www.w3cschool.cn/nodejs/nodejs-repl.html)
  - [nodejs官网插件使用](https://www.npmjs.com/package/)
  - [nodejs中文网](http://nodejs.cn/api/v8.html)
  - [Express中文API](https://www.expressjs.com.cn/4x/api.html)
- 前端
  - [stackoverflow报错查询](https://stackoverflow.com/questions/38937095/no-gulpfile-found)
  - [前端构建化工具gulp](https://gulpjs.com/docs/en/getting-started/creating-tasks)
  - [WebMDN 详细 API](https://developer.mozilla.org/zh-CN/docs/Web/API)
  - [jQuery插件库网址1](http://www.jq22.com/)
  - [jQuery插件库网址2](http://www.htmleaf.com/)
  - [全屏滚动插件网址](https://www.dowebok.com/)
  - [Bootstrap官网](https://v3.bootcss.com)
  - [W3Cschool在线文档](https://www.w3school.com.cn/)
  - [Web前端在线测试工具](https://tool.oschina.net/)
  - [浏览器兼容性查阅](https://caniuse.com/)
  - [颜色选择网址](https://flatuicolors.com/)
  - [CSS雪碧图制作网站](https://www.toptal.com/developers/css/sprite-generator)
  - [阿里图标库](https://www.iconfont.cn/)
  - [字体下载地址](https://fonts.google.com/)
  - [3d动画网址](https://threejs.org/)
  - [图标编辑网址](http://fontstore.baidu.com/static/editor/index.html)
  - [Web网站模板1](https://72k.us/file/21793581-422825200)
  - [Web网站模板2](http://demo.cssmoban.com/cssthemes4/sbtp_20_brandy/index.html)
- [MarkDown中文文档](https://markdown-zh.readthedocs.io/en/latest/)
- [Git中文参考文档](https://git-reference.readthedocs.io/zh_CN/latest/)

