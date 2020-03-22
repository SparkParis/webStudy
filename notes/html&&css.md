- [认识软件](#认识软件)
- [电脑配置](#电脑配置)
- [认识网页](#认识网页)
- [前端工程师工作](#前端工程师工作)
- [网页组成](#网页组成)
- [元素的使用](#元素的使用)
- [元素划分](#元素划分)
- [url知识/SEO优化](#url知识seo优化)
- [URL知识补充](#url知识补充)
- [CSS基础](#css基础)
    - [CSS选择器](#css选择器)
    - [结构和样式分离](#结构和样式分离)
    - [最常用的CSS属性](#最常用的css属性)
    - [RGB颜色空间](#rgb颜色空间)
    - [文本属性](#文本属性)
    - [字体属性](#字体属性)
    - [CSS更多选择器](#css更多选择器)
- [伪类和伪元素](#伪类和伪元素)
    - [伪类(pseudo-classes)](#伪类pseudo-classes)
        - [动态伪类(dynamic pseudo-classes)](#动态伪类dynamic-pseudo-classes)
        - [目标伪类(target)](#目标伪类target)
        - [语言伪类(language)(不常用)](#语言伪类language不常用)
        - [元素状态伪类(UI element state )](#元素状态伪类ui-element-state-)
        - [结构伪类(structural)](#结构伪类structural)
        - [否定伪类(negation)](#否定伪类negation)
    - [伪元素](#伪元素)
- [Emmet语法](#emmet语法)
- [CSS特性](#css特性)
    - [CSS属性使用经验](#css属性使用经验)
- [列表](#列表)
    - [列表元素](#列表元素)
    - [CSS列表属性](#css列表属性)
- [HTML-表格](#html-表格)
    - [表格元素](#表格元素)
    - [CSS表格样式](#css表格样式)
- [HTML-表单元素](#html-表单元素)
- [CSS属性-元素类型](#css属性-元素类型)
    - [元素类型划分](#元素类型划分)
    - [CSS属性](#css属性)
- [盒子模型(Box Model)](#盒子模型box-model)
- [伪类和伪元素](#伪类和伪元素-1)
    - [伪类(pseudo-classes)](#伪类pseudo-classes-1)
        - [动态伪类(dynamic pseudo-classes)](#动态伪类dynamic-pseudo-classes-1)
        - [目标伪类(target)](#目标伪类target-1)
        - [语言伪类(language)(不常用)](#语言伪类language不常用-1)
        - [元素状态伪类(UI element state )](#元素状态伪类ui-element-state--1)
        - [结构伪类(structural)](#结构伪类structural-1)
        - [否定伪类(negation)](#否定伪类negation-1)
    - [伪元素](#伪元素-1)
- [Emmet语法](#emmet语法-1)
- [CSS特性](#css特性-1)
    - [CSS属性使用经验](#css属性使用经验-1)
- [列表](#列表-1)
    - [列表元素](#列表元素-1)
    - [CSS列表属性](#css列表属性-1)
- [HTML-表格](#html-表格-1)
    - [表格元素](#表格元素-1)
    - [CSS表格样式](#css表格样式-1)
- [HTML-表单元素](#html-表单元素-1)
- [CSS属性-元素类型](#css属性-元素类型-1)
    - [元素类型划分](#元素类型划分-1)
    - [CSS属性](#css属性-1)
- [盒子模型(Box Model)](#盒子模型box-model-1)
- [快捷键](#快捷键)
### 认识软件
- 软件是什么
- 完整的软件体系结构:服务器-android-ios-pc-浏览器
- 前端工程师
### 电脑配置
- 显示文件的扩展名
- 显示隐藏的文件和文件夹
- 显示文件的详情
### 认识网页
一个网站有很多个网页组成
### 前端工程师工作
- 在自己电脑上进行网站的开发
- 将开发出来的内容进行打包(webpack/gulp)
- 上传和部署->服务器
- 用户通过浏览器-URL->下载资源->浏览器解析
### 网页组成
- HTML(网页的结构域)+CSS(网页的样式)+JavaScript(交互)
- 浏览器内核 
    - trident:IE
    - gecko:FireFox
    - presto->blink:Opera
    - webkit->Safari/Android/IOS(webview)
    - blink->Chrome;
- 软件及其插件的安装(VScode)
    - 插件安装(chinese,open in brower,atom,vscode-icon)
    - 设置(自动保存,字体大小,wrap换行,空格渲染->点)
- 元素的使用
    - HTML(超文本标记语言)
    - 元素的基础(元素的写法:双标签,单标签)
    - 元素的嵌套(元素之间存在嵌套关系;父元素/子元素/后代元素)
    - 元素的属性(<img src>,class/id/title)
    - 注释的重要性
    <pre>
<!-- 注释的内容 --->
- [x] - [ ]     </pre>
- 
<html>
<!--在这里插入内容-->

</html>

### 元素的使用
- 文档声明（告诉浏览器当前页面是html页面，html标准去解析，放在文档最前端不能省略，会出现兼容性问题）
- html元素（W3C标准增加了lang属性，en->html文档语言是英文,zh->中文）
- head元素(元数据,描述网页的各种信息,字符编码网页标题,网页图标[title,meta,style,link,base,script,noscript])
- meta(charset字符编码)
  - ==字符编码==:meta Ascii,utf-8,GB2312,gbk,Unicode编码
  - 目前均采用utf-8进行编码
  - link用于设置网站图标等
  <link rel="icon" href="https://www.jd.com/favicon.ico">
  - style用于样式的设置
- h(有助于网站的==SEO[Search Engine Optimization]优化==,促进关键词排名,建议网页中只有一个h1,否则会被搜索引擎认为作弊,)    ==SEO:google/sougou/360/baidu==
- p,strong
- code用于显示程序代码
- br(单标签表示强制换行)
- hr分割线
- img(src,alt)
  - 图片格式:jpg(不支持透明),png(支出透明),gif(动图,支持透明)
- a(超链接打开新的网页[href,target])
  - target取值:_self[默认,当前网页],_blank[新的窗口打开url],_parent[父窗口],_top[顶层窗口],==某个frame的name值:在某个frame中打开url==
 - iframe在一个html文档中显示其他的html文档[src frameboder(0,1) ]
 - base写在head,显示a元素的所有默认行为()
<html>
<!--在这里插入内容-->
  <base href="http://www.baidu.com" target="_blank">
</html>

- 锚点连接:跳转到网页的具体位置<a href="#one">go</a>[id为one的a元素,name为one的元素]
- 伪链接(两种写法)链接可以作为按钮来使用
  - <a href="#" onclick="return false;">伪链接</a>
  - <a href="javascript:">伪链接</a>
- 图片链接(img和a元素实现图片链接)
<a href="http://www.baidu.com"><img src="https://inews.gtimg.com/newsapp_match/0/2433515525/0" alt="img">
</a>
### 元素划分
- 区块：div
- 区分：span
- 文本：p，h1~h6
- 表格：table。tbody.thead.tr..th.tfoot,caption
- 表单：form,input,label,textarea,select
- 链接：a
- 图片：img
- 文档，html，head，title，body，meta
- 列表：ul ol li diside footer,nav
- 其他：br，hr，iframe
- 结构：header，section、a strong pre address,q,blockquote,cite,code

==行内元素设置高度等某些属性是没有效的,span等==
### url知识/SEO优化
- url格式问题:URL的基本格式 = protocol://hostname/path = 协议://主机地址/路径
  - 协议：不同的协议，代表着不同的资源查找方式、资源传输方式
  - 主机地址：存放资源的主机的IP地址（域名）
  - 路径：资源在主机中的具体位置
- url常见协议
  - http:超文本传输协议,访问远程的网络资源,https是http协议的安全版
  - file访问本地计算机资源,格式file://
  - mailto访问电子邮件地址,格式:mailto://
  - ftp访问共享主机的文件资源格式:ftp://
  - ed2k:通过支持ed2k（专用下载链接）协议的P2P软件访问该资源（代表软件：电驴），格式是ed2k://
  - thunder:通过支持thunder（专用下载链接）协议的P2P软件访问该资源（代表软件：迅雷），格式是thunder://
### URL知识补充
- 访问网络资源的过程:通过DNS进行域名解析成ip地址在去服务器进行请求
- URL(Uniform Resource Locator统一资源定位符):资源的地址位置,通过url能找到网络上的唯一资源
- url具体的文件格式:
==protocol://hostname[:port]/path/[;paramenters][?query]#fragment==
http://www.baidu.com:80/s?wd=io#page
参数:page:当前要访问的页面
     type:访问数据的类型(pop,new,sell)
  - port:端口:一台有ip地址的主机提供多个服务,web服务,FTP服务,SMTP服务
  - 主机通过ip地址+端口来区分不同的服务,端口范围从0-65535,http默认端口80,ftp默认端口21
  - query:请求参数,提交给服务器
  - fragment:锚点位置
- 标签语义化的原则:正确的使用标签
 
### CSS基础
官网文档的查阅网址:
https://developer.mozilla.org/zh-CN/docs/Web/CSS 查询css相关用法
https://caniuse.com/ 查询兼容性问题
- css:Cascading Style Sheets层叠样式表
- CSS三种应用方式
  - 内联样式(inline style)
  - 文档样式表(documnt style sheet),内嵌样式(embed style sheet)
  - 外部样式表(extenal style sheet)
  css最好也指定样式,css一般都在后面加分号
@charset "utf-8";
- 引入外部样式表的两种方式:
  - link引入样式表:
  - style->@import
 
<link rel="stylesheet" href=".\CSS\style.css">

<style>
    @import url(.\CSS\style.css);
</style>
当引入多个样式时,将最重要的放在最后,也可以将base的样式放在重要的样式表里
==import效率没有link高,一般不用,在框架使用中会使用import==
#### CSS选择器
- CSS选择器
按照一定的规则选出符合条件的元素，为之添加CSS样式选择器的种类繁多
- 归类
  - 通用选择器（universal selector)一般不建议使用
  - 元素选择器（type selectors）
  - 类选择器（class selectors）:".+类名"
  - id选择器（id selectors）"#+id名"
 ==#+id名 .+类名==
  - 属性选择器（attribute selectors）
  - 组合（combinators）
  - 伪类（pseudo-classes）
  - 伪元素（pseudo-elements）
  ==一个元素可以有多个选择器,通过空格进行连接==
- 设置网页图标
  - link元素的rel属性不能省略,用来指定文档链接和链接资源的关系
  - 一般rel指定,type属性也会默认确定,可省略
  - 网页图标支持格式:ico,png,常用大小16*16,24*24,32*32
 <link rel="icon" type="image/x-icon" href="https://www.baidu.com/favicon.ico" 

#### 结构和样式分离
- 开发中用css控制的不要用属性去控制
- css样式和html文件分开存放

#### 最常用的CSS属性
- 非替换行内元素设置高度等某些属性是没有效的例如span等
- 调试网页代码时给div添加outline属性可以帮助调试
- 强调符的应用

<html>
<!--在这里插入内容-->
div {
outline:2px solid red !important;}
</html>

#### RGB颜色空间 
- rgb:
  - red:0-255
  - green:0-255
  - blue:0-255
  - 1byte->8bit->11111111->255
 - rgba:
   - red
   - green
   - blue
   - alpha:0-1(0:完全透明 1:完全不透明)
 - 十六进制)(#00ffaa,简写#0fa)开发中推荐使用
 - transparent(表示rgb全部都是0
 )呈现黑色全透明

#### 文本属性
- text-decoration:设置文字的装饰  
  - none:无装饰下你,可以去除a元素默认的下划线
  - underline:下划线
  - overline:上划线
  - line-through:中划线(删除线)
 (u,ins元素默认设置了下划线)
- letter-spacing字母间距
- word-spacing:单词之间的间距
- text-transform:设置文本的大小写转换
  - capitalize(将每个单词的首字母变为大写)
  - uppercase:所有字母变为大写
  - lowercase:所有字母变为小写
  - none:没有任何影响
- text-indent:设置第一行内容的缩进,谷歌中单个字符为16px,首行缩进2个字符可以直接通过em进行设置(1em=1个字符),em单位是一个相对单位,相对于自身元素;rem设置字体相对于根元素设置,常用移动端用于适配
- text-align:设置元素内容在水平对齐方式
  - left
  - right
  - center
  - justify(两端对齐,一般不用):在使用时一般对最后一行不起作用,解决方案:设置text-align-last:justify
 当有两个div嵌套时,对外层的div设置居中,内部的div模块不会直接居中,解决方案:设置内div属性:display: inline-block;
#### 字体属性
- font-size
  - em:相对于父元素
  - px
  - rem
  - 百分比:相对于父元素进行百分比设置,谷歌浏览器默认最小字体12px
==文本相关的属性会继承父元素的属性设置==
- font-famliy:设置字体格式,一般在设置字体格式都设置多个字体格式,避免操作系统不存在这种字体(按照从左到右选择字体),英文字体只适用英文,中文字体都支持.一般开发中中文字体写前面,中文字体写在后面
- font-style:设置文字的常规,斜体显示
  - normal:常规显示
  - italic:用常规的斜体显示(前提是font-family这种字体时支持斜体的)
  - oblique:文本倾斜显示(让文字倾斜)
  - italic和oblique的区别是:不能用italic倾斜的字体可以通过oblique显示倾斜
  - em,i,cite,address,var,dfn等元素的font-style默认的就是italic

- font-weight:设置字体的粗细
  - 每一个字体表示一个重量(100-900)
  - normal:=400
  - bold:=700
  
 strong,b,h1-h6等标签的font-weight默认就是bold
- font-variant:可以影响小写字母的显示形式
  - normal:常规显示
  - small-caps:将小写字母替换为缩小过的大写字母
- line-height:用于设置文本的最小行高=两基线之间的距离=行距+字体高度;解决字体垂直居中的解决方案:height=line-height
  - 当有文本的时候可以直接去掉height,通过设置line-height使文字垂直居中显示

- font属性缩写:font-style font-variant font-weight font-size/line-height font-family
  - font-style,font-variant,font-weight可以随意调换顺序,可省略
  - line-height可以省略如果不省略必须跟在font-size之后
  - font-size,font-family不可以调换顺序
 
#### CSS更多选择器
- 类选择器
- id选择器
- 元素选择器
- 通配选择器
- 属性选择器(attribute selector) 
  - 拥有title属性的选择器格式:[title]
  -  title属性值恰好等于one的元素: [title="one"]
  -  title属性值包含one的元素 :[title*="one"]
  -  title属性值以单词one开头的元素: [title^="one"]
  -   title属性值恰好等于one的或者以单词one开头的且后面紧跟连字符的元素:[title|="one"]
  -   title属性值包含单词one的元素(与其他单词必须用空格分开):[title~="one"]
  -   title属性值以单词one结尾的:[title$="one"]
- 后代选择器(descendent conbinator)
  - div里面的span元素(包含子元素和直接子元素)格式:div span
- 子代选择器(child combinators
  - div元素里面的直接子元素  格式:div>span或者div > span
  
ps:
==类下面,标签下面都可以使用选择器==

p元素下不能直接跟div元素
- 相邻兄弟选择器(adjacent sibling combinator)
    - div元素后面紧挨着的p元素(且div,p是兄弟关系)格式:div+p
-  全体兄弟选择器:div==后面==的p元素(且div,p是兄弟关系)格式 :div~p 
- 选择器组
  - 交集选择器:同时符合两个条件div元素,class值有one.格式:div.one
  - 并集选择器:所有的div元素 + 所有class值有one的元素 + 所有title属性值等于test的元素.格式:div, .one, [title="word"]

### 伪类和伪元素
#### 伪类(pseudo-classes)
##### 动态伪类(dynamic pseudo-classes)
- :link:未访问
- :visited:已访问
- :hover:移动上方
- :active:点击时
- :focusa:聚焦时

ps:
  - a元素可以设置以上五种属性(顺序lvfha)
  - strong元素有hover/active
  - focus用于a/input,格式:元素:focus
  - ==去掉a元素聚焦状态的两种方==式:设置a:focus{outline:none}(隐藏);为a设置tabindex属性=-1(tabindex:表示tab键选中元素的顺序,为-1时表示不被选中)
  - 网页中利用tab键可以focus内容
  - 在给a设置(a{color:red})时相当于给a的所有动态伪类都设置了color=red

##### 目标伪类(target)
- :target
一般应用在锚点的位置,超链接(:target{})
##### 语言伪类(language)(不常用)
- :lang

##### 元素状态伪类(UI element state )
- :enable
- :disable
- :checked
格式:
<button ==disabled==>我是按钮</button>

ps:设置过程中:
  - 伪类写法(==:disabled {}==)
  - 属性选择(==button[disabled]==)
  
== button一般不常用==

##### 结构伪类(structural)
- :nth-child( )、:nth-last-child( )、:nth-of-type( )、:nth-last-of-type( )
  - :nth-child(num):正向数子元素的第num个
 (区分: 交集选择器+结构选择器 是p元素且是p同一级别的第三子元素->p:nth-child(3);后代选择器+结构选择器:p元素后代的第三个子元素->p :nth-child(3))
  - :nth-last-child(num):倒向数第num个(num=-n+3->表示倒数3个)
  - :nth-of-type(num):指定元素下的第几个元素(只看指定元素)
  - :nth-last-of-type:倒数指定元素的第几个元素(只看指定圆度)

ps:num形式(具体数字;跟字母[2n偶数,2n+1奇数等])
- :first-child、:last-child、:first-of-type、:last-of-type
- :root、:only-child、:only-of-type、:empty
  - :first-child，等同于:nth-child(1)
  - :last-child，等同于:nth-last-child(1)
  - :first-of-type，等同于:nth-of-type(1)
  - :last-of-type，等同于:nth-last-of-type(1)
  - :only-child，是父元素中唯一的子元素
  - :only-of-type，是父元素中唯一的这种类型的子元素
  - :root:给html设置属性==html{}
  - :empty->内容为空的元素(空格不算为空)

##### 否定伪类(negation)
- :not(x)->不含某个元素的样式设置
- x是一个简单选择器,包括:元素选择器、通用选择器、属性选择器、类选择器、id选择器、伪类（除否定伪类）
- ==否定选择器只支持简单的选择器不支持组合==

#### 伪元素
伪元素表示:
- :first-line、::first-line->首行文本设置属性(可使用:word-spacing、letter-spacing、text-decoration、text-transform、line-height
字体属性,颜色属性,背景属性)
- :first-letter、::first-letter->对首字母设置属性(可使用:word-spacing、letter-spacing、text-decoration、text-transform、line-height,text-decoration、text-transform、letter-spacing、word-spacing（适当的时候）、line-height、float、vertical-align[只有当float是none时])
- :before、::before->用来在元素之前插入内容
- :after、::after->用来在元素之后插入内容分
  - befor,after其中的content属性不能省略
  - content插入内容可以是文字["文字"],可以使图片[url{''}]
  - display属性可以改变元素的特性使其变为行内元素,解决不能设置宽高的问题

为了区分伪元素和伪类,建议伪元素使用::

### Emmet语法
- 生成html代码两种方式
  - !+enter
  - html:5
- 生成子代元素>
- 生成兄弟元素+
- 生成多个元素*num
- 上一级元素^
- 分组"()
- 属性(id属性(#id_name),class属性(.class_name),普通属性([title="name"]))
  - 数字$
  - 内容{}
  - 隐氏标签(默认情况下.name表示div,ul中.name表示li,table中.name表示tr)
- CSS
  - 宽高w200+h200+m20+p40
  - fz:20->font-size:20px
  - fw700->font-weight:700
  - lh20px->line-height:20px
  - bgc->background-color:#
  - dib->display:inline-block

==Emmet语法不留空格==
### CSS特性
- 继承:某些属性可以继承(color,font-size,line-height等),某些不能继承(width),==不能继承的元素给他设置inherit使其强制继承或者单独给该元素设置属性==
  - 继承可以通过浏览器进行查看
  - CSS继承的是==计算值==,并不是当初写属性时的指定值(字面值)
- 层叠
  - CSS允许多个相同名字的属性层叠在一个元素上
  - 层叠的结果是只有一个CSS属性会生效
  - 浏览器的开发工具会显示哪个CSS会生效
  - CSS哪个属性生效取决于所处环境的优先级
  - CSS优先级比较(从高到低的顺序)==:!important>内联样式>id选择器>类选择器,属性选择器,伪类>元素选择器,伪元素>通配符选择器==
  - 优先级的比较方法:先判断优先级数量,相同在比较下一个较小的全职
#### CSS属性使用经验
编写CSS属性不好使,常见原因:
- 选择器的优先级太低
- 选择器没选中对应的元素
- CSS属性的使用方式不对
  - 元素不支持CSS属性(span元素默认不支持height,width)
  - 浏览器不支持CSS属性(旧的浏览器不支持CSS3的属性)
  - 被同类型的CSS属性覆盖
 
ps:充分利用浏览器的开发者工具进行调试(增加修改样式)查错

### 列表
#### 列表元素
- 有序列表:0l.li
- 无序列表:ul,li
- 定义列表:dl,dt,dd(后两者是兄弟关系)

ps:
- 列表操作过程中存在左边的间距:margin-block-start: 1em;浏览器默认设置的结果
#### CSS列表属性
- list-style-type:设置li元素前面标记的样式
  - disc(默认实心)（实心圆）、circle（空心圆）、square（实心方块）
  - decimal（阿拉伯数字）、lower-roman（小写罗马数字）、upper-roman（大写罗马数字）
  - lower-alpha（小写英文字母）、upper-alpha（大写英文字母）
  - none（什么也没有）
- list-style-image:设置某张图片为li元素前面的标记，会覆盖list-style-type的设置
- list-style-position:设置li元素前面标记的位置，可以取outside、inside2个值(表示列表标记符号是否在内容)
- list-style(以上三者的缩写属性,不分先后顺序)一般设置为none无处列表前面的符号

### HTML-表格
#### 表格元素
- table表格
  - border(边框高度)
  - cellspadding(单元格内部的间距)
  - cellspacing:单元格之间的间距
  - width:表格的宽度
  - height:表格的高度
  - align:表格的水平对齐方式(left,right,center)
- tr表格中的行
- td行中的单元格
- tbody
- caption
- thead
- tfoot(一般不用)
- th表格的表头单元
- tr th td属性:
  - valign单元格的垂直对齐方式(top,bottom,middle,baseline)
  - align单元格的水平对齐方式
  - width宽度
  - height高度
  - rowspan单元格可横跨的行数
  - colspan单元分可横跨的列数
#### CSS表格样式
- ==设置细线边框的方式==
  - ==给table设置相框合并border-collapse:collapse==
  - ==css样式设置表格居中:[margin 0 
  ]==
- border:宽度 dashed/solid color
- border-spacing:设置单元格之间的距离,设置在table中

### HTML-表单元素
- form表单
  - action用于提交表单数据的请求url
  - method请求方法(提交数据浏览器发送的是http请求)
    - get默认方式
      - 请求URL后面以?的形式跟上发给服务器的参数，多个参数之间用&隔开，
      - 由于浏览器和服务器对URL长度有限制，因此在URL后面附带的==参数是有限制==的，通常不能超过1KB
比如
http://ww.test.com/login?phone=123&password=234&sex=1
    - post
      - 发给服务器的参数全部放在==请求体==中
      - 理论上，post传递的数据量没有限制（具体还得看服务器的处理能力
    - 通过浏览器进行查看:检查->手机虚拟->network->ALL->点击左侧选项->点击head->查看请求体

  - target在什么地方打开erl(一般不写)
  - enctype
    - 规定在向服务器发送请求之前如何对数据进行编码
    - 取值
      - application/x-www-form-urlencoded：默认的编码方式
      - ==multipart/form-data：文件上传时必须为这个值，并且method必须是post==
      - text/plain：普通文本传输
  - accept-charset:规定表单提交时使用的字符编码默认unknown(一般不写)



- input(单行文本输入框,单选框,复选框,按钮等元素)
  - type(类型)
    - text文本输入框,明文输入
    - password文本输入框,密文输入
    - radio单选框
    - checkbox复选框
    - button按钮
    - reset重置
    - submit:提交表单数据给服务器
    - file:文件
  - maxlength 允许输入的最大字数
  - placeholder:占位字符
  - readonly只读
  - disabled禁用
  - checked默认被选中(type为radio和checkbox才可用)
  - 
  focus:当页面加载时自动聚焦
  - value取值->一般有输入的input不用设置value值,必须设置的是select,checkbox,select等
  - form设置所属的form属性(填写form元素的id)一旦使用了此属性,input元素及时不写form元素内部,.他的数据也能提交给服务器
  - 
- textarea(多行文本框)
  - cols
  - rows
  - resize(可选值)
    - both(默认)
    - horizontal
    - vertical
- select,option(下拉选择框)
  - select
    - multiple可以多选
    - size显示多少项
  - option
    - 默认被选中
- button按钮
- label表单元素的标签(一般和input绑定使用)
- fieldset表单元素组
- legend:fieldset的标题

ps:
- checked属性应用在radio和checkbox
- selected应用在select元素中
- input的value值
  - 设置按钮的文字
  - 设置radio和checkbox被选中时,提交给服务器的值
  - 设置文本输入框的默认值
- 假设服务器那边规定phone是手机，password是密码，code是验证码
但是前端页面这边密码的name写成了pwd，那么后果是：服务器接收不到密码值
- 文件上传的必要条件
  - method="post"
  - enctype="multipart/form-data"
  - input要有name值
<form action="http://www.baidu.com" method="post" enctype="multipart/form-data">
-->

- id和name值不一定要一致，name值是由服务器（后台）决定的
- checkbox的name和value值都是由服务器决定的,同一种类型的checkbox，name值要保持一致
- 重置提交的前提(二者的value值可以省略):
  - 1.==type是reset类型==
  - 2.==所有的内容必须在一个整体form元素==
- ==有name属性,才会提交给服务器==
- ==按钮的两种表达==
  - input元素->type="button"(显示按钮通过value设置)
  - button元素->type(默认submit
- radio必须设置相同的name值才能设置单选框
- input和label的关系
  - 给label的for属性和input的id属性绑定相同的名称,将二者关联起来,点击其中一个功能都会执行
- 去除input的tab选中效果
  - 设置outline:none
  - 设置tabindex=-1
- 表单提交:将用户在input中输入的内容提交给服务器(两种方式)
  - 传统的表单提交(SU优化)
    - 将所有的input放在form中
    - form设置action(服务器的地址)
    - input/button类型是submit
    - 点击submit,自动将所有的数据提交给服务器
    - 弊端:
      - 会进行页面的跳转(意味着服务器必须提前将一个页面写好,前端直接展示这个页面)[服务器提前将页面写好:==服务器渲染==]
      - 不方便进行表单数据的验证
 - 前后端分离
   - 通过JavaSacript获取表单的信息
   - 通过正则表达式获取表单的验证
   - 发送ajax请求,将数据传递给服务器
   - 验证成功后,服务器返回结果,需要前端解析这个数据,并且决定显示什么内容)==(前后端渲染和前端路由==)
### CSS属性-元素类型
#### 元素类型划分
- 根据元素的显示(都不能在同一行显示)类型,html元素可以分为两类 
    - 块级元素
      - 独占父元素的一行
      - 常见元素有:div,p,h1-h6,ul,ol,li,dl,dt,dd,table,form,article,aside,footer,header,hgroup,main,nav,section,blockquote,hr等
    - 行内元素
      - 多个行内元素可以在同一行显示
      - 常见的元素:span,strong,a,imag,code,iframe,label,input,button,canvas,embed,object,video,audio等
- 根据元素的内容(是否浏览器会替换元素)类型,分为两类
  - 替换元素(replace elements):元素本身没有实际内容,浏览器根据元素的类型和和属性来决定元素的具体显示内容
    - img,input,iframe,video,embed,canvas,audio,object等
  - 非替换元素(non-replace elements)
    - div,p,pre,h1-h6,ul,ol,li,dl,dt,dd,table,form,article,aside,footer,header,hgroup,main,nav,section,blockquote,hr,a,strong,span,code,lable,等
- 元素分类总结

元素分类|是否替换 | 具体元素 | 默认特征 |
---|---|---|---
块级元素(block-level elements)|替换元素|  |
块级元素(block-level elements)| 非替换元素|div、p、pre、h1~h6、ul、ol、li、dl、dt、dd、table、form、article、aside、footer、header、hgroup、main、nav、section、blockquote、hr等|独占父元素的一行;可以随意设置宽高;高度默认由内容决定|
行内元素(inline elements) | 替换元素 |img、input、iframe、video、embed、canvas、audio、object等|跟其他行内级元素在同一行显示;可以随意设置宽高|
行内元素(inline elements) | 非替换元素|a、strong、span、code、label等|跟其他行内级元素在同一行显示;不可以随意设置宽高;宽高由内容决定

#### CSS属性
- 块级元素的由来display
  * block(==浏览器会默认给div/p/h1...元素设置了display:block==)
  * inline(将block元素传回到行内元素)
  * none(隐藏元素不占据空间)
  * ==inline-block==
    * 可以设置和其他元素在同一行
    * 可以设置宽度和高度
- inline-block详解
  * 可以让元素同时剧本块级,行内级元素的特征
    * 跟其他行内级元素在同一行显示
    * 可以随意设置宽高
    * 宽高默认由内容决定
  * 对外来说他是行内级元素
  * 对内来说是块级元素
  * 常见用途
    * ==让行内级非替换元素(a,span)能够虽是设置宽高==
    * ==让块级元素能够和其他元素在同一行显示==
- 浮动会触发==BFC==(BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。)
- visibility能控制元素的可见性
  - 常见的两个值:
      - visible:显示元素
      - hidden:隐藏元素
  - visible:hidden和display:none的区别
    - visible:hidden看不见元素,还占着原来的位置
    - disable:none不仅看不见元素,而且元素框也会被移出,不会占据任何位置
- overflow 用于控制内容溢出时的行为
  - visible溢出内容依然可见
  - hidden溢出的内容直接裁剪
  - scroll溢出的内容被裁剪时,可以通过滚动机制进行查看(会一直显示滚动条区域,滚动条占用的空间属于width,height)
  - 
  自动根据内容是否一出来提供滚动机制
  - ~~overflow-x和overflow-y~~两个属性可以分别设置水平和垂直方向(建议使用overflow,有些浏览器不支持)
  - 元素之间的空格(行内元素在编辑时会有回车显示空格),解决方案
    - ~~元素代码之间不要留空格~~
    - ~~注释掉空格~~
    ```
    <span>span11</span><!--
    --><span>span2</span>
    ```
    - ~~设置父元素的font-size为0,然后在元素中重新设置自己需要的fongt-size(此方法在Safari不适用)~~
    - ==给元素添加float属性==
- 注意:
  - 块级元素,inline-block(行内级元素)
    - 一般情况下可以包含任何元素
    - 特殊情况下p元素不能包含其他块级元素
  - 行内元素(a,span,strong)
    - 一般情况下只能包含行内元素
    
### 盒子模型(Box Model)
- 内容相关属性
  - width
  - min-width
  - max-width
  - height
  - min-height
  - max-height
- 内边距属性
  - padding-top
  - padding-right
  - padding-bottom
  - padding-left
  - padding:padding-top,right,bottom,left顺序
    - 按照顺时针方向设值：top、right、bottom、left
    - 如果缺少left, 那么left就使用right的值
    - 如果缺少bottom, 那么bottom就使用top的
- word-break
- 外边距相关属性
  - margin-top
    - ==如果块级元素的顶部线和父元素的顶部线重叠，那么这个块级元素的margin-top值会传递给父元素==
  - margin-right
  - marin-bottom
    - 如果块级元素的底部线和父元素的底部线重写，并且父元素的高度是==
    ==，那么这个块级元素的margin-bottom值会传递给父元素
  - margin-left
    - margin：是margin-top、margin-right、margin-bottom、margin-left的简写属性
  - ==margin的上下折叠==(垂直方向上相邻的2个margin（margin-top、margin-bottom）有可能会合并为1个margin，这种现象叫做==collapse==（折叠）
    - 水平方向上的margin（margin-left、margin-right）永远不会collapse
    - 合并规则两个值进行比较，取较大的值
    - ==防止margin collapse==？
      - ==只设置其中一个元素的margin==
  - ==父子块级元素之间margin的折叠==
  - ==如何防止出现margin的上下传递问题==
    - ~~给父元素设置padding-top\padding-bottom~~
    - ~~给父元素设置border~~
    - 触发BFC: 设置父元素的overflow为非visible[
      (推荐)]
    - 给父元素设置padding
  - ==触发BFC(block-format-content块级格式化上下文)的方式:==
    - 设置overflow为非visible
    - 设置浮动(float)
  - ==margin上下同时设置会出现外边距合并==
  - ==margin左右同时设置会进行叠加==
  - 建议
    - margin一般用来设置兄弟之间的间距
    - padding一般用来设置父子之间的间距
- 英文单词默认是不能断开的,所以才会出现溢出div的情况,
  - 1.通过设置word-break使其换行(==wordbreak:break-all==)
  - 2.英文字母中间添加空格
- border边框
  - 边框属性
      - 边框宽度
        - border-top-width、border-right-width、border-bottom-width、border-left-width
        - border-width是上面4个属性的简写属性
      - 边框颜色
        - border-top-color、border-right-color、border-bottom-color、border-left-color
        - border-color是上面4个属性的简写属性
      - 边框样式
        - border-top-style、border-right-style、border-bottom-style、border-left-style
        - border-style是上面4个属性的简写属性
      - border-style取值
        - none
        - dotted一系列点
        - dashed虚线
        - solid
        - double边框有两条实线。两条线宽和其中的空白的宽度之和等于border-width的值
        - groove雕刻在画布之内
        - ridge画布中凸出来
        - inset:嵌在画布内
        - outset:inset相反
      - border-top,border-right,border-bottom,boder-left(按照顺时针方向)
        - border-top:2px solid red
        - 边框颜色,宽度,样式,的编写顺序随意
        - border统一设置四个方向的
          - border: 2px solid #f00;
  - 边框形状
    - 立体矩形(设置宽高以及其中两个边框样式)
    - 梯形(设置宽高和背景以及四个边框)
    - 三角形
      - (设置宽高为0,以及四个边框样式[其中三个颜色设置为透明tranparent]
      - 设置上三角在设置下三角时可以通过transform旋转生成下三角
    - 设置圆(通过border-radius,设置百分数50%)
  - 圆角半径属性(顺时针方向)单位pt
    - border-top-left-radius
    - border-top-right-radius
    - border-bottom-right-radius
    - border-bottom-left-radius
    - border-*-*-radius定义的是四分之一椭圆的半径
      - 第一个值是水平半径
      - 第二个值是垂直半径
    - ==border-radius可以设置百分比==
      - 参考的是border-box的宽度
    - border-radious:是4个值的顺序是top-left、top-right、bottom-right、bottom-left（顺时针方向）
```
border-radius: 10px 20px 30px 40px/15px 25px 35px 45px ;
斜线/前面是水平半径，后面是垂直半径
```
- 行内非替换元素不起作用的属性
  - width
  - height
  - margin-top
  - margin-bottom
- 以下属性对行内非替换元素的效果比较特殊
  - padding-top,padding-bottom,上下方向的border
  - 使用在行内元素中元素padding上下和border上下设置只是扩大了span的空间并覆盖上下的元素内容,而不占据空间,上下块也并不会发生上下移动,
- outline属性
    - outline设置元素的外轮廓
      - ==不占用空间==
      - ==默认显示在boder的外面==
    - 相关属性:
      - outline-width
      - outline-style:取值和border一样
      - outline-color
      - outline:outline-width、outline-style、outline-color的简写属性，跟border用法类似
    - 应用实例
      - 去除a元素,input元素的focus轮廓效果
- box-shadow
  - box-shadow可以设置一个或者多个阴影
    - 每个阴影用<shadow>表示
    - 多个阴影之间用逗号隔开,从前到后叠加
    - <shadow>的常见格式:
```
<shadow> = inset? && < length>(2,4) && <color>?
(1)第1个<length>：水平方向的偏移，正数往右偏移
(2)第2个<length>：垂直方向的偏移，正数往下偏移
(3)第3个<length>：模糊半径（blur radius）
(4)第4个<length>：延伸距离
(5)<color>：阴影的颜色，如果没有设置，就跟随color属性的颜色
(6)inset：外框阴影变成内框阴影

ps:
1.正则表达式中?表示0个或者1个
2.<>里面的内容换具体的内容eg:red
3.&&表示此符号连接的内容之间先后顺序
4.(2,4)表示可输入2到4个数值
```  
```
box-shadow: 64px 38px 50px 8px rgb(221, 44, 142) inset,50px 50px 10px 20px rgb(64, 223, 112);

ps:box-shadow设置时
(1)若水平偏移为0,竖直不等于0,则设置三边阴影
(2)w=0,h=0,设置出来四周阴影
```
- text-shadow类似box-shadow,用于给文字添加阴影效果
```
<shadow-t> = [ <length>{2,3} && <color>? ]
1.设置2dao3个length
2.(2,3)分别是x,y,blur-radius(模糊半径)
3.color颜色
ps:相对于box-shadow没有inset,没有缩放长度
```
- box-sizing属性:设置盒子模型中宽高的行为
  - content-box:padding、border都布置在width、height==外==边
  - border-box:padding、border都布置在width、height==里==边

- ==元素的水平居中显示==
  - 普通文本:text-align: center;
  - 行内元素:text-align: center;
  - 图片/input行内替换元素:text-align: center;
  - 行内块级元素inline-block:text-align: center;
  - 块级元素:在块级元素自身设置margin:0 
  而不是在父元素中设置
- ==margin水平居中的原理==:
  - 水平居中原理:子块级元素的父元素的width默认为
  ,当将子元素的margin左右设置为
  时,子元素两侧的空白部分会均分出现子块级元素居中;当设置margin-left=
  ,margin-right=0时,空白部分会全给left,子块级元素居右.
  - 垂直居中不能实现:要使子块级的元素垂直居中,父元素的height必须为
  才有相对于子元素的空白部分,而块级元素的height是由子块级元素内容撑起来的,当设置父元素的height为
  时,父元素和子元素的高度一样,无法设置垂直居中
```
水平居中:设置块级元素本身
margin:0 

居右
margin:
 0
```
### 伪类和伪元素
#### 伪类(pseudo-classes)
##### 动态伪类(dynamic pseudo-classes)
- :link:未访问
- :visited:已访问
- :hover:移动上方
- :active:点击时
- :focusa:聚焦时

ps:
  - a元素可以设置以上五种属性(顺序lvfha)
  - strong元素有hover/active
  - focus用于a/input,格式:元素:focus
  - ==去掉a元素聚焦状态的两种方==式:设置a:focus{outline:none}(隐藏);为a设置tabindex属性=-1(tabindex:表示tab键选中元素的顺序,为-1时表示不被选中)
  - 网页中利用tab键可以focus内容
  - 在给a设置(a{color:red})时相当于给a的所有动态伪类都设置了color=red

##### 目标伪类(target)
- :target
一般应用在锚点的位置,超链接(:target{})
##### 语言伪类(language)(不常用)
- :lang

##### 元素状态伪类(UI element state )
- :enable
- :disable
- :checked
格式:
<button ==disabled==>我是按钮</button>

ps:设置过程中:
  - 伪类写法(==:disabled {}==)
  - 属性选择(==button[disabled]==)
  
== button一般不常用==

##### 结构伪类(structural)
- :nth-child( )、:nth-last-child( )、:nth-of-type( )、:nth-last-of-type( )
  - :nth-child(num):正向数子元素的第num个
 (区分: 交集选择器+结构选择器 是p元素且是p同一级别的第三子元素->p:nth-child(3);后代选择器+结构选择器:p元素后代的第三个子元素->p :nth-child(3))
  - :nth-last-child(num):倒向数第num个(num=-n+3->表示倒数3个)
  - :nth-of-type(num):指定元素下的第几个元素(只看指定元素)
  - :nth-last-of-type:倒数指定元素的第几个元素(只看指定圆度)

ps:num形式(具体数字;跟字母[2n偶数,2n+1奇数等])
- :first-child、:last-child、:first-of-type、:last-of-type
- :root、:only-child、:only-of-type、:empty
  - :first-child，等同于:nth-child(1)
  - :last-child，等同于:nth-last-child(1)
  - :first-of-type，等同于:nth-of-type(1)
  - :last-of-type，等同于:nth-last-of-type(1)
  - :only-child，是父元素中唯一的子元素
  - :only-of-type，是父元素中唯一的这种类型的子元素
  - :root:给html设置属性==html{}
  - :empty->内容为空的元素(空格不算为空)

##### 否定伪类(negation)
- :not(x)->不含某个元素的样式设置
- x是一个简单选择器,包括:元素选择器、通用选择器、属性选择器、类选择器、id选择器、伪类（除否定伪类）
- ==否定选择器只支持简单的选择器不支持组合==

#### 伪元素
伪元素表示:
- :first-line、::first-line->首行文本设置属性(可使用:word-spacing、letter-spacing、text-decoration、text-transform、line-height
字体属性,颜色属性,背景属性)
- :first-letter、::first-letter->对首字母设置属性(可使用:word-spacing、letter-spacing、text-decoration、text-transform、line-height,text-decoration、text-transform、letter-spacing、word-spacing（适当的时候）、line-height、float、vertical-align[只有当float是none时])
- :before、::before->用来在元素之前插入内容
- :after、::after->用来在元素之后插入内容分
  - befor,after其中的content属性不能省略
  - content插入内容可以是文字["文字"],可以使图片[url{''}]
  - display属性可以改变元素的特性使其变为行内元素,解决不能设置宽高的问题

为了区分伪元素和伪类,建议伪元素使用::

### Emmet语法
- 生成html代码两种方式
  - !+enter
  - html:5
- 生成子代元素>
- 生成兄弟元素+
- 生成多个元素*num
- 上一级元素^
- 分组"()
- 属性(id属性(#id_name),class属性(.class_name),普通属性([title="name"]))
  - 数字$
  - 内容{}
  - 隐氏标签(默认情况下.name表示div,ul中.name表示li,table中.name表示tr)
- CSS
  - 宽高w200+h200+m20+p40
  - fz:20->font-size:20px
  - fw700->font-weight:700
  - lh20px->line-height:20px
  - bgc->background-color:#
  - dib->display:inline-block

==Emmet语法不留空格==
### CSS特性
- 继承:某些属性可以继承(color,font-size,line-height等),某些不能继承(width),==不能继承的元素给他设置inherit使其强制继承或者单独给该元素设置属性==
  - 继承可以通过浏览器进行查看
  - CSS继承的是==计算值==,并不是当初写属性时的指定值(字面值)
- 层叠
  - CSS允许多个相同名字的属性层叠在一个元素上
  - 层叠的结果是只有一个CSS属性会生效
  - 浏览器的开发工具会显示哪个CSS会生效
  - CSS哪个属性生效取决于所处环境的优先级
  - CSS优先级比较(从高到低的顺序)==:!important>内联样式>id选择器>类选择器,属性选择器,伪类>元素选择器,伪元素>通配符选择器==
  - 优先级的比较方法:先判断优先级数量,相同在比较下一个较小的全职
#### CSS属性使用经验
编写CSS属性不好使,常见原因:
- 选择器的优先级太低
- 选择器没选中对应的元素
- CSS属性的使用方式不对
  - 元素不支持CSS属性(span元素默认不支持height,width)
  - 浏览器不支持CSS属性(旧的浏览器不支持CSS3的属性)
  - 被同类型的CSS属性覆盖
 
ps:充分利用浏览器的开发者工具进行调试(增加修改样式)查错

### 列表
#### 列表元素
- 有序列表:0l.li
- 无序列表:ul,li
- 定义列表:dl,dt,dd(后两者是兄弟关系)

ps:
- 列表操作过程中存在左边的间距:margin-block-start: 1em;浏览器默认设置的结果
#### CSS列表属性
- list-style-type:设置li元素前面标记的样式
  - disc(默认实心)（实心圆）、circle（空心圆）、square（实心方块）
  - decimal（阿拉伯数字）、lower-roman（小写罗马数字）、upper-roman（大写罗马数字）
  - lower-alpha（小写英文字母）、upper-alpha（大写英文字母）
  - none（什么也没有）
- list-style-image:设置某张图片为li元素前面的标记，会覆盖list-style-type的设置
- list-style-position:设置li元素前面标记的位置，可以取outside、inside2个值(表示列表标记符号是否在内容)
- list-style(以上三者的缩写属性,不分先后顺序)一般设置为none无处列表前面的符号

### HTML-表格
#### 表格元素
- table表格
  - border(边框高度)
  - cellspadding(单元格内部的间距)
  - cellspacing:单元格之间的间距
  - width:表格的宽度
  - height:表格的高度
  - align:表格的水平对齐方式(left,right,center)
- tr表格中的行
- td行中的单元格
- tbody
- caption
- thead
- tfoot(一般不用)
- th表格的表头单元
- tr th td属性:
  - valign单元格的垂直对齐方式(top,bottom,middle,baseline)
  - align单元格的水平对齐方式
  - width宽度
  - height高度
  - rowspan单元格可横跨的行数
  - colspan单元分可横跨的列数
#### CSS表格样式
- ==设置细线边框的方式==
  - ==给table设置相框合并border-collapse:collapse==
  - ==css样式设置表格居中:[margin 0 
  ]==
- border:宽度 dashed/solid color
- border-spacing:设置单元格之间的距离,设置在table中

### HTML-表单元素
- form表单
  - action用于提交表单数据的请求url
  - method请求方法(提交数据浏览器发送的是http请求)
    - get默认方式
      - 请求URL后面以?的形式跟上发给服务器的参数，多个参数之间用&隔开，
      - 由于浏览器和服务器对URL长度有限制，因此在URL后面附带的==参数是有限制==的，通常不能超过1KB
比如
http://ww.test.com/login?phone=123&password=234&sex=1
    - post
      - 发给服务器的参数全部放在==请求体==中
      - 理论上，post传递的数据量没有限制（具体还得看服务器的处理能力
    - 通过浏览器进行查看:检查->手机虚拟->network->ALL->点击左侧选项->点击head->查看请求体

  - target在什么地方打开erl(一般不写)
  - enctype
    - 规定在向服务器发送请求之前如何对数据进行编码
    - 取值
      - application/x-www-form-urlencoded：默认的编码方式
      - ==multipart/form-data：文件上传时必须为这个值，并且method必须是post==
      - text/plain：普通文本传输
  - accept-charset:规定表单提交时使用的字符编码默认unknown(一般不写)



- input(单行文本输入框,单选框,复选框,按钮等元素)
  - type(类型)
    - text文本输入框,明文输入
    - password文本输入框,密文输入
    - radio单选框
    - checkbox复选框
    - button按钮
    - reset重置
    - submit:提交表单数据给服务器
    - file:文件
  - maxlength 允许输入的最大字数
  - placeholder:占位字符
  - readonly只读
  - disabled禁用
  - checked默认被选中(type为radio和checkbox才可用)
  - 
  focus:当页面加载时自动聚焦
  - value取值->一般有输入的input不用设置value值,必须设置的是select,checkbox,select等
  - form设置所属的form属性(填写form元素的id)一旦使用了此属性,input元素及时不写form元素内部,.他的数据也能提交给服务器
  - 
- textarea(多行文本框)
  - cols
  - rows
  - resize(可选值)
    - both(默认)
    - horizontal
    - vertical
- select,option(下拉选择框)
  - select
    - multiple可以多选
    - size显示多少项
  - option
    - 默认被选中
- button按钮
- label表单元素的标签(一般和input绑定使用)
- fieldset表单元素组
- legend:fieldset的标题

ps:
- checked属性应用在radio和checkbox
- selected应用在select元素中
- input的value值
  - 设置按钮的文字
  - 设置radio和checkbox被选中时,提交给服务器的值
  - 设置文本输入框的默认值
- 假设服务器那边规定phone是手机，password是密码，code是验证码
但是前端页面这边密码的name写成了pwd，那么后果是：服务器接收不到密码值
- 文件上传的必要条件
  - method="post"
  - enctype="multipart/form-data"
  - input要有name值
<form action="http://www.baidu.com" method="post" enctype="multipart/form-data">
-->

- id和name值不一定要一致，name值是由服务器（后台）决定的
- checkbox的name和value值都是由服务器决定的,同一种类型的checkbox，name值要保持一致
- 重置提交的前提(二者的value值可以省略):
  - 1.==type是reset类型==
  - 2.==所有的内容必须在一个整体form元素==
- ==有name属性,才会提交给服务器==
- ==按钮的两种表达==
  - input元素->type="button"(显示按钮通过value设置)
  - button元素->type(默认submit
- radio必须设置相同的name值才能设置单选框
- input和label的关系
  - 给label的for属性和input的id属性绑定相同的名称,将二者关联起来,点击其中一个功能都会执行
- 去除input的tab选中效果
  - 设置outline:none
  - 设置tabindex=-1
- 表单提交:将用户在input中输入的内容提交给服务器(两种方式)
  - 传统的表单提交(SU优化)
    - 将所有的input放在form中
    - form设置action(服务器的地址)
    - input/button类型是submit
    - 点击submit,自动将所有的数据提交给服务器
    - 弊端:
      - 会进行页面的跳转(意味着服务器必须提前将一个页面写好,前端直接展示这个页面)[服务器提前将页面写好:==服务器渲染==]
      - 不方便进行表单数据的验证
 - 前后端分离
   - 通过JavaSacript获取表单的信息
   - 通过正则表达式获取表单的验证
   - 发送ajax请求,将数据传递给服务器
   - 验证成功后,服务器返回结果,需要前端解析这个数据,并且决定显示什么内容)==(前后端渲染和前端路由==)
### CSS属性-元素类型
#### 元素类型划分
- 根据元素的显示(都不能在同一行显示)类型,html元素可以分为两类 
    - 块级元素
      - 独占父元素的一行
      - 常见元素有:div,p,h1-h6,ul,ol,li,dl,dt,dd,table,form,article,aside,footer,header,hgroup,main,nav,section,blockquote,hr等
    - 行内元素
      - 多个行内元素可以在同一行显示
      - 常见的元素:span,strong,a,imag,code,iframe,label,input,button,canvas,embed,object,video,audio等
- 根据元素的内容(是否浏览器会替换元素)类型,分为两类
  - 替换元素(replace elements):元素本身没有实际内容,浏览器根据元素的类型和和属性来决定元素的具体显示内容
    - img,input,iframe,video,embed,canvas,audio,object等
  - 非替换元素(non-replace elements)
    - div,p,pre,h1-h6,ul,ol,li,dl,dt,dd,table,form,article,aside,footer,header,hgroup,main,nav,section,blockquote,hr,a,strong,span,code,lable,等
- 元素分类总结

元素分类|是否替换 | 具体元素 | 默认特征 |
---|---|---|---
块级元素(block-level elements)|替换元素|  |
块级元素(block-level elements)| 非替换元素|div、p、pre、h1~h6、ul、ol、li、dl、dt、dd、table、form、article、aside、footer、header、hgroup、main、nav、section、blockquote、hr等|独占父元素的一行;可以随意设置宽高;高度默认由内容决定|
行内元素(inline elements) | 替换元素 |img、input、iframe、video、embed、canvas、audio、object等|跟其他行内级元素在同一行显示;可以随意设置宽高|
行内元素(inline elements) | 非替换元素|a、strong、span、code、label等|跟其他行内级元素在同一行显示;不可以随意设置宽高;宽高由内容决定

#### CSS属性
- 块级元素的由来display
  * block(==浏览器会默认给div/p/h1...元素设置了display:block==)
  * inline(将block元素传回到行内元素)
  * none(隐藏元素不占据空间)
  * ==inline-block==
    * 可以设置和其他元素在同一行
    * 可以设置宽度和高度
- inline-block详解
  * 可以让元素同时剧本块级,行内级元素的特征
    * 跟其他行内级元素在同一行显示
    * 可以随意设置宽高
    * 宽高默认由内容决定
  * 对外来说他是行内级元素
  * 对内来说是块级元素
  * 常见用途
    * ==让行内级非替换元素(a,span)能够虽是设置宽高==
    * ==让块级元素能够和其他元素在同一行显示==
- 浮动会触发==BFC==(BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。)
- visibility能控制元素的可见性
  - 常见的两个值:
      - visible:显示元素
      - hidden:隐藏元素
  - visible:hidden和display:none的区别
    - visible:hidden看不见元素,还占着原来的位置
    - disable:none不仅看不见元素,而且元素框也会被移出,不会占据任何位置
- overflow 用于控制内容溢出时的行为
  - visible溢出内容依然可见
  - hidden溢出的内容直接裁剪
  - scroll溢出的内容被裁剪时,可以通过滚动机制进行查看(会一直显示滚动条区域,滚动条占用的空间属于width,height)
  - 
  自动根据内容是否一出来提供滚动机制
  - ~~overflow-x和overflow-y~~两个属性可以分别设置水平和垂直方向(建议使用overflow,有些浏览器不支持)
  - 元素之间的空格(行内元素在编辑时会有回车显示空格),解决方案
    - ~~元素代码之间不要留空格~~
    - ~~注释掉空格~~
    ```
    <span>span11</span><!--
    --><span>span2</span>
    ```
    - ~~设置父元素的font-size为0,然后在元素中重新设置自己需要的fongt-size(此方法在Safari不适用)~~
    - ==给元素添加float属性==
- 注意:
  - 块级元素,inline-block(行内级元素)
    - 一般情况下可以包含任何元素
    - 特殊情况下p元素不能包含其他块级元素
  - 行内元素(a,span,strong)
    - 一般情况下只能包含行内元素
    
### 盒子模型(Box Model)
- 内容相关属性
  - width
  - min-width
  - max-width
  - height
  - min-height
  - max-height
- 内边距属性
  - padding-top
  - padding-right
  - padding-bottom
  - padding-left
  - padding:padding-top,right,bottom,left顺序
    - 按照顺时针方向设值：top、right、bottom、left
    - 如果缺少left, 那么left就使用right的值
    - 如果缺少bottom, 那么bottom就使用top的
- word-break
- 外边距相关属性
  - margin-top
    - ==如果块级元素的顶部线和父元素的顶部线重叠，那么这个块级元素的margin-top值会传递给父元素==
  - margin-right
  - marin-bottom
    - 如果块级元素的底部线和父元素的底部线重写，并且父元素的高度是==
    ==，那么这个块级元素的margin-bottom值会传递给父元素
  - margin-left
    - margin：是margin-top、margin-right、margin-bottom、margin-left的简写属性
  - ==margin的上下折叠==(垂直方向上相邻的2个margin（margin-top、margin-bottom）有可能会合并为1个margin，这种现象叫做==collapse==（折叠）
    - 水平方向上的margin（margin-left、margin-right）永远不会collapse
    - 合并规则两个值进行比较，取较大的值
    - ==防止margin collapse==？
      - ==只设置其中一个元素的margin==
  - ==父子块级元素之间margin的折叠==
  - ==如何防止出现margin的上下传递问题==
    - ~~给父元素设置padding-top\padding-bottom~~
    - ~~给父元素设置border~~
    - 触发BFC: 设置父元素的overflow为非visible[
      (推荐)]
    - 给父元素设置padding
  - ==触发BFC(block-format-content块级格式化上下文)的方式:==
    - 设置overflow为非visible
    - 设置浮动(float)
  - ==margin上下同时设置会出现外边距合并==
  - ==margin左右同时设置会进行叠加==
  - 建议
    - margin一般用来设置兄弟之间的间距
    - padding一般用来设置父子之间的间距
- 英文单词默认是不能断开的,所以才会出现溢出div的情况,
  - 1.通过设置word-break使其换行(==wordbreak:break-all==)
  - 2.英文字母中间添加空格
- border边框
  - 边框属性
      - 边框宽度
        - border-top-width、border-right-width、border-bottom-width、border-left-width
        - border-width是上面4个属性的简写属性
      - 边框颜色
        - border-top-color、border-right-color、border-bottom-color、border-left-color
        - border-color是上面4个属性的简写属性
      - 边框样式
        - border-top-style、border-right-style、border-bottom-style、border-left-style
        - border-style是上面4个属性的简写属性
      - border-style取值
        - none
        - dotted一系列点
        - dashed虚线
        - solid
        - double边框有两条实线。两条线宽和其中的空白的宽度之和等于border-width的值
        - groove雕刻在画布之内
        - ridge画布中凸出来
        - inset:嵌在画布内
        - outset:inset相反
      - border-top,border-right,border-bottom,boder-left(按照顺时针方向)
        - border-top:2px solid red
        - 边框颜色,宽度,样式,的编写顺序随意
        - border统一设置四个方向的
          - border: 2px solid #f00;
  - 边框形状
    - 立体矩形(设置宽高以及其中两个边框样式)
    - 梯形(设置宽高和背景以及四个边框)
    - 三角形
      - (设置宽高为0,以及四个边框样式[其中三个颜色设置为透明tranparent]
      - 设置上三角在设置下三角时可以通过transform旋转生成下三角
    - 设置圆(通过border-radius,设置百分数50%)
  - 圆角半径属性(顺时针方向)单位pt
    - border-top-left-radius
    - border-top-right-radius
    - border-bottom-right-radius
    - border-bottom-left-radius
    - border-*-*-radius定义的是四分之一椭圆的半径
      - 第一个值是水平半径
      - 第二个值是垂直半径
    - ==border-radius可以设置百分比==
      - 参考的是border-box的宽度
    - border-radious:是4个值的顺序是top-left、top-right、bottom-right、bottom-left（顺时针方向）
```
border-radius: 10px 20px 30px 40px/15px 25px 35px 45px ;
斜线/前面是水平半径，后面是垂直半径
```
- 行内非替换元素不起作用的属性
  - width
  - height
  - margin-top
  - margin-bottom
- 以下属性对行内非替换元素的效果比较特殊
  - padding-top,padding-bottom,上下方向的border
  - 使用在行内元素中元素padding上下和border上下设置只是扩大了span的空间并覆盖上下的元素内容,而不占据空间,上下块也并不会发生上下移动,
- outline属性
    - outline设置元素的外轮廓
      - ==不占用空间==
      - ==默认显示在boder的外面==
    - 相关属性:
      - outline-width
      - outline-style:取值和border一样
      - outline-color
      - outline:outline-width、outline-style、outline-color的简写属性，跟border用法类似
    - 应用实例
      - 去除a元素,input元素的focus轮廓效果
- box-shadow
  - box-shadow可以设置一个或者多个阴影
    - 每个阴影用<shadow>表示
    - 多个阴影之间用逗号隔开,从前到后叠加
    - <shadow>的常见格式:
```
<shadow> = inset? && < length>(2,4) && <color>?
(1)第1个<length>：水平方向的偏移，正数往右偏移
(2)第2个<length>：垂直方向的偏移，正数往下偏移
(3)第3个<length>：模糊半径（blur radius）
(4)第4个<length>：延伸距离
(5)<color>：阴影的颜色，如果没有设置，就跟随color属性的颜色
(6)inset：外框阴影变成内框阴影

ps:
1.正则表达式中?表示0个或者1个
2.<>里面的内容换具体的内容eg:red
3.&&表示此符号连接的内容之间先后顺序
4.(2,4)表示可输入2到4个数值
```  
```
box-shadow: 64px 38px 50px 8px rgb(221, 44, 142) inset,50px 50px 10px 20px rgb(64, 223, 112);

ps:box-shadow设置时
(1)若水平偏移为0,竖直不等于0,则设置三边阴影
(2)w=0,h=0,设置出来四周阴影
```
- text-shadow类似box-shadow,用于给文字添加阴影效果
```
<shadow-t> = [ <length>{2,3} && <color>? ]
1.设置2dao3个length
2.(2,3)分别是x,y,blur-radius(模糊半径)
3.color颜色
ps:相对于box-shadow没有inset,没有缩放长度
```
- box-sizing属性:设置盒子模型中宽高的行为
  - content-box:padding、border都布置在width、height==外==边
  - border-box:padding、border都布置在width、height==里==边

- ==元素的水平居中显示==
  - 普通文本:text-align: center;
  - 行内元素:text-align: center;
  - 图片/input行内替换元素:text-align: center;
  - 行内块级元素inline-block:text-align: center;
  - 块级元素:在块级元素自身设置margin:0 
  而不是在父元素中设置
- ==margin水平居中的原理==:
  - 水平居中原理:子块级元素的父元素的width默认为
  ,当将子元素的margin左右设置为
  时,子元素两侧的空白部分会均分出现子块级元素居中;当设置margin-left=
  ,margin-right=0时,空白部分会全给left,子块级元素居右.
  - 垂直居中不能实现:要使子块级的元素垂直居中,父元素的height必须为
  才有相对于子元素的空白部分,而块级元素的height是由子块级元素内容撑起来的,当设置父元素的height为
  时,父元素和子元素的高度一样,无法设置垂直居中
```
水平居中:设置块级元素本身
margin:0 

居右
margin:
 0
```

### 快捷键
- Alt+shift+F,代码格式化
- alt+下键,将内容下移
- 颜色设置中#666(相同的数字代表灰色)
- [颜色选择网址](https://flatuicolors.com/)
- [web前端资源网"学习网址"](http://www.webqdkf.com/)
- [网站模板](https://72k.us/file/21793581-422825200)














    


