// logo添加图片上传
$('#file').on('change', function () {
  alert(123)
  var file = this.files[0];
  var formData = new FormData();
  formData.append('logo', file);
  $.ajax({
    type: 'post',
    url: '/upload',
    data: formData,
    processData: false,
    contentType: false,
    success: function (response) {
      // 将上传后的文件地址保存在隐藏域中
      $('#hiddenLogo').val(response[0].logo);
      // 实现预览功能
      $('#preview').prop('src', response[0].logo)
    }
  })
})

// 为设置表单添加提交事件
$('#settingForm').on('submit', function () {
  // 获取表单数据
  var formData = $(this).serialize();
  // 发送请求提交表单
  $.ajax({
    type: 'post',
    url: '/settings',
    data: formData,
    success: function () {
      location.reload();
    }
  })
  // 阻止表单的默认行为
  return false;
})

// 获取网站配置显示在页面(没有配置则返回值不存在)
$.ajax({
  type: 'get',
  url: '/settings',
  success: function (response) {
    // 如果设置过,response不为空
    if (response) {
      // 将获取到的值显示在页面中
      $('#hiddenLogo').val(response.logo);
      // 图片预览
      $('#preview').prop('src', response.logo);
      // 显示网站名称
      $('input[name="title"]').val(response.title);
      // 显示开启评论功能
      $('input[name="comment"]').prop('checked', response.comment);
      // 评论是否经过评选
      $('input[name="review"]').prop('checked', response.review);
    }
  }
})