$(function () {
  // 当我们点击了小li 此时不需要执行 页面滚动事件里面的 li 的背景选择 添加 current
  // 节流阀 互斥锁
  var flag = true;

  // 1.显示隐藏电梯导航
  var toolTop = $(".recommend").offset().top;
  // alert(toolTop);
  toggleTool();

  function toggleTool() {
    if ($(document).scrollTop() >= toolTop) {
      $(".fixedtool").fadeIn();
    } else {
      $(".fixedtool").fadeOut();
    }
  }
  // 页面滚动事件
  $(window).scroll(function () {
    toggleTool();
    // 3. 页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名


    if (flag) {
      $(".floor .w").each(function (i, ele) {
        if ($(document).scrollTop() >= $(ele).offset().top) {
          // console.log(i);
          $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();

        }
      })
    }
  });
  // 2. 点击电梯导航页面可以滚动到相应内容区域
  $(".fixedtool li").click(function () {
    flag = false;
    console.log($(this).index());//获取当前元素的索引号
    // 当我们每次点击小li 就需要计算出页面要去往的位置 
    // 选出对应索引号的内容区的盒子 计算它的.offset().top
    var current = $(".floor .w").eq($(this).index()).offset().top;
    $("body, html").stop().animate({
      scrollTop: current
    }, function () {
      // 单击结束需要允许页面继续滚动
      flag = true;
    });
    // 点击之后，让当前的小li 添加current 类名 ，姐妹移除current类名
    $(this).addClass("current").siblings().removeClass();
  })


})