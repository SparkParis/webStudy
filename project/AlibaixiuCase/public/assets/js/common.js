// 退出登录
$('#logout').on('click', function () {
  // 通过confirm来确认是否退出登录,返回值是boolean值
  var isConfirm = confirm('您确认退出当前用户吗?');
  if (isConfirm) {
    // 发送请求退出登录
    $.ajax({
      type: 'post',
      url: '/logout',
      success: function () {
        // 确认退出,则直接跳转到登录页面
        location.href = 'login.html'
      },
      error: function () {
        alert('退出失败')
      }
    })
  }
})

// 对日期格式格式化
function dateFormat(date) {
  // 将字符串日期转化为Date对象
  var date = new Date(date);
  // 月是从0开始的需要加1
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}

// 显示用户的信息(通过在index.html中调用接口/login/status	获取返回值isLogin和userId的全局变量[可直接使用])
// 根据id获取用户的详细信息
$.ajax({
  type: 'get',
  url: '/users/' + userId,
  success: function (response) {
    // 将查询到的信息显示在页面中
    $('.profile .avatar').attr('src', response.avatar);
    $('.profile .name').html(response.nickName)
  }
})

