// 页面一开始加载文章分类并显示在页面中
$.ajax({
  url: '/categories',
  type: 'get',
  success: function (response) {
    // 绑定模板
    var html = template('categoryTpl', { data: response });
    // 添加到页面中
    $('#category').html(html)
  }
})

// 实现文件上传功能
$('#feature').on('change', function () {
  // 通过formData上传文件
  var formData = new FormData();
  // 获取当前文件
  var file = this.files[0]
  formData.append('cover', file);
  // 发送ajax请求获取服务器短地址
  $.ajax({
    type: 'post',
    url: '/upload',
    data: formData,
    // 不要让浏览器进行解析
    processData: false,
    // 不要设置类型,formdata对象中已经设置了类型
    contentType: false,
    success: function (response) {
      // 将服务器端返回的地址保存在隐藏域中
      $('#thumbnail').val(response[0].cover)
    }
  })
})

// 当添加文章表单提交的时候
$('#addForm').on('submit', function () {
  // 获取管理员在表单中输入的内容
  var formData = $(this).serialize();
  console.log(formData)
  // 向服务器端发送请求 实现添加文章功能
  $.ajax({
    type: 'post',
    url: '/posts',
    data: formData,
    success: function () {
      // 文章添加成功 跳转到文章列表页面
      location.href = '/admin/posts.html'
    }
  })
  // 阻止表单默认提交的行为
  return false;
});

// 获取id值,如果id值存在当前跳转的页面就是编辑文章页面
var id = getURLParams('id');
if (id != -1) {
  // 根据id值获取详细信息显示在文章编辑页面
  $.ajax({
    type: 'get',
    url: '/posts/' + id,
    success: function (response) {
      // 这里还要获取分类列表中的数据，通过ajax请求
      $.ajax({
        url: '/categories',
        type: 'get',
        success: function (categories) {
          // 将分类目录添加到response的属性中
          response.categories = categories;
          // 将编辑模板和数据进行绑定
          var html = template('modifyTpl', response);
          $('#parentBox').html(html)
        }
      })
    }
  })
}

// 为修改表单添加提交事件(通过事件委派的方式)
$('#parentBox').on('submit', '#modifyForm', function () {
  // 获取表单修改的数据
  var formData = $(this).serialize();
  var id = $(this).attr('data-id');
  console.log(id)
  // 发送请求
  $.ajax({
    type: 'put',
    url: '/posts/' + id,
    data: formData,
    success: function () {
      // 修改成功跳转到文章列表页面
      location.href = '/admin/posts.html';
    }
  })
  // 阻止表单提交
  return false;
})
