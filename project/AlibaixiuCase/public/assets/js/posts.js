// 页面一开始就加载文章列表
$.ajax({
  type: 'get',
  url: '/posts',
  success: function (response) {
    // 绑定模板
    var html = template('articleListTpl', response);
    // 添加到页面
    $('#articleBox').html(html);
    // 绑定分页模板
    var page = template('pageTpl', response);
    $('#pageBox').html(page);
  }
})

//取消页面选择中a的默认行为,并为a添加点击事件发送ajax请求,传递参数page
function changePage(page) {
  $.ajax({
    type: 'get',
    url: '/posts',
    // 传递当前显示的页码
    data: { page: page },
    success: function (response) {
      // 绑定模板
      var html = template('articleListTpl', response);
      // 添加到页面
      $('#articleBox').html(html);
      // 绑定分页模板
      var page = template('pageTpl', response);
      $('#pageBox').html(page);
    }
  })
}

// 获取分类列表
$.ajax({
  type: 'get',
  url: '/categories',
  success: function (response) {
    var html = template('categoryTpl', { data: response });
    $('#categoryBox').html(html);
  }
})
// 为删选按钮添加提交事件
$('#filterForm').on('submit', function () {
  // 获取表单数据
  var formData = $(this).serialize();
  // 发送请求获取删选数据
  $.ajax({
    type: 'get',
    url: '/posts',
    data: formData,
    success: function (response) {
      // 绑定模板
      var html = template('articleListTpl', response);
      // 添加到页面
      $('#articleBox').html(html);
      // 绑定分页模板
      var page = template('pageTpl', response);
      $('#pageBox').html(page);
    }
  })
  // 取消表单的默认行为
  return false;
})

// 删除文章
$('#articleBox').on('click', '.delete', function () {
  var id = $(this).attr('data-id');
  // 确认是否删除
  if (confirm('确认删除所选文章吗?')) {
    // 发送ajax请求删除
    $.ajax({
      type: 'delete',
      url: '/posts/' + id,
      success: function () {
        // 删除成功返回文章列表页面
        location.href = '/admin/posts.html'
      }
    })
  }
})
