// 获取搜索关键字
var key = getURLParams('key');
// 发送ajax请求获取
$.ajax({
  type: 'get',
  url: '/posts/search/' + key,
  success: function (response) {
    // 将模板和数据进行绑定
    var html = template('searchTpl', { data: response, key: key });
    $('#searchBox').html(html)
  }
})

$('#searchBox').on('click', '.like', function () {
  // 通过点赞中的自定义属性data-id获取当前点赞文章的id
  var postId = $(this).attr('data-id')
  // 发送点赞请求
  $.ajax({
    type: 'post',
    url: '/posts/fabulous/' + postId,
    success: function () {
      // 点赞成功提示用户即可
      alert('点赞成功,感谢你的支持');
      location.reload()
    }
  })
})
