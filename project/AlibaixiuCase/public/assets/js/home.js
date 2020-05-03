// 发送ajax数据获取轮播图数据
$.ajax({
  type: 'get',
  url: '/slides',
  success: function (response) {
    // 绑定模板和数据
    var html = template('slideTpl', { data: response });
    // 添加内容到html页面中
    $('#slideBox').html(html);

    // 将轮播图是实现的js代码写在后面才能展示
    var swiper = Swipe(document.querySelector('.swipe'), {
      auto: 3000,
      transitionEnd: function (index) {
        // index++;
        $('.cursor span').eq(index).addClass('active').siblings('.active').removeClass('active');
      }
    });
    // 上/下一张
    $('.swipe .arrow').on('click', function () {
      var _this = $(this);
      if (_this.is('.prev')) {
        swiper.prev();
      } else if (_this.is('.next')) {
        swiper.next();
      }
    })
  }
})

// 获取最新发布的数据
$.ajax({
  type: 'get',
  url: '/posts/lasted',
  success: function (response) {
    // 不是公共模板,直接在页面中设定
    var html = template('lastedTpl', { data: response });
    $('#lastedBox').html(html);
  }
})
