// 评论列表展示(页面一开始就加载)
$.ajax({
  type: 'get',
  url: '/comments',
  success: function (response) {
    console.log(response)
    var html = template('commentsTpl', response);
    $('#commentsBox').html(html);
    // 绑定分页模板  
    var pageHtml = template('pageTpl', response);
    $('#pageBox').html(pageHtml);
  }
})

// 分页
function pageChange(page) {
  $.ajax({
    type: 'get',
    url: '/comments',
    data: { page: page },
    success: function (response) {
      var html = template('commentsTpl', response);
      $('#commentsBox').html(html);
      // 绑定分页模板  
      var pageHtml = template('pageTpl', response);
      $('#pageBox').html(pageHtml);
    }
  })
}

// 修改评论状态(当前未审核->按钮为批准,当前已审核->按钮为驳回),事件委派的方式
$('#commentsBox').on('click', '.status', function () {
  //获取当前id
  var id = $(this).attr('data-id');
  // 获取当前状态
  var status = $(this).attr('data-status');
  // 发送ajax请求修改评论状态
  $.ajax({
    type: 'put',
    url: '/comments/' + id,
    data: { state: status == 0 ? 1 : 0 },
    success: function () {
      // 状态修改成功刷新当前页面
      location.reload();
    }
  })
})

// 删除评论,事件委托的方式
$('#commentsBox').on('click', '.delete', function () {
  // 获取删除的id
  var id = $(this).attr('data-id');
  if (confirm('确认删除评论?')) {
    // 发送ajax请求删除评论
    $.ajax({
      type: 'delete',
      url: '/comments/' + id,
      success: function () {
        // 删除成功刷新页面
        location.reload();
      }
    })
  }
})
