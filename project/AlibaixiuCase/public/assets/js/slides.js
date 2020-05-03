//实现图片上传
$('#file').on('change', function () {
  // 获取文件
  var file = this.files[0];
  // 创建FormData对象
  var formData = new FormData();
  formData.append('image', file);
  // 发送请求
  $.ajax({
    type: 'post',
    url: '/upload',
    data: formData,
    processData: false,
    contentType: false,
    success: function (response) {
      console.log(response[0].image)
      $('#image').val(response[0].image)
    }
  })
})

// 为轮播图添加提交事件
$('#slideForm').on('submit', function () {
  // 获取表单
  var formData = $(this).serialize();
  console.log(formData)
  // 发送ajax请求添加轮播图
  $.ajax({
    type: 'post',
    url: '/slides',
    data: formData,
    success: function () {
      // 添加成功刷新页面
      location.reload()
    }
  })
  // 阻止表单默认提交
  return false;
})

// 图片轮播展示
$.ajax({
  type: 'get',
  url: '/slides',
  success: function (response) {
    // 绑定模板和数据
    var html = template('slideTpl', { data: response });
    $('#slideBox').html(html)
  }
})

// 图片轮播数据删除
$('#slideBox').on('click', '.delete', function () {
  var id = $(this).attr('data-id');
  if (confirm('确定删除?')) {
    // 发送ajax请求删除
    $.ajax({
      type: 'delete',
      url: '/slides/' + id,
      success: function () {
        location.reload();
      }
    })
  }
})