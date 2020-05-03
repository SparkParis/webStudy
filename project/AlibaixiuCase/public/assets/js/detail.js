// 从浏览器地址栏中获取id值
var postId = getURLParams('id');
// 评论是否经过人工审核
var review;

// 向服务器发送请求获取文章详细信息
$.ajax({
  type: 'get',
  url: '/posts/' + postId,
  success: function (response) {
    var html = template('articleTpl', response);
    $('#articleBox').html(html);
  }
})

// 通过事件委托的方式(目的获取当前文章的id)实现点赞功能,点赞成功
$('#articleBox').on('click', '#like', function () {
  // 发送点赞请求
  $.ajax({
    type: 'post',
    url: '/posts/fabulous/' + postId,
    success: function () {
      // 点赞成功提示用户即可
      alert('点赞成功,感谢你的支持');
    }
  })
})

// 获取网站配置信息
$.ajax({
  type: 'get',
  url: '/settings',
  success: function (response) {
    // 获取审核状态
    review = response.review;
    // 判断是否开启了评论功能
    if (response.comment) {
      // 开启评论功能则渲染评论模板
      var html = template('commentTpl', response);
      $('#commentsBox').html(html);
    }
  }
})

// 当评论发生提交行为(事件委托的方式)
$('#commentsBox').on('submit', 'form', function () {
  // 获取评论提交的内容
  var content = $(this).find('textarea').val();
  // 代表评论的状态
  var state;

  if (review) {
    // 要经过人工审核
    state = 0;
  } else {
    // 不需要经过人工审核
    state = 1;
  }
  // 向服务器发送请求,执行添加评论操作
  $.ajax({
    type: 'post',
    url: '/comments',
    data: {
      content: content,
      post: postId,
      state: state
    },
    success: function () {
      alert('评论成功');
      location.reload();
    },
    error: function () {
      alert('评论失败');

    }
  })

  // 阻止表单默认提交行为
  return false;
})