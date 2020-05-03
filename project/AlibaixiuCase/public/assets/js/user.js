
// 添加用户功能
$('#userForm').on('submit', function
  () {
  // 获取表单信息formdata的方式(序列化的方式)
  var formData = $(this).serialize();//email=123456%40qq.com&nickName=123&password=123&status=0&role=normal
  // 发送ajax请求
  $.ajax({
    type: 'post',
    url: '/users',
    // data可以直接传递拼接好的字符串
    data: formData,
    success: function () {
      // 用户添加成功则刷新当前页面
      location.reload();
    },
    error: function () {
      // 添加失败提示
      alert('用户信息添加失败');
    }
  })
  // 取消表单默认提交行为
  return false;

})

// 采用事件委派的方式进行头像上传,为编辑用户和添加用户的父元素添加委派事件
$('#modifyBox').on('change', '#avatar', function () {
  // 通过FormData的方式上传二进制文件
  var formData = new FormData();
  // 添加上传文件
  // console.log(this);这里的this指的是dom对象
  // console.log($(this)),$(this)表示的是jquery对象
  // files属性是dom对象的属性
  formData.append('avatar', this.files[0]);
  // 发送ajax请求
  $.ajax({
    type: 'post',
    url: '/upload',
    data: formData,
    // 告诉ajax不要解析请求参数,上传的是二进制文件
    processData: false,
    // FormData中设置了文件上传的方式,这里不需要在设置文件上传的类型
    contentType: false,
    success: function (response) {
      // 这里返回的是文件的上传到服务器端的地址response[0].avatar
      // console.log(response[0].avatar);
      // 实现头像预览功能
      $('#preview').attr('src', response[0].avatar);
      // 将图片地址隐藏在隐藏域中
      $('#hiddenAvatar').val(response[0].avatar);
    }
  })
})

// 用户列表展示功能,页面打开就加载,直接调用ajax请求
$.ajax({
  type: 'get',
  url: '/users',
  success: function (response) {
    // 将返回的数组与模板字符串进行拼接
    // console.log(response)
    var html = template('userTel', { data: response });
    // 模板添加到html页面总
    $('#userBox').html(html)

  }
})

// 通过事件委派的方式编辑用户信息(为编辑标签添加类名和data-in自定义属性)
$('#userBox').on('click', '.edit', function () {
  // 获取edit类名所在的data-in属性来获取当前点击的id
  var id = $(this).attr('data-in');
  // 根据id查询当前用户(发送ajax请求)(restful风格的api)
  $.ajax({
    type: 'get',
    url: '/users/' + id,
    success: function (response) {
      var html = template('modifyTel', response);
      // 将修改的页面加载到页面中
      $('#modifyBox').html(html);
    }
  })
})
// 修改信息提交,为表单添加提交时事件
$('#modifyBox').on('submit', '#modifyForm', function () {
  // 获取表单信息
  var formData = $(this).serialize();
  console.log(formData)
  var id = $(this).attr('data-in');
  // 发送ajax请求
  $.ajax({
    type: 'put',
    url: '/users/' + id,
    data: formData,
    success: function (response) {
      // 重新加载页面
      location.reload();
    }
  })
  // 取消表单的默认格式
  return false;
})

// 通过事件委派的方式删除用户(添加类名delete和data-in自定义属性来获取删除id)
$('#userBox').on('click', '.delete', function () {
  // 确认是否删除
  if (confirm('你确认删除该用户?')) {
    var id = $(this).attr('data-in');
    // 发送ajax请求
    $.ajax({
      type: 'delete',
      url: '/users/' + id,
      success: function () {
        location.reload();
      }
    })
  }
})

// 删除多个用户
// (1)设置全选全不选的同步状态
var selectAll = $('#selectAll');
var deleteMany = $('#deleteMany');
// 为全选按钮添加改变事件
selectAll.on('change', function () {
  // 获取当前按钮的选中状态
  var status = $(this).prop('checked');

  // 批量删除按钮显示与隐藏
  if (status) {
    // 显示批量删除按钮
    deleteMany.show();
  } else {
    // 隐藏批量删除按钮
    deleteMany.hide()
  }
  // 查找所有的用户并设置选中状态(通过事件委派的方式)
  $('#userBox').find('input').prop('checked', status);
})
// 当用户当前的状态发生变化时
$('#userBox').on('change', '.userStatus', function () {
  // 思路:判断当前input中选中的个数个当前用户的length是否相等
  var inputs = $('#userBox').find('input');
  if (inputs.length == inputs.filter(':checked').length) {
    selectAll.prop('checked', true);
  } else {
    selectAll.prop('checked', false);
  }
  // 批量删除按钮显示与隐藏
  if (inputs.filter(':checked').length > 0) {
    // 显示批量删除按钮
    deleteMany.show();
  } else {
    // 隐藏批量删除按钮
    deleteMany.hide()
  }
})
// 删除按钮添加点击事件,删除多个用户通过restful api的风格,这里采用的是/users/:id-id-id,将删除的id保存在数组中方便连接,在input中添加data-in自定义属性获取选中的id
deleteMany.on('click', function () {
  var ids = [];
  //获取选中用户
  var checkedUser = $('#userBox').find('input').filter(':checked');
  // 循环将每个input属性中的data-in值保存在数组中
  checkedUser.each((index, ele) => {
    // 注意这里ele是dom对象===this,这里需使用jquery对象获取对应的属性值
    var id = $(ele).attr('data-in');
    ids.push(id);
  });
  // console.log(ids)
  if (confirm('确认删除以下选中用户?')) {
    // 发送ajax请求
    $.ajax({
      type: 'delete',
      url: '/users/' + ids.join('-'),
      success: function () {
        location.reload();
      }
    })
  }
})



