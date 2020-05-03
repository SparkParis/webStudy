// 为分类按钮添加提交事件
$('#addCategories').on('submit', function () {
  // 获取表单内容
  var formData = $(this).serialize();
  // 为表单添加提交
  $.ajax({
    type: 'post',
    url: '/categories',
    data: formData,
    success: function () {
      // 添加成功表单进行刷新
      location.reload();
    }
  })
  // 取消表单默认行为
  return false;
})

// 页面加载分类目录列表
$.ajax({
  type: 'get',
  url: '/categories',
  success: function (response) {
    // 模板和数据绑定
    var html = template('categoryListTpl', { data: response });
    // 将模板添加到页面
    $('#categoryBox').html(html);
  }
})

// 编辑分类目录(事件委托,编辑按钮是动态添加的)
$('#categoryBox').on('click', '.edit', function () {
  // 获取编辑的id
  var id = $(this).attr('data-in');
  // 查询详细信息
  $.ajax({
    type: 'get',
    url: '/categories/' + id,
    success: function (response) {
      // 将编辑信息展示在页面中
      var html = template('modifyCategoriesTpl', response);
      // 添加到页面中
      $('#formBox').html(html);
    }
  })
})
//编辑提交事件(事件委派的方式获取当前点击的事件)
$('#formBox').on('submit', '#modifyCategories', function () {
  // 获取当前表单
  var formData = $(this).serialize();
  var id = $(this).attr('data-in');
  // 发送ajax请求
  $.ajax({
    type: 'put',
    url: '/categories/' + id,
    data: formData,
    success: function () {
      location.reload();
    }
  })
  // 取消表单默认行为
  return false;
})

// 删除分类
$('#categoryBox').on('click', '.delete', function () {
  var id = $(this).attr('data-in');
  if (confirm('你真的要删除吗?')) {
    $.ajax({
      type: 'delete',
      url: '/categories/' + id,
      success: function () {
        // 删除成功则刷新当前页面
        location.reload()
      }
    })
  }
})

// 删除多个分类
// (1)全选/全不选
var selectAll = $('#selectAll');
var deleteMany = $('#deleteMany');
selectAll.on('change', function () {
  // 获取当前用户状态
  var status = $(this).prop('checked');
  // 设置批量删除按钮的显示与隐藏
  if (status) {
    deleteMany.show();
  } else {
    deleteMany.hide();
  }
  // 设置子用户的选中状态(通过父元素查找子元素的选中状态)
  $('#categoryBox').find('input').prop('checked', status);
})
// 当分类目录发生变化
$('#categoryBox').on('change', '#categoryStatus', function () {
  var inputs = $('#categoryBox').find('input');
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
// 删除按钮操作(click)
deleteMany.on('click', function () {
  // 声明数组保存id
  var ids = [];
  // 获取选中目录
  var checkedCategories = $('#categoryBox').find('input').filter(':checked')
  checkedCategories.each((index, ele) => {
    // ele===this是dom对象
    ids.push($(ele).attr('data-in'));
  });
  if (confirm('确认删除?')) {
    //发送ajax请求
    $.ajax({
      type: 'delete',
      url: '/categories/' + ids.join('-'),
      success: function () {
        location.reload();
      }
    })
  }
})