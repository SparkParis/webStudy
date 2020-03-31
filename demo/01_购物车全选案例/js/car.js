$(function () {

  // 1. 全选 全不选功能模块
  // 就是把全选按钮（checkall）的状态赋值给 三个小的按钮（j-checkbox）就可以了
  // 事件可以使用change
  $(".checkall").change(function () {
    // console.log($(".checkall").prop("checked"));
    // 点击全选将所欲按钮选上
    $(".checkall,.j-checkbox").prop("checked", $(this).prop("checked"));

    // 选中则添加背景色
    if ($(this).prop("checked")) {
      $(".cart-item").addClass("check-cart-item");
    } else {
      $(".cart-item").removeClass("check-cart-item");
    }
  })

  // 2. 如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选。
  $(".j-checkbox").change(function () {
    // console.log($(".j-checkbox:checked"));
    if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
      $(".checkall").prop("checked", true);
    } else {
      $(".checkall").prop("checked", false);
    }

    // 选中则添加当前背景色
    if ($(this).prop("checked")) {
      $(this).parents(".cart-item").addClass("check-cart-item");
    } else {
      $(this).parents(".cart-item").removeClass("check-cart-item");
    }
  })
  /*
  增减商品数量:
> 1.核心思路：首先声明一个变量，当我们点击+号（increment），就让这个值++，然后赋值给文本框。
> 2.注意1： 只能增加本商品的数量， 就是当前+号的兄弟文本框（itxt）的值。 
> 3.修改表单的值是val() 方法
> 4.注意2： 这个变量初始值应该是这个文本框的值，在这个值的基础上++。要获取表单的值
> 5.减号（decrement）思路同理，但是如果文本框的值是1，就不能再减了
  */
  // 3.为增加商品绑定单击事件

  $(".increment").click(function () {
    // 得到当前兄弟的文本框的值
    var n = $(this).siblings(".itxt").val();
    // console.log(n);
    n++;
    $(this).siblings(".itxt").val(n);

    // 计算价钱toFixed(2)可以保留两位小数,parents()获取祖先元素
    var p = $(this).parents(".p-num").siblings(".p-price").html();
    p = p.substr(1);//获取第二个字符开始的字符串
    var price = (p * n).toFixed(2);
    $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
    getSum();


  })
  // 4.为减少商品增加绑定事件
  $(".decrement").click(function () {
    var n = $(this).siblings(".itxt").val();
    if (n == 1) {
      return false;//返回当前执行
    }
    n--;
    $(this).siblings(".itxt").val(n);//修改兄弟元素的显示值
    // 计算价钱
    var p = $(this).parents(".p-num").siblings(".p-price").html();
    p = p.substr(1);//获取第二个字符开始的字符串
    var price = (p * n).toFixed(2);
    $(this).parents(".p-num").siblings(".p-sum").html("￥" + price);
    getSum();

  })
  // 5.修改文本框中的值计算价钱
  $(".itxt").change(function () {
    var p = $(this).parents(".p-num").siblings(".p-price").html();
    p = p.substr(1);//获取第二个字符开始的字符串
    var n = $(this).val();
    $(this).parents(".p-num").siblings(".p-sum").html("￥" + (p * n).toFixed(2));
    getSum();

  })
  // 一开始就调用计算总的价钱和商品个数
  getSum();
  // 获取总的商品件数和总的价钱数
  function getSum() {
    var num = 0;//总的商品件数
    var price = 0;//总的价钱
    // 遍历同一类的商品件数
    $(".itxt").each(function (index, ele) {
      num += parseInt($(ele).val());
    });
    // 赋值非总的个数
    $(".amount-sum em").text(num);
    // 计算总的价钱
    $(".p-sum ").each(function (index, ele) {
      price += parseFloat($(ele).text().substr(1));
    });
    $(".price-sum em").text("￥" + price.toFixed(2));
  }
  // 6.删除购物车中商品
  // 6.1 删除当前商品
  $(".p-action a").click(function () {
    $(this).parents(".cart-item").remove();
    getSum();
  })
  // 6.2 删除选中商品
  $(".remove-batch").click(function () {
    // 隐氏迭代,删除所有选中的
    $(".j-checkbox:checked").parents(".cart-item").remove();
    getSum();
  })
  // 6.3 删除清空购物车
  $(".clear-all").click(function () {
    $(".cart-item").remove();
    getSum();

  })





})