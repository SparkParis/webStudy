// 根据文章目录ID获取文章列表
var categoryId = getURLParams('categoryId');
// 根据目录id获取文章列表
$.ajax({
  type: 'get',
  url: '/posts/category/' + categoryId,
  success: function (response) {
    console.log(response);
    // 绑定文章详情模板
    var html = template('listTpl', { data: response, category: response[0].category.title })
    // console.log(html)
    $('#articleBox').html(html);
  }
})

// 通过事件委托的方式(目的获取当前文章的id)实现点赞功能,点赞成功
$('#articleBox').on('click', '.like', function () {
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

