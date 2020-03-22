- [JavaScript介绍](#javascript介绍)
- [JavaScript运算符](#javascript运算符)
- [JavaScript数组](#javascript数组)
- [JavaScript对象](#javascript对象)
- [函数](#函数)
- [快捷键及查询网址](#快捷键及查询网址) 
- [数组](#数组)  
- [函数](#函数-1)  
- [内建对象](#内建对象) 
- [其他知识](#其他知识)
- [宿主对象DOM(文档对象模型,操作页面)](#宿主对象dom文档对象模型操作页面)  
- [DOM操作HTML](#dom操作html)    
- [DOM查询](#dom查询)
- [DOM操作CSS(内联样式)](#dom操作css内联样式)
- [事件](#事件)
- [BOM(浏览器对象模型,操作浏览器)](#bom浏览器对象模型操作浏览器)
- [JSON](#json)
- [实践知识点总结](#实践知识点总结)
- [快捷键及查询网址](#快捷键及查询网址-1)

### JavaScript介绍
- 认识JavaScript
  - JavaScript作用是和网页进行交互的
  - JavaScript是一门编程语言
  - 编程语言的发展史:
    - 机器语言
    - 汇编语言
    - 高级语言:avaScript/c/c++
- JavaScript历史
  - 诞生背景:1995年网景公司Eich,Scheme,发明的JavaScript
  - 微软公司:JScript
  - 1996年网景公司向ECMA(欧洲计算机制造商协会)提交了提案: ECMA指定这门语言的标准
  - 1997年ECMA指定标准: ECMAScript
  - JavaScript只是ECMAScript一种实现:
  - ==JavaScript: JavaScript + DOM + BOM==
- JavaScript特点
  - 解释性语言
    - 读取一行,解释一行,执行一行
    - 另外一种是编译型语言
  - 动态类型语言
    - 在运行阶段可以动态修改变量的类型
    - var name="why"
    - name=123
  - JavaScript目前可以做哪些工作
    - 网页特效
    - 服务端开发(node.js)
    - 命令行工具
    - 桌面程序
    - APP(Cordova)
    - 控制硬件(Ruff)
    - 游戏开发(cocos2d-js)
  - 注意事项
    - script标签时双标签不能写成单标签
    - 省略type属性:，<script>标签中会使用 type="text/javascript"。现在可不写这个代码了，因为JavaScript 是所有现代浏览器以及 HTML5 中的默认脚本语言
    - 加载顺序
      - 作为HTML文档内容的一部分，JavaScript默认遵循HTML文档的加载顺序，即自上而下的加载顺序
      - 推荐将JavaScript代码和编写位置放在body子元素的最后一行
      - JavaScript代码严格区分大小写
- JavaScript填写位置
    * HTML元素中
    * script标签里面
    * 外部引入js文件
- JavaScript注释
  - 单行注释
  - 多行注释
  - 文档注释
- 浏览器的交互方式
  - 交互方式一:浏览器弹出窗口
  - 交互方式2:在控制台打印内容,输出内容多个之间通过逗号隔开
  - 交互方式3:DOM操作
  - 交互方式4:接收用户输入的内容
```
// 1.交互方式一:浏览器弹出窗口
alert('Hello World')
// 交互方式2:在控制台打印内容,输出内容多个之间通过逗号隔开
console.log('hello 你好',"你好",18)
// 3.交互方式3:DOM操作
document.write("<h2>Hello HTML</h2>")
// 4.交互方式4:接收用户输入的内容
var age = prompt("请输入你的年龄")
console.log("你的年龄是:",age)
```
- 变量的命名方式
  - 变量的声明:在一个JavaScript中声明变量使用关键字var(后续学习ES6还有let,const声明方式)
  - 这个过程也可以分开操作
  - 同时声明多个变量
  - 变量的命名规则
    - 第一个字符必须是一个字母、下划线（ _ ）或一个美元符号（ $ ）
    - 其他字符可以是字母、下划线、美元符号或数字。
    - 不能使用关键字和保留字命名：[常用的关键字和保留字查询地址](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Reserved_words)
  - 变量名命名规范(建议遵守)
    - 多个单词使用驼峰标识
    - 赋值=两边都加上空格
    - 一条语句结束后都添加分号
  - 定义变量保存两个数字并将变量的数字进行交换
    - 1.使用临时变量
    - 2.不使用临时变量
```
定义变量保存两个数字并将变量的数字进行交换
        1.使用临时变量
        2.不使用临时变量 
```
- JavaScript常见的基本类型
  - 数值型（Number）
    - 数字的表示方式:十进制,二进制,八进制
    - 数值表示范围:
    - NaN，即非数值（Not a Number）是一个特殊的数值，JS中当对数值进行计算时没有结果返回，则返回NaN
    - isNaN，用于判断是否不是一个数字。不是数字返回true，是数字返回false。

```
var n10 = 10
var n16 = 0x100
var n8 = 0o100
var n2 = 0b100
console.log(n10,n16,n8,n2)
```
  - 字符串型（String）
    - 字符串的表示可以使用单引号也可以使用双引号。
    - 转义字符：\’	\” \t制表符	\n换行符,\\反斜杠,\b退格符.\r回车符四个的用法
    - 获取字符串的长度：length属性
```
无括号,length是属性
str.length
```
  - 布尔型（Boolean）
    - 两个取值: true/false
  - 空类型（Null）
    - Null类型也是只有一个值：null
    - 通常对象在回收时设置为null
  - 未定义型（Undefined）
    - 只有一个值undefine
    - 在使用 var 声明变量但未对其加以初始化时，这个变量的值就是 undefined
    - typeof对没有初始化和没有声明的变量都会返回undefined
  - Null和Undefined的关系：
    - undefined值实际上是由null值衍生出来的，所以如果比较undefined和null是否相等，会返回true
    - 但是转化成数字时，undefined为NaN，null为0
  - typeof可以查看变量类型
```
两种写法都可以
console.log(typeof str)常用
console.log(typeof(str))
```
- ==变量存储的本质==
  - 内存的分类：栈空间和堆空间
  - 基本数据类型分配在栈空间
  - 引入数据分配在堆空间
  (浏览器数据类型加载在内存中的堆空间和栈空间)
- 数值类型的转换
  - Number(其他类型)
  - parseInt(数值,radix基数):将string->整数
  - parseFloat():将string->浮点数
- 转换成字符串类型
  - toString()方法格式:变量.toString()
    - 只能转换数值类型和布尔类型
  - String(变量): 可以转换所有类型
  - 字符串拼接:格式:变量+""
- 转换成boolean类型
  - 转成false的五种:"",0,undefined,null,NAN
  - 其他均为true
### JavaScript运算符
- 算术运算符/
- 赋值运算符/
- 关系(比较)运算符/
  - '\==='表示全等，他和'=='基本一致，不过'=='在判断两个值时会进行自动的类型转换，而'==='不会。
  - 比如”123”==123 会返回true，而”123”===123会返回false；
  - 除了!=以外，JS中还提供了!==
  - !==也不会进行自动类型转换，比如”123”!=123 会返回false，而”123”!==123会返回true；
- 逻辑运算符 
  - 逻辑与运算符可以应用于多个运算符,且不一定为boolean值
  - 对于非布尔的运算,会先转换为布尔值
  - 逻辑与和逻辑或的特殊用法
```
   /*
        1.逻辑与的特殊用法:多个条件都为true
        先判断存在不存在,存在则进行后面函数的调用,就不会出现报错的情况
       与运算的特殊用法:多个条件都为true
       有一个条件为falsename后续将不再判断

        */
       var name = "ftt";
    //    对象中存放的是键值对
       var info = {
           name: "ftt",
           age: 18,
           height: 1.65,
        //    eating: function() {
        //        console.log("吃东西");
        //    }
       };
       info.eating && info.eating()
       /*
       2.逻辑或的特殊用法:只要有一个条件为true
       一旦遇到条件为true.那么后面的条件将不再执行
       */
      var message = info.name || info.age || info.height
      console.log(message)
```
- 三元运算符
  - 格式:表达式1 ? 表达式2 : 表达式3
  - 满足表达式1执行表达式2,否则执行表达式3
- switch分支语句
- 断点调试(debug)
  - 通过打印到控制台
  - 开启断点调试的两种方式
    - 找到自己的源代码,在其中打断点
    - 在代码中写上debugger

### JavaScript数组
- 数组
  - JavaScript中的数组我们可以通过字面量的方式创建：[]
    - []中存放一组数据
    - 虽然JavaScript支持在数组中存放不同的数据类型，但是开发中建议存放相同的类型  
  - 数组常见操作
    - length属性
    - 获取数组某个位置通过索引值
    - 在JavaScript中获取一个不存在的索引值，不会报错，结果为undefined
- 冒泡排序
  -  相邻元素先进行比较,不满足条件交换位置,每次排序都选出里面最大的元素
```
var num = [3,2,8,9,4,3,6,7,2]
for (i = num.length-1; i > 0;i--) {
    for (j = 0;j < i;j++) {
        if (num[j] > num[i]) {
            var temp = num[i];
            num[i] = num[j];
            num[j] = temp;
        }
    }
}
console.log(num);
```
### JavaScript对象
- JavaScript主要分为:ES(ECMAScript),BOM,DOM
- 对象的分类:
  - 内建对象
    - ES6标准中定义的对象,在任何的ES的实现中都可以使用
    - 比如:Math String Number Boolean Function Object
  - 宿主对象
     - 由JS的运行环境提供的对象,目前来讲主要由浏览器来提供
     - 比如:BOM,DOM
  - 自定义对象
    - 由开发人员自己创建的对象
- 对象的基本操作
  -  创建:构造函数专门用来创建对象的函数,通过new创建的函数都叫做构造函数,通过typeof查看属性
    - 两种方式:1.通过new构造函数创建
    - 直接通过大括号中的键值对进行创建var obj2 = {
            name: "ftt",
            age: 18,
            gender: "女",
        };==使用奇怪的名字,属性名要添加双引号==
  -  向对象中添加的值称为属性,属性的添加格式:对象.属性名 = 属性值
  -  修改属性:对象.属性名 = 新属性值
  -  通过in字符查看对象中属性的存在格式:"属性名" in 对象
```
/*
对象的声明:
1.通过构造函数new进行创建
*/
obj = new Object();
obj1 = new Object();
// 2.特殊的属性名通过中括号进行创建[] 更加灵活,通过传递变量进行属性的读取
obj["123"] = "你好";
console.log(obj["123"]);
var n = "123";
console.log(obj[n]);
// js对象的属性值可以是任意的值
obj.test = obj1;
obj.name = "ftt";
console.log(obj.test);
// 通过in字符查看对象中属性的存在格式:"属性名" in 对象
console.log("test" in obj);
```
- 基本数据类型和引数据类型
  - 基本数据类型的值是无法修改的,不可变的,基本数据类型比较的是==值==的比较,也就是两个变量的比较;保存在栈中
  - 引用数据类型:保存在内存中的对象;当一个变量是一个对象时,实际上变量中保存的并不是对象本身,而是对象的==引用==;当从一个变量向另一个变量复制引用类型的值时,会将对象的引用复制到变量中，并不是创建一个新的对象。这时，两个变量指向的是同一个对象。因此，改变其中一个变量会影响另一个。
- 堆和栈
  - JS在运行时数据时保存在栈内存和堆内存中
  - 栈内存用来保存变量和基本类型,堆内存用来保存对象
  - 声明变量时实际是在栈内存中创建了一个空间来保存变量
  - 如果是基本类型则在栈内存中直接保存，
  - 如果是引用类型则会在堆内存中保存，变量中保存的实际上对象在堆内存中的地址。
#### 函数
- 函数也是对象,可以存储东西
- 函数是由一系列子程序组成
- 函数可以封装一些可执行的代码,拥有普通对象的功能
- 函数需要调用才能执行:函数名()
- 函数通过typeof属性查看时显示object类型
- 创建函数两种方式:
  - 通过构造函数创建(开发中不用)var fun = new Function("console.log('Hello World');");
   - 使用函数声明创建函数:function 函数名(参数1,...){语句}
   - 使用函数表达式的方式创建函数
```
// 创建函数1(通过构造函数,一般不使用)
var fun = new Function("console.log('Hello World');");
// 2.创建函数通过声明的方式
function fun1 (){
    console.log("我是函数");
    alert("哈哈哈");
    document.write("dkfsoj;ijs;diof");
}
// 3使用函数表达式:匿名表达式,没有函数名
var fun3 = function(){
    console.log("我是匿名函数");
}
// 调用函数
fun();
fun1();
fun3();
```
- 函数参数:
  - 调用函数时解析器不会检查实参的类型和个数
  - 当实参的个数少于形参时
- 函数返回值
  - 函数中通过return返回值;
  - 不写return时,返回undefined
  - return可以返回任何类型的值
- 实参可是是任意数据类型(数值,对象,函数等)
  - sayHello和sayHello()的区别:
    - sayHello是一个对象,
    - sayHello()是函数调用,传入的是返回值 
- 立即执行函数
  - 立即执行函数只会执行一次
  - 两种不同的写法:立即执行函数需要加括号()才不会报错,将他们看成一个整体
 ```
立即执行函数:只会执行一次 没有参数的执行函数,注意需要加()才不会报错,若要立即执行只需要在最后加上()
(function(){
    console.log("我是立即执行函数");
})();
// 有参数的立即执行函数
(function(a,b){
    console.log(a+b);
})(123,345);
  ```
- 对象的属性可以是任意的数据类型行(函数)
```
obj.test;//是一个函数
obj.test();//1,调对象的方法
fun1();//2,调函数,1,2只是名称上的区别
```
- 函数的属性查看方法:
  - 对象.属性名
  - 对象[变量名]更加灵活方便
- 通过枚举的方式遍历对象的属性
  - obj[n]这里的n是变量所有只能通过变量的方式查看属性名
```
 // 通过for (var n in obj)枚举对象中的属性
        var obj = {
            name:"猪八戒",
            age:17,
            gender:"男",
            address:"高老庄"
        }
        for (var n in obj) {
            console.log(n + " "+ obj[n]);
        }
```
- 作用域:
  - 全局作是最外围的执行环境,在web浏览器中,全局执行环境被认为是windows对戏哪个,因此所有的全局变量和函数都作为windows对象啊的属性和方法创建
  - 每个执行环境中的所有代码执行完毕后,该环境被销毁,保存在其中的变量和函数定义也随之销毁
  - 在内部环境可以读取外部环境的变量,反之不行.
- 变量的生声明:
  - 1.变量的声明:使用var关键字声明的变量会在所有代码执行之前就声明(但不会赋值),所以即使在声明之前调用会显示undefined,不用var声明则会直接报错;
  - 2.函数的声明:
       - 使用函数声明形式创建的函数function 函数名(){}会在所有代码执行之前就被创建,所以我们可以再函数声明之前就调用
       - 使用函数表达式创建的函数,不会被声明提前,不能提前进行条用
```
console.log(a);//undefined
var a = "123";
var b = "hahah ";
console.log(a);//123

fun();//执行
fun1();//报错显示不是function,var声明的为赋值的默认为undefined
function fun() {
   console.log('我是声明函数声明的function函数');
}
var fun1 = function() {
   console.log("我是函数表达式声明的函数")
}
```
- 函数作用域
  - 调用函数时创建函数作用域,函数执行完毕,函数作用域销毁
  - 每调用一次函数就会创建新的作用域,他们之间是互相独立的
  - 在函数作用域中可以访问全局作用域,反之不行
  - 在函数作用域中操作一个变量时现在自身作用域中寻找,没有则向上一级寻找,若全局作用域中都没有,则会报错referenceError
  - 在函数中访问全局变量可以使用window对象
  - 函数作用域中var声明的变量也会提前;函数声明也会在所有代码执行之前也会被调用
  - 在函数中不使用var声明的变量都会成为全局变量
  - 形参就相当于在函数中声明了一个变量,调用函数时如果不写实参,就报undefined
-  ==解析器调用函数每次都会向函数内部传递一个隐含参数this==,
  - this指向的是一个对象,这个对象我们称之为==函数执行上下文对象==
  - 根据函数的调用方式不同,this会指向不同的对象
    - 以函数的形式调用时,this永远指向window
    - 以方法的形式调用时,this就是调用方法的那个对象
 ```
function fun(){
   console.log(this.name);
} 
var name = "全局的name属性";
//以方法的形式调用
window.fun();
//以全局的形式调用
fun();
 ```
- 工厂化方法创建对象
  - 弊端是:所有的对象都是object的,是==通过new创建出来的对象==,不能区分不同的对象,因此提出构造函数的概念
```
// 工厂化方法创建
function createPerson(name,age,gender){

    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.gender = gender;
    obj.sayHello = function(){
        alert(this.name);
    }
    return obj;
}
var obj1 = createPerson("猪八戒",13,"男");
var obj2 = createPerson("孙悟空",13,"男");
var obj3 = createPerson("汤森",13,"男");
var obj4 = createPerson("白龙马",13,"男");
obj1.sayHello();
obj2.sayHello();
obj3.sayHello();
obj4.sayHello();
```
- 构造函数
  - 创建一个构造函数专门用来创建指定的对象;构造函数是一个普通的函数,创建方式和普通的方式没有区别;不同的构造函数习惯首字母大写
  - 构造函数和普通函数的区别:
    - 普通函数是直接调用
    - 构造函数是使用new关键字来调用
  - 构造函数的执行流程:
    - 立刻创建一个新的对象
    - 将新建的对象设置为函数中的this,在构造函数中可以使用this来引用新建的对象
    - 逐行执行函数中的代码
    - 将新建的对象作为返回值返回
  - 使用同一个构造函数创建的对象属于一类对象,也将一个构造函数称之为一个类
  - 我们将通过构造函数创建的对象称之为==实例==
  - 通过instanceof 可以判断对象实例所属情况,格式:==实例 instanceof 对象==
- this的三种情况:
  - 当以函数形式调用,this是window
  - 当以方法的形式调用,this是调用方法的对象
  - 当以构造函数调用,this就是创建的函数
 ```
function Dog(name,age){
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        alert(this.name);
    }
}
function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayHello = function(){
        alert(this.name);
    }
}
var per = new Person("猪八戒",12,"女");
console.log(per);
console.log(per.sayHello());
var dog = new Dog("小黄",23);
console.log(dog)
console.log(dog.sayHello())
// instanceof
console.log(per instanceof Object);
console.log(dog instanceof Dog);
console.log(per instanceof Person);
改进: 将sayHello()方法在全局作用域中定义,避免每次创建新的对象都会新建函数sayHello,占用内存
缺点:定义在全局变量中会污染全局变量的环境,因此提出了原型的概念

 ```
 - ==原型解决方案==:
  - 创建构造函数,可以将这些对象共有的属性和方法添加到构造函数的原型对象中,不用分别给每个独享添加,也不会影响到全局作用域,就可以使每个对象都可以访问到这些属性和方法
 - ==原型==:
   - 我们所创建的每个函数,解析器都会添加一个属性==prototype==,这个属性对应着一个对象,就是==原型对象==
   - 函数调用
     - 如果函数作为普通函数调用,原型没有任何作用;
     - 作为构造函数调用,他所创建的每一个实例都会有一个隐含的属性指向该构造函数的原型对象,可以通过__proto__来访问
  - 原型对象相当于一个类的公共区域,所有同一个类的实例都可以访问这个原型对象,可以将对象中共有的内容统一设置到原型对象中
  - 当我们访问对象中属性和方法是,他现在自身中寻找,如果有则直接使用,否则会去原型对象中寻找
  - 
```
function MyClass(){

}
var c1 = new MyClass();
// 给实例中添加属性和方法
c1.a = "abc"
c1.fun = function(){
    console.log("我是c1的方法");
}
var c2 = new MyClass();
console.log(MyClass.prototype==c1.__proto__);//返回结果为true,函数的属性prototype==实例的属性__proto__
// 给原型对象中添加属性/方法
MyClass.prototype.a = 123;
MyClass.prototype.fun = function(){
    alert("hello");
}
// 访问原型对象中的内容
console.log(c1.fun());
console.log(c1.a);
console.log(c2.fun());
console.log(c2.a);
```
- 查看对象中的属性
  - 使用in查看对象中的属性:使用in检查对象中是否含有某个属性,如果对对象中没有,原型对象中有,也会返回true;格式:"属性名" in 实例.
  - 使用hasOwnProperty()来检查对象自身的属性,且只能检查自身的属性格式:实例.hasOwnProperty("属性名")
  - hasOwnProperty()在原型的原型的对象中存在
  - 原型的对象中也存在原型对象,当我们使用一个对象的属性或方法时,会现在自身中寻找,有则直接使用,没有则去原型对象中寻找,不存在在去原型的原型的对象中去寻找,直到找到object对象的原型,如果object中没有则返回undefined,==object对象中没有原型,原型为null==.
```
in方法使用
"name" in c1
hasOwnProperty方法使用
per1.__proto__.hasOwnProperty("toString")
注意:查看函数方法也是只看方法名
```
- toString方法重写在原型对象中会对所有创建的实例都起作用
```
// 定义在原型对象中显示
Person.prototype.toString = function(){
    return "Person[name="+this.name+"age="+this.age+"gender:"+this.gender+"]";
}
```
- ==垃圾回收(GC)==
  - 不再使用的对象的内存将会==自动回收==，这种功能称作垃圾回收
  - 所谓不再使用的对象，指的是没有任何一个属性(变量)引用的对象
  - 垃圾回收目的:是开发者不必为对象的生命周期管理花费太多的时间object=null
  - JS引擎中拥有自动垃圾回收机制,需要回收将obj=null


### 快捷键及查询网址
- [常用的关键字和保留字查询地址](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Reserved_words)
#### 数组
- 数组也是一个对象,通过索引进行获取
- 数组的创建
  - 通过new构造函数进行创建
  - 根据字面量创建数组[]
    - 创建数组的同时还可以赋值
    - 计算数组的长度length属性
    - 设置数组的长度length
    - 在创建数组时如果赋值只有一个数字,表示数组的长度,而非index=0处的值
    - 数字中的元素可以是任意数据类型(数字,字符串,对象,函数,数组等)
```
var arr = new Array(10, 20, 30);
var arr2 = [10, 20, 30];
```
- 数组的方法
  - 数组push()末尾添加元素并返回新的数组长度值
  - pop()末尾删除最后一个元素,并返回元素   
  - unshift()开头添加新的元素并返回新的数组长度值
  - shift() 开头删除第一个元素并返回删除的元素
  - slice(start,end):提取数组中指定的元素
    - start包含
    - end不包含,可以省略,默认最后一个
    - 可以传递负数,表示从后面开始算起
  - splice()用于删除数组中的元素
    - ==使用该函数会改变原数组==,会将指定元素从原数组中删除并将删除的元素作为返回值返回
    - 参数:
      - 1.表示开始位置的索引
      - 2.表示删除元素的个数
      - 3.第三个及其以后可以传递一些元素,这些元素会自动插入到开始位置索引前面
  - concat()可以连接两个或多个数组
    - 该方法不会对原数组产生影响.而是将转换后的字符串作为结果返回
    - arr.concat(arr1,arr2)参数可以是数组也可以是元素
  - jojn()将数组转换为字符串
    - 不会对原数组产生影响
    - 参数为字符连接的符号
  - reverse()翻转数组元素中的内容,会改变组原数组(无参数)
  - sort()对数组中的数字进行排序,会改变原数组,默认暗转unicode编码进行排序
    - 我们可以自己制定排序规则:
      - 在sort()中添加一个回调函数,来指定排序规则,回调函函数中需要指定两个形参,浏览器将分别使用数组中的元素作为实参去调用回调函数.使用哪个调用不确定,但肯定在数组中a肯定在b前面
      - 浏览器柑橘回调函数的返回值来决定元素的顺序
        - 大于0 元素交换位置
        - 小于0元素位置不变
        - 等于0,则认为两个元素相等也不交换位置
    - 升序排列(a-b)
    - 降序排列(b-a)
```
var arr4 = ['1','4','3','5','6','2'];
//回调函数
arr4.sort(function(a,b){
    return a-b;
})
console.log(arr4);
```

- ==forEach()方法只支持IE8以上浏览器支持的==
    该方法需要函数作为参数
    - 数组中有几个元素执行几次,每次执行浏览器会将遍历到的元素以实参的形式传递出来,我们可以定义形参来读取内容
    - 浏览器会传递三个参数:
       - 第一个参数:值
       - 第二个参数:元素索引
       - 第三个参数: 正在遍历的数据 
```
var arr = ["苹果","香蕉","栗子","荔枝","樱桃"];
arr.forEach(function(value,index,obj){
   console.log(value);
   console.log(index);
   console.log(obj);
       })
```
- 数组去重:
```
// 数组去重
var arr = [1,2,3,5,3,5,4,3,3,7];
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            arr.splice(j,1);
            // 如果arr存在两个连续的相等数字,在删除之后,后面的元素就会补上来,而索引值调下一位,漏掉与其相邻的元素,这里通过j--在执行一次删除位置的当前位置
            j--;
        }
    }
}
        console.log(arr);

```
-冒泡排序
```
/*
        相邻元素先进行比较,不满足条件交换位置,每次排序都选出里面最大的元素
        */
        var num = [3,2,8,9,4,3,6,7,2]
        for (i = num.length-1; i > 0;i--) {
            for (j = 0;j < i;j++) {
                if (num[j] > num[i]) {
                    var temp = num[i];
                    num[i] = num[j];
                    num[j] = temp;
                }
            }
        }
        console.log(num);
```
#### 函数
- 函数对象的方法
  - call()和apply()
    - 这两个都是函数对象的方法,需要通过函数对象来调用
    - 当函数调用call()和apply()都会调用函数执行
    - 在调用两个函数可以将一个对象指定为第一个参数,此时这个对象成为函数执行的this
  - call()可以将实参在对象之后依次传递
  - apply()需要将实参封装到一个数组中统一传递
```
fun();//this是window
fun.call(obj);//this是obj
fun.apply(obj);//this是obj

fun.call(obj,2,3);
fun.apply(obj,[2,3]);
```
- ==this情况==
  - 以函数情况调用时,h
  - 以方法的形式调用时,this是调用方法的对象
  - 以构造函数的形式调用时,this是新创建的那个对象
  - 使用call和apply调用时,this是指定的那个对象
  
- 在==调用函数时==,浏览器每次都会传递两个隐含的参数
  - ==this== 函数的上下文对象
  - 封装实参的对象==arguments==
    - ==arguments==是一个类数组对象,他可以通过索引来才做数据,也可以获取长度
    - 在调用函数时,所传递的实参都会在arguments中保存
    - 即使不定义实参也可以通过arguments来使用实参->arguments[0]
    - arguments中有一个属性叫==callee==,这个属性对应一个函数对象,就是当前正在执行的函数对象
```
function fun(){
   console.log(arguments instanceof Array);//false,可见不是数组
   console.log(Array.isArray(arguments));//false可见不是数组
}
function fun1(a,b){
   console.log(arguments.length);
   console.log(arguments[0]);
   console.log(arguments.callee);
   //表示当前正在执行的函数对象
   console.log(arguments.callee == fun1);//true
}
fun1("hello",true);
```
- 函数的定义和调用
  - 函数名的命名规则和前面变量名的命名规则是相同的
  - 函数定义完后里面的代码是不会执行的，函数必须调用才会执行
  - 调用函数通过函数名()
  - ==函数的调用是一个压栈的过程==
```
 function 函数名(){
    函数封装的代码
    ……
 }
```
- 函数表达式的写法有三种:
  - 函数声明:函数.name=函数名
  - 函数表达式
    - 匿名函数表达式:函数.name=表达式名
    - 命名函数表达式:函数.name=函数名
  - 函数的name属性：所有的函数都有一个name属性用于获取函数的名称
```
 var test = function bar(){
    函数封装的代码
    ……
 }
  var test = function(){
    函数封装的代码
    ……
 }
```
- 函数的作用，在开发程序时，使用函数可以提高编写的效率以及代码的 ==重用==
- ==函数的参数==
  - 把 具有独立功能的代码块 组织为一个小模块，在需要的时候 调用
  - 函数的参数，增加函数的 通用性，针对 相同的数据处理逻辑，能够 适应更多的数据
  - 参数传递数据:参数分类
    - 形参:定义 函数时，小括号中的参数，是用来接收参数用的，在函数内部 作为变量使用
    - 实参:调用 函数时，小括号中的参数，是用来把数据传递到 函数内部 用的
- 参数的值传递和引用传递
  - 值传递主要针对的的普通数据类型,传参的过程中传递的是值
  - 引用传递:主要针对的是引用数据类型,传参的过程中传递的是地址,修改也直接修改的是地址中的值,可以不用返回return引用数据类型,直接在函数外面调用

- ==函数返回值==
  - 使用return关键字返回值,当前函数就会结束
  - 如果函数中没有return.name函数有默认的返回值undefied
  - 如果函数使用 return语句，但是return后面没有任何值，那么函数的返回值也是：==undefined==
- ==递归函数==:
  - 函数自己调用自己
  - 在开发中尽量避免使用递归
    - 递归如果没有写好结束条件,意味着会无限执行下去
    - 递归调用非常占据内存空间(空间复杂度).效率比较低(时间复杂度)
- ==立即执行函数== (Immediately-Invoked Function Expression)(IIFE)立即调用函数==表达式==
  - 立即执行函数:只会执行一次
  - 没有参数的执行函数,注意需要加()才不会报错,若要立即执行只需要在最后加上()
  - 表达的含义是一个函数定义完后被立即执行
  - 先定义一个匿名函数,这个函数有自己独立的执行上下文,函数后面的()表示函数调用执行
  - 作用:会创建独立的执行上下文环境,可以避免外界访问或修改内部的变量,也避免了内部变量的秀秀
```
// 立即执行函数:只会执行一次
// 没有参数的执行函数,注意需要加()才不会报错,若要立即执行只需要在最后加上(),小括号解析当成表达式
(function(){
    console.log("我是立即执行函数");
})();
(function(){
    console.log("我是立即执行函数");
}());这种写法也是可以,()内部的东西是一个整体
// 有参数的立即执行函数
(function(a,b){
    console.log(a+b);
})(123,345);
var demo = function(){}();是一个表达式可以直接跟()调用
错误方式:
function(){
    console.log("我是立即执行函数");
}();相当于是两行代码,js不允许直接在一个函数后面()调用函数
```
- 函数相关练习 (斐波那契额数,选择排序,冒泡排序)
```
// 练习一：实现一个加法计算器
function sum() {
    var total = 0;
    //浏览器默认会传入参数对象,通过for循环获取返回值
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
//调用函数
console.log(sum(23, 45, 34, 2, 3, 5));
// 练习二：定义一个函数，传入宽高，计算矩形区域的面积
function rectangle(w, h) {
    return w * h;
}
console.log(rectangle(45, 34));
// 练习三：定义一个函数，传入半径，计算圆形的面积
function cyc(r) {
    return Math.PI * r * r;
}
console.log(cyc(5));
// 练习四：定义一个函数，传入n（n为正整数），计算1~n数字的和
function sumAll(n) {
    var total = 0;
    //浏览器默认会传入参数对象,通过for循环获取返回值
    for (var i = 1; i < n; i++) {
        total += i;
    }
    return total;
}
console.log(sumAll(100));
// 练习五：定义一个函数，传入一个数组，对数组进行翻转
function reverseArr(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
        // console.log(arr[i]);
        // console.log(arr[arr.length - 1 - i]);
    }
    return arr;
}
var arr = [1, 4, 5, 6, 3, 5, 4, 6, 3];
console.log(reverseArr(arr));
// 练习六：定义一个函数，传入一个数字数组，对数组中的数字进行排序
function arrSort(arr) {
    //通过冒泡排序进行
    for (i = arr.length - 1; i > 0; i--) {
        for (j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(arrSort(arr));
// 练习七：定义一个函数，传入一个数字，求对应的菲波那切数列,
//1,1,后面的数是前面两个数的和
function fib(n){
        if(n===0||n===1){
            return 1;
        }
        num1 = 1;
        num2 = 1;
        sum = 2;
        for(var i=2;i<n;i++){
            //相加数值的传递
            num1 = num2;
            num2 = sum;
            sum = num1 + num2;
            // console.log(sum);
        }
        return sum;
    }
    console.log(fib(10));
    //通过递归函数实现斐波那契数
    function fib2(n){
        if(n===0||n===1){
            return 1;
        }
        return fib2(n-1)+fib2(n-2);
    }
    console.log(fib2(10));
//选择排序,每一轮都将最小的元素的放在前面,一次类推
var arr = [4, 2, 3, 7, 5, 9, 20, 8];
function chooseSort(arr) {
    for (var j = 0; j < arr.length; j++) {
        for (var i = j + 1; i < arr.length; i++) {
            //i大的条件放在后面
            if (arr[i] < arr[j]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
                // i--;
            }
        }

    }
}
chooseSort(arr);
console.log(arr);
    
    
```



#### 内建对象
- Date对象
  - 当前时间戳:Date.now();
- Math和其他对象不同,他不是一个构造函数,他属于工具类不用创建对象,里面封装了数字相关的属性和方法
  - Math.PI
  - Math.ceil()
  - Math.floor()
  - Math.round()
  - Math.random()0-1之间的随机数
  - 生成一个0-x之间的随机数:Math.round(Math.random()*x)
  - 生成一个x-y之间的随机数:Math.round(Math.random()*(y-x)+x)
  - Math.max()
  - Math.min()
  - Math.pow(x,y)x的y次方
  - Math.squrt(x,y)开根号
#### 其他知识
- 包装类
  - 常用的数据类型:Boolean,String,Number,Null,Undefined
  - 引用数据类型:Object
  - 在JS中提供了三个包装类,通过这三个包装类可以将基本数据类型转换为引用数据类型
    - String()
     * Number()
     * Boolean()
  * 方法和属性不能添加给对象,不能添加给基本数据类型,当我们对一些基本数据类型调用方法和属性时,浏览器会临时使用包装类转换为对象,然后在调用想用的对象和方法,调用完成后在转为基本数据类型
- 字符串方法
  - 字符串在底层通过字符数组的方式保存
  - str.length
  - 获取指定位置的字符
    - charAt(num)获取指定位置的字符
    - charCodeAt()返回的是字符编码
    - fromCharCode()根据字符编码去获取字符,例如:String.fromCharCode(20013)通过构造函数调用
    - indexOf(待查内容,查找位置)返回第一次索引的位置,没有则显示-1
    - slice(start,end)截取指定位置字符串并返回截取的字符串,参数为负数,表示从后面开始计算
    - substring()和slice类似,会自动调整参数的位置,第二个小于第一个会自动交换位置,参数不能为负数
    - substr(str,个数):一般不用
  - split("符号"),通过参数符号拆分字符串为数组,传入的参数为空,则所有的字符串按照字母拆分
  - str.toUpperCase()转换为大写
  - str.toLowerCase()转化为小写
- ==正则表达式==
  - 创建
    - 通过构造函数:
      - var 变量 = new RegExp("正则表达式","匹配模式")
        - 匹配模式:g->全局匹配;i->忽略大小写;s->匹配任何字符包括终止符
      - 使用typeof检查正则对象,会返回object
    - 通过字面量
      - var 变量 = /正则表达式/匹配模式
  - 正则表达式的方法:test()
    - 使用这个方法可以用来检查字符串是否否和正则表达式,符合返回true,反之false
  - 正则表达式总结
    - /a|b|c/:检查一个字符串中有字母a或b或c
    - /[a-z]/i检查一个字符串中是否有字母
    - /a[bc]d/检查字符串中含有abc或acd,
    - /^ab/:除了ab以外的字符
    - /[0-9]/:含有数字0-9
  - ==字符串和正则表达式的方法:==
    - search(正则表达式)搜索字符串中是否含有指定内容,搜索到则返回第一个元素的位置,搜索不到则返回-1;只会返回一个值
    - match()可以将字符串中符合条件的内容提取出来,可以提取出所有的符合要求的内容,默认只会返回第一个,设置全局匹配模式,多个结果返回的是一个数组
    - replace("被替换","替换内容")可以将字符串中的内容替换为新的内容 默认只会替换以一个,设置全局替换模式
    - split("*")可以通过参数字符串拆分为字符数组,并返回所有的字符串数组;设置全局变量会返回所有值,设置替换内容为空,则会将所有的返回值都返回
  - 量词:
    - 通过量词设置内容出现的次数
    - 量词只对前面的内容起作用
    - {n}正好出现的次数n
    - {m,n}出现m-n次
    - {m,} m次以上
    - + 表示一次或者一次以上
    - * 0个或多个
    - ? 0个或一个
    - ^ 表示开头(ps:在[]里面的^表示除了在外面的表示开头)
    - $ 表示结尾
    - 手机号的正则表达式:/^1[3-9][0-9]{9}/
- ==转义字符==\ 
    - . 表示任意字符,如果检查有没有点通过转义字符\.
    - 注意使用构造函数时,由于它的参数是字符串,而\是字符串中的转义字符,如果要使用\则需要使用\\
```
// 字面量创建的正则表达式
reg = /\./
console.log(reg.test(str3));   
// 构造函数创建的正则表达式 
var reg1 = new RegExp("\\.");
console.log(reg1.test(str3));
```
- 其他正则表达式
  - \w 任意的字母数字_---[A-z0-9_]
  - \W 除了[^A-z0-9_]
  - \d 任意的数字 [0-9]
  - \D [^0-9]
  - \s 空格
  - \S 除了空格
  - \b 单词边界
  -  \B 除了边界
  -  去除输入字符串前后的空格->str.replace(/^\s*|\s*$/g,"")
  -  电子邮件表达式:/^\w{3,}(\.\w)*@[A-z0-9](\.[A-z0-9])+(\.[A-z]{2,5}){1,2}$/
```
var reg = /\w/
var reg = /\W/
var reg = /\d/
var reg = /\D/
var reg = /\s/
var reg = /\S/
var reg = /\bchild\b/  //只含有child
console.log(reg.test("er child ren"));
// 去除用户名前后的空格,将字符串前后的空格替换为空的字符串
reg = /^\s*|\s*$/g;
var str = "    sdsdfsd dfdsgs    ";
str = str.replace(/^\s*|\s*$/g,"")
console.log(str);
```
### 宿主对象DOM(文档对象模型,操作页面)
#### DOM操作HTML
- DOM:Document Object Model文档对象模型
  - 文档中通过dom来对HTML页面进行操作
  - 文档:表示整个HTML网页文档
  - 对象:将网页中每个部分转化为对象
  - 模型:表示了各个对象之间的关系,方便获取对象(模型图)
- 节点:构成网页的最基本的组成部分,网页中的每个部分都称为节点,
  - 划分:
      - 文档节点:整个HTML页面
        - document代表整个html页面,是window的属性,可以直接使用,通过该对象可以在整个文档中访问查找节点对象,并可以通过该对象创建节点
      - 元素节点:Html标签
        - 浏览器会将所有页面中的标签转化为元素节点,通过过document.getElementById()方法获取元素节点
      - 属性节点:元素的属性
        - 	属性节点表示的是标签中的一个一个的属性，这里要注意的==是属性节点并非是元素节点的子节点，而是元素节点的一部分==。
        - 	可以通过元素节点来获取指定的属性节点
        - 元素节点.getAttributeNode("属性名");
        - ==我们一般不使用属性节点==
      - 文本节点:HTML标签中的内容
        - ==文本节点一般是作为元素节点的子节点存在的==
        - 获取文本节点时，一般先要获取元素节点。在通过元素节点获取文本节点
        - 元素节点.firstChild获取元素节点的第一个子节点,一般为文本节点
  - 节点属性

| 名称     | nodeName  | nodeType | nodeValue |
|----------|-----------|----------|-----------|
| 文档节点 | #document | 9        | null      |
| 元素节点 | 标签名    | 1        | null      |
| 属性节点 | 属性名    | 2        | 属性值    |
| 文本节点 | #text     | 3        | 文本内容  |
- ==事件==
  - 事件:文档或浏览器窗口中发生的一些特定的交互瞬间
  - JavaScript与HTML之间的交互是通过时间实现的
  - 文档在加载页面时,<head>标签这部分<script>会在页面加载完成之前就加载,此时dom对象并未完全加载就会报错,解决方案
    - 在<head>下的<script>中添加为window绑定一个onload事件 ,该事件对应的相应函数会在页面加载完成之后响应,这样确保我们的代码执行时,所有的dom对象都加载完毕
    - 在body中最后添加script添加js代码,按照顺序执行
##### DOM查询
- DOM中的方法(通过document对象调用)
  - document.getElementById("btn1");获取指定id
  - document.getElementsByTagName("option");获取一组标签名
  - document.getElementsByName("hobby");根据name获取一组数据
  - 查看获取元素的内容的方式:
    - 双标签内容:innerHTM属性
    - 单标签:对象.value/name/type等
    - 查看class属性时采用:对象.className
-  
```
btn1.onclick = function () {
    var pass = document.getElementById("password");
    //    innerHTM获取双标签中的内容,单标签中的内容通过.value.type等获取
    alert(pass.value);
    alert(pass.name);
    alert(pass.type);
}
var btn2 = document.getElementById("btn2");
btn2.onclick = function () {
    //    通过标签名获取一组
    var options = document.getElementsByTagName("option");
    alert(options.length);
    for (var i in options){
        alert(options[i].value);
    }
    // for (var i=0;i<options.length;i++){
    //     alert(options[i].value);
    // }


}
var btn3 = document.getElementById("btn3");
btn3.onclick = function(){
   //通过name获取一组
   var hobby = document.getElementsByName("hobby");
   alert(hobby.length);
   for(var i=0;i<hobby.length;i++){
    //    alert(hobby[i].value);   
    //    获取class类名通过.className
        alert(hobby[i].className);
   }
```
- 获取元素节点的子节点(通过具体的元素调用)ps:节点都是包含空白文档的
  - 方法:元素对象.getElementsByTagName()->返回当前节点的指定标签后代节点(包括空白文本)
  - 属性:childNodes:表示当前节点的所有==子节点(包括空白文本)==
  -  children属性可以获取当前元素的所有==子元素==
  - 属性:firstChild:表示当前节点的第一个子节点
  - firstElementChild获取当前元素的第一个子元素,不支持IE8及以下的浏览器，
  - 属性lastChild:表示当前节点的最后一个子节点
- 获取父节点和兄弟节点(通过具体的节点调用)
  - parentNode:表示当前节点的父节点
  - PreviousSibling:表示当前节点的前一个兄弟节点
  - PreviousElementSibling:表示当前节点的前一个兄弟元素,IE8一下浏览器不支持
  - nextSibling表示当前节点的后一个兄弟节点
- 元素节点的属性
  - element.value,ps:文本的value值是文本中的内容
  - element.id
  - element.className
  - nodeValue:文本节点通过nodeValue获取和设置文本节点的内容
  - innerHTML元素节点通过该属性获取和设置标签内部的html代码
  - innerText:和innerHTML类似,但是只返回文本
- 通过CSS选择器进行查询
  - querySelector()
  - querySelectorAll()
  - 这两个方法都是通过document来调用的,使用相同,都是传递一个选择器字符串作为参数,方法会自动根据选择器字符串去网页中查找元素
  - 不同:querySelector()只会返回找到的第一个元素,querySelectorAll()会返回所有符合条件的元素
- 元素节点的修改操作
  - 创建节点:document.createElement(标签名)
  - 删除节点:父节点.removeChild(子节点)
  - 替换节点:父节点,replaceChild(新节点,旧节点)
  - 插入节点:
    - 父节点.appendChild(子节点);
    - 父节点.insertBefore(新节点,旧节点)
```
//按钮单击事件函数
        function MyOnclick(idstr, fun) {
            var btn = document.getElementById(idstr);
            btn.onclick = fun;
        };
        /*
        创建节点:
        document.createElement()
        - 用于创建一个元素节点对象
        - 需要标签名作为参数,会根据该标签名创建对应的元素节点对象
        - 并将创建好的对象作为返回值返回
        */
        MyOnclick("btn01", function () {
            var li = document.createElement("li");
            //创建广州文本节点
            /*
             * document.createTextNode()
             * 	可以用来创建一个文本节点对象
             *  需要一个文本内容作为参数，将会根据该内容创建文本节点，并将新的节点返回
             */
            var gzText = document.createTextNode("广州");
            li.appendChild(gzText);
            /*
            * appendChild()
            * 	 - 向一个父节点中添加一个新的子节点
            * 	 - 用法：父节点.appendChild(子节点);
            */
            // 获取id为city的节点
            var city = document.getElementById("city");
            // 将广州添加到city下面
            city.appendChild(li);
        })
        // 将"广州"节点插入到#bj前面
        /*
        * insertBefore()
        * 	- 可以在指定的子节点前插入新的子节点
        *  - 语法：
        * 		父节点.insertBefore(新节点,旧节点);
        */
        MyOnclick("btn02",function(){
            var li = document.createElement("li");
            var gzText = document.createTextNode("广州");
            li.appendChild(gzText);
            var bj = document.getElementById("bj");
            //获取city
			var city = document.getElementById("city");
            city.insertBefore(li , bj);
        });
        // 使用"广州"节点替换#bj节点
        /*
        * replaceChild()
        * 	- 可以使用指定的子节点替换已有的子节点
        * 	- 语法：父节点.replaceChild(新节点,旧节点);
        */
        MyOnclick("btn03",function(){
             //创建一个广州
            var li = document.createElement("li");
            var gzText = document.createTextNode("广州");
            li.appendChild(gzText);
            
            //获取id为bj的节点
            var bj = document.getElementById("bj");
            
            //获取city
            var city = document.getElementById("city");
            city.replaceChild(li,bj);
            
        });
        //删除#bj节点
        /*
        * removeChild()
        * 	- 可以删除一个子节点
        * 	- 语法：父节点.removeChild(子节点);
        * 		
        * 		子节点.parentNode.removeChild(子节点);
        */
        MyOnclick("btn04",function(){
            var bj = document.getElementById("bj");
            var city = document.getElementById("city");
            // city.removeChild(bj);
            bj.parentNode.removeChild(bj);
            

        });
```
- dom的其他方法
  - document.body
  - document.documentElement;
  - document.all;
  - document.getElementsByClassName("box1")
  - document.querySelector()
  - document.querySelectorAll()
```
// 获取body标签,document中有属性body的引用可以直接使用,返回的是一个数组,取元素需要在数组中提取第一个元素
var  body = document.body;
//html标签元素获取document.documentElement属性
var html = document.documentElement;
//document.all获取页面中的所有元素
var all = document.all;
console.log(all.length);
//根据元素的class属性值查询一组元素节点对象该方法不支持IE8浏览器,可以通过css选择器其获取class的属性值
var className= document.getElementsByClassName("box1");
console.log(className.length);
/*
document.querySelector()
- 需要一个选择器的字符串作为参数，可以根据一个CSS选择器来查询一个元素节点对象
- 虽然IE8中没有getElementsByClassName()但是可以使用querySelector()代替
- 使用该方法总会返回唯一的一个元素，如果满足条件的元素有多个，那么它只会返回第一个
*/
var box1 = document.querySelector(".box1");
console.log(box1.innerHTML);
/*
document.querySelectorAll()
    - 该方法和querySelector()用法类似，不同的是它会将符合条件的元素封装到一个数组中返回
    - 即使符合条件的元素只有一个，它也会返回数组
*/
var box1s = document.querySelectorAll(".box1");
console.log(box1s);
```
#### DOM操作CSS(内联样式)
- 通过js修改内联表中的样式
  - 语法:元素.style.样式名称 = 样式值
  - ps:如果css的样式名中含有-,需要将这种样式名修改为驼峰命名法,去掉-,然后将-后面的字母大写我们通过style属性设置的样式都是内联样式，
  - 而内联样式有较高的优先级，所以通过JS修改的样式往往会立即显示
  - 但是如果在样式中写了!important，则此时样式会有最高的优先级，即使通过JS也不能覆盖该样式，此时将会导致JS修改样式失效,所以尽量不要为样式添加!important
  - 读取样式:语法：元素.style.样式名
  - ==通过style属性设置和读取的都是内联样式,无法读取样式表中的样式==
```
btn1.onclick = function(){
           box.style.width = "200px";//字符串的形式带单位
           box.style.height = "200px";
           box.backgroundColor = "#ff0";
       }
```
- 通过==js修改元素样式==(文档样式)
  - 只支持IE8浏览器 
    - 获取元素当前显示的样式语法:==元素.currentStyle.样式名==
    - 它可以用来读取元素正在显示的样式
    - 如果当前的样式没有设置该样式,则获取它的默认值
  - 其他浏览器
    - ==getComputedStyle==()这个方法来获取元素当前的样式,这个方法是window的方法，可以直接使用,需要两个参数,
      - 第一个：要获取样式的元素
      - 第二个：可以传递一个伪元素，一般都传null
      - 该方法会返回一个==对象==，对象中封装了当前元素对应的样式;可以通过对象.样式名来读取样式;如果获取的样式没有设置，则会获取到真实的值，而不是默认值;但是该方法==不支持IE8及以下的浏览器==
  - ==重写写函数兼容IE8浏览器和其他浏览器==
```
/*
定义一个函数，用来获取指定元素的当前的样式
	 * 参数：
	 * 		obj 要获取样式的元素
	 * 		name 要获取的样式名
*/
// 获取属性有两种方式,点或者[]
function getStyle(obj, name) {
    if (window.getComputedStyle) {
    //window.getComputedStyle对象在booleean中返回true
        return getComputedStyle(obj, null)[name];
    } else {
        return obj.currentStyle[name]
    }
}
//调用
var w = getStyle(box, "width");
```
- 其他样式操作的属性
  - clientWidth
  - clientHeight
  - offsetWidth
  - offsetHeight
  - offsetParent
  - offsetLeft
  - offsetTop
  - scrollWidth
  - scrollHeight
  - scrollLeft
  - scrollTop
  - 判断滚动到底部
    - 水平滚动到底部:scrollWidth-scrollLeft==clientWidht
    - 垂直到底:scrollHeight-scrollTop==clientHeight
```
/*
clientWidth
clientHeight
* 	- 这两个属性可以获取元素的可见宽度和高度
        * 	- 这些属性都是不带px的，返回都是一个数字，可以直接进行计算
        * 	- 会获取元素宽度和高度，包括内容区和内边距
        *  - 这些属性都是只读的，不能修改
*/
alert(box1.clientHeight);
alert(box1.clientWidth);
/*
offsetWidth
offsetHeight
获取元素的整个的宽度和高度，包括内容区、内边距和边框
*/
alert(box1.offsetWidth);
alert(box1.offsetHeight);

/*
offsetParent
- 可以用来获取当前元素的定位父元素
*  - 会获取到离当前元素最近的开启了定位的祖先元素
* 		如果所有的祖先元素都没有开启定位，则返回body
*/
var op = box1.offsetParent;
alert(op.id);

/*
offsetLeft:当前元素相对于其定位父元素的水平偏移量
offsetTop:当前元素相对于其定位父元素的垂直偏移量
*/
alert(box1.offsetLeft);
alert(box1.offsetTop);

/*
scrollWidth
scrollHeight
可以获取元素整个滚动区域的宽度和高度
*/
alert(box4.scrollWidth);
alert(box4.scrollHeight);

/*
scrollLeft可以获取水平滚动条滚动的距离
scrollTop可以获取垂直滚动条滚动的距离
*/
alert(box4.scrollLeft);
alert(box4.scrollTop);
//当满足scrollHeight - scrollTop == clientHeight
//说明垂直滚动条滚动到底了

//当满足scrollWidth - scrollLeft == clientWidth
//说明水平滚动条滚动到底
//alert(box4.scrollHeight - box4.scrollTop); 
```
- * clientX和clientY
    * 	用于获取鼠标在当前的可见窗口的坐标
    * div的偏移量，是相对于整个页面的
    * 
  - pageX和pageY可以获取鼠标相对于当前页面的坐标
    * 	但是这个两个属性在IE8中不支持，所以如果需要兼容IE8，则不要使用
- ==获取滚动条滚动的距离==
  - chrome认为浏览器的滚动条是body的，可以通过body.scrollTop来获取
  - 火狐等浏览器认为浏览器的滚动条是html的，
```
var st = document.body.scrollTop || document.documentElement.scrollTop;
var sl = document.body.scrollLeft || document.documentElement.scrollLeft;
```
#### 事件
- ==事件对象event==:
  - 当事件的响应函数被触发时，浏览器每次都会将一个事件对象作为实参传递进响应函数,
  - 在事件对象中封装了当前事件相关的一切信息，比如：鼠标的坐标  键盘哪个按键被按下  鼠标滚轮滚动的方向。。
  - 在IE8中，响应函数被触发时，浏览器不会传递事件对象，
  - 在IE8及以下的浏览器中，是将事件对象作为window对象的属性保存的
  - 解决事件对象的兼容性:
    - event = event||window.event;//二者选其一
```
// 解决事件对象的兼容性
event = event||window.event;//二者选其一
outer.onmouseover = function (event) {
    var x = event.clientX;//clientX是事件对象的属性横坐标
    var y = event.clientY;//
    show.innerHTML = "x=" + x + " " + "y=" + y;
}
PS:这里的event就是事件对象(浏览器作为实参传入的)
```
- ==事件冒泡==
  - 事件的冒泡指的就是事件的向上传导,当后代元素上的事件被触发时,其祖先元素的==相同事件==也会被触发
  - 在开发中大部分冒泡是有益的,不希望冒泡发生可以通过事件对象取消冒泡
  - 事件对象的添加即在触发事件的参数中添加形参event即可,调用event即调用了事件对象
  - 取消冒泡:可以将事件对象的cancelBubble设置为true->event.cancelBubble = true;
  - 拖动需要开启定位,负责不会执行
```
box2.onclick = function(){
event = event||window.event
alert("我是3div");
event.cancelBubble = true;
};
```
- 事件委派
  - 指将事件统一绑定给元素的共同的祖先元素，这样当后代元素上的事件触发时，会一直冒泡到祖先元素
  - 从而通过祖先元素的响应函数来处理事件
  - 事件委派是利用了冒泡，通过委派可以减少事件绑定的次数，提高程序的性能
  - 我们希望，只绑定一次事件，即可应用到多个的元素上，即使元素是后添加的,我们可以尝试将其绑定给元素的==共同的祖先元素==
  - 事件对象event中的target表示的触发事件的对象
```
ul.onclick = function(event){
// 兼容
event = event||window.event;
//target属性:返回触发此事件的元素（事件的目标节点）。
// alert(event.target);返回的是事件的元素对象
if(event.target.className=="link"){//返回ul中指定元素触发ul事件
    alert("我是ul的点击函数")
}
}
```
- 事件绑定(两种方式)
  - ==事件绑定的两种方式:==
    - ==对象.事件 = 函数绑定  ->单个事件(取消默认行为:return false)==
    - ==addEventListener/attachEvent绑定   ->多个事件 (取消默认行为不支持return false,通过event.preventDefault||event.preventDefault()兼容IE8)==
  -  ==对象.事件 = 函数== 的形式绑定响应函数，它只能同时为一个元素的一个事件绑定一个响应函数，不能绑定多个，如果绑定了多个，则后边会覆盖掉前边的
  -  为元素绑定多个响响应事件方法
    - ==addEventListener()==  
      - 通过这个方法可以为元素绑定多个响应函数
        - 参数:
          - 1.事件的字符串,不要on
          - 2.回调函数,当事件触发时函数会被调用
          - 3.是否在捕获阶段触发事件，需要一个布尔值，一般都传false
        - 使用addEventListener()可以同时为一个元素的相同事件同时绑定多个响应函数，这样当事件被触发时，响应函数将会按照函数的绑定顺序执行
        - 这个方法不支持IE8及以下的浏览器
    - ==attachEvent()IE8一下浏览器==
      - 参数:
          - 1.事件的字符串,要on
          - 2.回调函数
        - 这个方法也可以同时为一个事件绑定多个处理函数，
        - 不同的是它是后绑定先执行，执行顺序和addEventListener()相反
  - ==解决绑定事件的兼容性问题==
    - addEventListener()中的this，是绑定事件的对象 
    - attachEvent()中的this，是window
    - ==需要统一两个方法this==
      - 这里采用匿名函数调用回调函数方法解决:==callback.call(obj)==
    - 重新定义两个方法的绑定事件的函数
```
参数:obj:要绑定事件的对象
eventstr:事件的字符串
callback 回调函数
flag 是否在捕获阶段触发
function bind(obj, eventstr, callback,flag=false) {
if (obj, addEventListener) {
    obj.addEventListener(obj, callback, eventstr,flag);
} else {
    //IE8及以下
    // this是谁由调用方式决定,callback.call(obj)采用回调函数将this指针指向自身
    obj.attachEvent("on"+eventstr,function(){
callback.call(obj);
    })

}
}
```
- ==事件传播==:
  - 关于事件的传播网景公司和微软公司有不同的理解
    - 微软公司认为事件应该是由内向外传播，也就是当事件触发时，应该先触发当前元素上的事件，然后再向当前元素的祖先元素上传播，也就说事件应该在冒泡阶段执行。
    - 网景公司认为事件应该是由外向内传播的，也就是当前事件触发时，应该先触发当前元素的最外层的祖先元素的事件，然后在向内传播给后代元素
    - W3C综合了两个公司的方案，将==事件传播分成了三个阶段==
      - 捕获阶段:在捕获阶段时从最外层的祖先元素，向目标元素进行事件的捕获，但是默认此时不会触发事件
      - 目标阶段:事件捕获到目标元素，捕获结束开始在目标元素上触发事件
      - 冒泡阶段:事件从目标元素向他的祖先元素传递，依次触发祖先元素上的事件
    - 如果希望在捕获阶段就触发事件，可以将addEventListener()的第三个参数设置为true;一般情况下我们不会希望在捕获阶段触发事件，所以这个参数一般都是false  
    - IE8及以下的浏览器中没有捕获阶段

- ==拖拽引起的问题==
  - 当我们拖拽一个网页中的内容时，浏览器会默认去搜索引擎中搜索内容,此时会导致拖拽功能的异常，这个是浏览器提供的默认行为,解决方案:
    - 如果不希望发生这个行为，则可以通过return false来取消事件的默认行为(在事件函数最后return false)
    - IE8不起作用:解决方案
      - 为元素设置setCapture(),releaseCapture()
      - ==setCapture()==1 
        - 当调用一个元素的setCapture()方法以后，这个元素将会把下一次所有的鼠标按下相关的事件捕获到自身上==,在IE8中按钮点击事件会全部捕获在设置了setCapture()对象的内容==
        - 只有IE支持，但是在火狐中调用时不会报错，而如果使用chrome调用，会报错,配置兼容性
          - obj.setCapture && obj.setCapture();//二者同时满足才会执行,第一个boolean满足,才会执行第二个代码,obj.setCapture判断,obj.setCapture()方法调用执行
      - ==releaseCapture()==
          - obj.releaseCapture && obj.releaseCapture();//取消元素对象捕获
```
function draft(obj) {
    //鼠标按下
    obj.onmousedown = function (event) {
        //设置box1捕获所有鼠标按下的事件
        /*
            * setCapture()
            * 	- 只有IE支持，但是在火狐中调用时不会报错，
            * 		而如果使用chrome调用，会报错
            */
        /*if(box1.setCapture){
            box1.setCapture();
        }*/
        obj.setCapture && obj.setCapture();//二者同时满足才会执行,第一个boolean满足,才会执行第二个代码,box1.setCapture判断,box1.setCapture()方法调用执行

        // 设置兼容
        event = event || window.event;

        // 获取div的偏移量
        //div的偏移量 鼠标.clentX - 元素.offsetLeft
        //div的偏移量 鼠标.clentY - 元素.offsetTop
        var ol = event.clientX - obj.offsetLeft;
        var ot = event.clientY - obj.offsetTop;

        //鼠标移动,绑定对象为document
        document.onmousemove = function (event) {
            //兼容
            event = event || window.event;
            //获取鼠标的坐标,放到box指定位置
            var left = event.clientX - ol;
            var top = event.clientY - ot;
            //设置box元素坐标
            obj.style.left = left + "px";
            obj.style.top = top + "px";

        };
        //为document鼠标松开事件,必须放在box的鼠标按下事件中,放在document中,鼠标松开依然可以移动(前提是鼠标按下)
        document.onmouseup = function (event) {
            event = event || window.event;
            //当鼠标松开时，被拖拽元素固定在当前位置	onmouseup
            //取消document的onmousemove事件
            document.onmousemove = null;
            //取消document的onmouseup事件
            document.onmouseup = null;
            //取消事件捕获
            obj.releaseCapture && obj.releaseCapture();
        };
    return false;//解决拖拽异常
    }
```
- ==滚轮事件==(兼容性)
  - onmousewheel鼠标滚轮滚动的事件，会在滚轮滚动时触发，但是火狐不支持该属性
    - event.wheelDelta 可以获取鼠标滚轮滚动的方向,wheelDelta这个值我们不看大小，只看正负,向上滚 120   向下滚 -120
    - wheelDelta这个属性火狐中不支持,event.detail来获取滚动的方向,向上滚 -3  向下滚 3
    - 这里通过判断语句进行上下滚动
  - 在火狐中需要使用 ==DOMMouseScroll来绑定滚动事件,注意该事件需要通过addEventListener()函数来绑定==
    - 解决方案:这里分别为两种绑定滚轮事件(火狐:bind(box,"DOMMouseScroll",box.onmousewheel);)
  - 当滚轮滚动时，如果浏览器有滚动条，滚动条会随之滚动，这是浏览器的默认行为,如果取消使用return false,
    - addEventListener()方法绑定响应函数，取消默认行为时不能使用return false
    - 火狐需要使用event来取消默认行为event.preventDefault();
    - 但是IE8不支持event.preventDefault();这个玩意，如果直接调用会报错,
      - ==解决方案==:event.preventDefault||event.preventDefault(); 
```
/*
* onmousewheel鼠标滚轮滚动的事件，会在滚轮滚动时触发，
* 	但是火狐不支持该属性
* 
* 在火狐中需要使用 DOMMouseScroll 来绑定滚动事件
* 	注意该事件需要通过addEventListener()函数来绑定
解决方案:这里通过绑定函数分别为两种绑定滚轮事件
*/
function bind(obj, eventstr, callback) {
if (obj, addEventListener) {
    obj.addEventListener(eventstr, callback, obj, false);
} else {
    //IE8及以下
    // this是谁由调用方式决定,callback.call(obj)采用回调函数将this指针指向自身
    obj.attachEvent("on" + eventstr, function () {

        callback.call(obj);
    })

}
}
box.onmousewheel = function (event) {
    event = event||window.event;
    
    //event.wheelDelta 可以获取鼠标滚轮滚动的方向
    //向上滚 120   向下滚 -120
    //wheelDelta这个值我们不看大小，只看正负
    // alert(event.wheelDelta);
    
    //wheelDelta这个属性火狐中不支持
    //在火狐中使用event.detail来获取滚动的方向
    //向上滚 -3  向下滚 3
    // alert(event.detail);
    
    /*
    * 当鼠标滚轮向下滚动时，box1变长
    * 	当滚轮向上滚动时，box1变短
    通过判断来指定滚动方向不同的选项
    */
    if(event.wheelDelta>0||event.detail<0){
        //向上变短
        box.style.height = box.style.height-10+"px";
    }else{
        //向下边长
        box.style.height = box.style.height+10+"px";
    }
/*
    使用addEventListener()方法绑定响应函数，取消默认行为时不能使用return false
    * 需要使用event来取消默认行为event.preventDefault();
    * 但是IE8不支持event.preventDefault();这个玩意，如果直接调用会报错
    */
    event.preventDefault||event.preventDefault();//火狐
    /*
    * 当滚轮滚动时，如果浏览器有滚动条，滚动条会随之滚动，
    * 这是浏览器的默认行为，如果不希望发生，则可以取消默认行为
    */
    return false;//其他浏览器
}
//为火狐浏览器单独设置绑定事件
bind(box,"DOMMouseScroll",box.onmousewheel);
```
- ==键盘事件==:键盘被按下时响应的事件
  - onkeydown
    - 按键被按下
    - 对于onkeydown来说如果一直按着某个按键不松手，则事件会一直触发
    - 当onkeydown连续触发时，第一次和第二次之间会间隔稍微长一点，其他的会非常的快,这种设计是为了防止误操作的发生。
  - onkeyup
    - 按键被松开
  - ==键盘事件一般都会绑定给一些可以获取到焦点的对象或者是document==
  - 可以通过==keyCode==来获取按键的编码,通过它可以判断哪个按键被按下,事件对象中还提供了几个属性
    - altKey
    - ctrlKey
    - shiftKey
    - 这个三个用来判断alt ctrl 和 shift是否被按下如果按下则返回true，否则返回false
    - 判断多个键是否被同时按下,不可同时采用event.keyCode判断,理应在加以上三个属性
  - ==input设置键盘事件默认显示所有输入内容,如果取消采用return false,则所有内容均不会显示==
```
//判断d和ctrl是否被同时按下
if (event.keyCode === 89 && event.ctrlKey) {
    alert("同时按下d和ctrl");
}
//input绑定事件
input.onkeydown = function (event) {
    //兼容
    event = event || window.event;
    //input设置键盘事件默认显示所有输入内容,如果取消采用return false,则所有内容均不会显示
    //使文本框不能驶入数字48-57
    if (event.keyCode < 57 && event.keyCode > 48) {
        return false;//数字则不会显示
    }
```
### BOM(浏览器对象模型,操作浏览器)
- BOM(Brower Object Model )浏览器对象模型
    - BOM可以使我们通过js来操作浏览器
    - 在BOM中为我们提供了一组对象,用来完成对浏览器的操作
- BOM对象
  - ==Window== 代表的是整个浏览器窗口,同时window也是网页中的全局对象
  - ==Navigator== 代表的是当前浏览器的信息,通过该对象可以用来识别不同的浏览器
  - ==Location== 代表当前浏览器的地址栏信息,通过Location可以获取地址栏信息,或者操作浏览器跳转页面
  - ==History== 代表浏览器的历史记录,可以通过该对象来操作浏览器的历史记录,由于隐私原因,该对象不能获取到具体的历史记录,只能操作浏览器向前或向后翻页,==而且该操作只能对当次的访问有效==
  - ==Screen== 代表用户的屏幕信息,通过该对象可以获取写到用户的显示器的相关信息
  - ==这些BOM对象在浏览器中都是作为window对象的属性保存的,可以通过window对象来使用(避免程序报错,不存在会返回undefined),也可以直接使用==
- Navigator
  - 由于历史原因,Navigator对象中的大部分属性都不能帮助我们识别浏览器,一般我们使用userAgent来判断浏览器信息
  - userAgent是一个字符串，这个字符串中包含有用来描述浏览器信息的内容，不同的浏览器会有不同的userAgent
  - 如果通过UserAgent不能判断，还可以通过一些浏览器中特有的对象，来判断浏览器的信息比如：ActiveXObject,使用:("ActiveXObject" in window)返回boolean值
```
var ua = navigator.userAgent;
if(/firefox/i.test(ua)){
		alert("你是火狐！！！");
	}else if(/chrome/i.test(ua)){
		alert("你是Chrome");
	}else if(/msie/i.test(ua)){
		alert("你是IE浏览器~~~");
	}else if("ActiveXObject" in window){
		alert("你是IE11，枪毙了你~~~");
	}

/* 火狐的userAgent
* 	Mozilla/5.0 (Windows NT 6.1; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0
* 
* Chrome的userAgent
*  Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.82 Safari/537.36
* 
* IE8
* 	Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)
* 
* IE9
* 	Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)
* 
* IE10
* 	Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)
* 
* IE11
* 	Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko
* 	- 在IE11中已经将微软和IE相关的标识都已经去除了，所以我们基本已经不能通过UserAgent来识别一个浏览器是否是IE了
*/
```
- History
  - length:属性，可以获取到当成访问的链接数量
  - back():可以用来回退到上一个页面，作用和浏览器的回退按钮一样
  - forward():可以跳转下一个页面，作用和浏览器的前进按钮一样
  - go():可以用来跳转到指定的页面,它需要一个整数作为参数
  - 1:表示向前跳转一个页面 相当于forward()
  - 2:表示向前跳转两个页面
  - -1:表示向后跳转一个页面
  - -2:表示向后跳转两个页面
```
alert(history.length);
history.back();
history.forward();
history.go(-2);
```
- Location
  - 如果直接打印location，则可以获取到地址栏的信息（当前页面的完整路径）
  - 如果直接将location属性修改为一个完整的路径，或相对路径,则我们页面会自动跳转到该路径，并且==会生成相应的历史记录=='location = "http://www.baidu.com";'
  - assign():用来跳转到其他的页面，作用和直接修改location一样
  - reload():用于重新加载当前页面，作用和刷新按钮一样;==如果在方法中传递一个true，作为参数，则会强制清空缓存刷新页面==
  - replace():可以使用一个新的页面替换当前页面，调用完毕也会跳转页面,==不会生成历史记录，不能使用回退按钮回退==
```
location.assign("http://www.baidu.com");
location.reload(true);
location.replace("01.BOM.html");
```
- Window(方法)
  - 定时调用
    - setInterval():window的定时器方法,可以将一个函数，每隔一段时间执行一次,参数
      - 1.回调函数,该函数会每隔一段时间执行一次
      - 每次调用的时间间隔,单位是毫秒
    - clearInterval()可以用来关闭一个定时器,方法中需要一个定时器的标识作为参数，这样将关闭标识对应的定时器,clearInterval(timer);如果参数是一个有效的定时器的标识，则停止对应的定时器;如果参数不是一个有效的标识，则什么也不做
  - 延时调用:只会执行一次
    - setTimeOut():开启延时调用,参数和定时调用一样
    - clearTtimeOut"():关闭延时调用,和定时调用一样
  - 延时调用和定时调用可以互相转换,一般常用定时调用;延时调用和定时调用的区别，定时调用会执行多次，而延时调用只会执行一次 
  - ==开启定时器时先关闭定时器避免在定时器执行时开启多个定时器==

- 类的操作:
  - 通过style属性来修改元素的样式，每修改一个样式，浏览器就需要重新渲染一次页面;这样的执行的性能是比较差的，而且这种形式当我们要修改多个样式时，也不太方便
  - 解决方案:我们可以通过修改元素的class属性来间接的修改样式;
  - 优点:
    - 这样一来，我们只需要修改一次，即可同时修改多个样式
    - 浏览器只需要重新渲染页面一次，性能比较好
    - 并且这种方式，可以使表现和行为进一步的分离
```
//定义一个函数，用来向一个元素中添加指定的class属性值
/*
* 参数:
* 	obj 要添加class属性的元素
*  cn 要添加的class值,传入的是字符串
* 	
*/
function addClass(obj, cn) {
//    检查obj中是否含有cn
if (!hasClass(obj, cn)) {
    obj.className += " " + cn;//注意这里留空格;

}

}
// 检查类属性中是否含有某个元素,通过正则表达式
function hasClass(obj, cn) {
// \b表示边界线
// var reg = /\b1cn\b/;两个反斜杠中的第一个表示转移字符
var reg = new RegExp("\\b" + cn + "\\b");
return reg.test(obj.className);
}
//删除一个类
function removeClass(obj, cn) {
if (hasClass(obj, cn)) {
    obj.className = obj.className.replace(cn, "");//用空格代替cn
}
}
/*
* toggleClass可以用来切换一个类
* 	如果元素中具有该类，则删除
* 	如果元素中没有该类，则添加
*/
function toggleClass(obj, cn) {
if (hasClass(obj, cn)) {
    removeClass(obj, cn);
} else {
    addClass(obj, cn);
}
}
```
- 二级菜单js效果展示
```
//为二级菜单设置切换并设置切换的动画效果
//获取class属性的使用css选择器
var span = document.querySelectorAll(".menuSpan");
//定义一个变量来保存当前打开的menu
var openMenu = span[0].parentNode;
for(var i=0;i<span.length;i++){ 
    //为每一个span元素设置单击响应
    span[i].onclick = function(){
        //获取父元素
        var parentDIV = this.parentNode;
        //切换菜单按钮动画效果
        // toggleClass(parentDIV,"collapsed");
        toggleMenu(parentDIV);

        //打开菜单以后，应该关闭之前打开的菜单
        if(openMenu !== parentDIV && !hasClass(openMenu,"collapsed")){
            //为了可以统一处理动画过渡效果，我们希望在这将addClass改为toggleClass
            //addClass(openDiv , "collapsed");
            //此处toggleClass()不需要有移除的功能
            // toggleClass(openMenu , "collapsed");
            //切换菜单的显示状态
            toggleMenu(openMenu);
        }
        //确保openMenu始终是当前打开的menu
        openMenu = parentDIV;

    }
} 
//用来切换菜单折叠和显示状态
function toggleMenu(obj){
    ///在切换类之前，获取元素的高度
    var start = obj.offsetHeight;
    ///切换parentDiv的显示
    toggleClass(obj,"collapsed");
    //在切换类之后获取一个高度
    var end = obj.offsetHeight;
    //动画效果就是将高度从start向end过渡
    //将元素的高度重置为start	
    obj.style.height = start+"px";
    //动画效果的展示
    move(obj,"height",end,10,function(){
        //动画执行完,关闭设置的内联样式,否则下次点不开在样式表中设置的样式,内联样式的优先级高于文档样式
        obj.style.height = "";
    })

}
```
### JSON
- JSON:JavaScript对象表示法(JavaScript Object Notation),是存储和交换文本信息的语法,类似xml,比xml更小更轻便
- 与xml类似
    - JSON 是纯文本
    - JSON 具有“自我描述性”（人类可读）
    - JSON 具有层级结构（值中存在值）
    - JSON 可通过 JavaScript 进行解析
    - JSON 数据可使用 AJAX 进行传输
- 与xml的不同
  - 没有结束标签
  - 更短
  - 读写的速度更快
  - ==能够使用内建的 JavaScript eval() 方法进行解析==
  - 使用数组
  - 不使用保留字
- JS对象只有js认识,其他语言不认识,JSON是一种特殊格式的字符串,可以被任意语言识别,并且可以转化为任意语言,==JSON在开发中主要用来进行数据交互==
- 书写格式:
  - JSON和JS对象格式相同,==JS字符串中的属性名必须要用双引号==,其他和js相同
- JSON分类
  - 对象{}
  - 数组[]
- JSON允许的值
  - 字符串
  - 数字
  - boolean
  - null
  - 对象
  - 数组
- ==JSON的解析器有两种==
  - ==javascript内置的解析器==:通过eval()函数调用,这里需要在json字符串外边界加入'()
  - JSON解析器,主要有两种方式进行解析
    - JSON:这个对象可以将一个JSON转化为JS对象,也可以将一个js对象转化为JSON
    - JSON.parse():json->js需要一个json字符串作为参数,会将该字符串转换为JS对象并返回
    - JSON.stringify():js->json
      - 可以将一个JS对象转换为JSON字符串
      - 需要一个js对象作为参数，会返回一个JSON字符串
- 如果需要兼容IE7及以下的JSON操作，
  - 则可以通过引入一个外部的js文件来处理
  - ==eval()==:这个函数可以用来执行一段字符串形式的JS代码，并将执行结果返回;如果使
    - 用eval()执行的字符串中含有{},它会将{}当成是代码块;如果不希望将其当成代码块解析，则需要在字符串前后各加一个==()==
    - eval()这个函数的功能很强大，可以直接执行一个字符串中的js代码，
    - 但是在开发中尽量不要使用，首先它的执行性能比较差，然后它还具有安全隐患

### 实践知识点总结
- ==获取元素属性值或者元素移动时都需要开启定位属性,一般开启绝对定位== position:absolute,否则元素重新在js中设置属性不执行
- 设置定位以后,left,top,right,bottom属性才能调用
- parseInt()可以获取字符串中的有效数字,可解析一个字符串，并返回一个整数。
- 判断数组越界取余的方式index %= imgArr.length;
- 取消超链接或者form提交表单的两种方式:
- 点击超链接以后，超链接会跳转页面，这个是超链接的默认行为，但是此时我们不希望出现默认行为，可以通过在响应函数的最后return false来取消默认行为
- 在超链接标签中添加js代码:<a href="javascript:;"></a>
- DOM查询中对于返回值是一组数据的需要根据数组取出相应的对象
- ==this可以应用在单击事件中表示单击事件的调用对象==
- 获取对象的属性有两种方式
- obj.属性名
- obj[属性名]->可以跟变量较灵活,建议函数中使用
- ==为元素属性设置位置坐标时,必须为元素设置绝对定位==
- 浏览器兼容性:
- chrome认为浏览器的滚动条是body的，可以通过body.scrollTop来获取;火狐等浏览器认为浏览器的滚动条是html的，兼容问题解决如下
```
var st = document.body.scrollTop || document.documentElement.scrollTop;
var sl = document.body.scrollLeft || document.documentElement.scrollLeft;
```
- 浏览器兼容问题:绑定事件会出现,重新写绑定事件
### 快捷键及查询网址
- [常用的关键字和保留字查询地址](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Reserved_words)
- [W3Cschool查阅文档地址](https://www.w3school.com.cn/jsref/dom_obj_event.asp)