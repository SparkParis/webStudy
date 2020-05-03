// 请求随机推荐数据
$.ajax({
  type: 'get',
  url: '/posts/random',
  success: function (response) {
    // 抽取公共部分的模板
    var randomTpl = `
    {{each data}}
    <li>
            <a href="detail.html?id={{$value._id}}">
              <p class="title">{{$value.title}}</p>
              <p class="reading">阅读({{$value.meta.views}})</p>
              <div class="pic">
                <img src="{{$value.thumbnail}}" alt="">
              </div>
            </a>
          </li>
    {{/each}}
    `
    // 绑定模板和数据
    var html = template.render(randomTpl, { data: response });
    $('#randomBox').html(html);
  }
})

// 最新评论
$.ajax({
  type: 'get',
  url: '/comments/lasted',
  success: function (response) {
    var commentTpl =
      `
    {{each data}}
    <li>
      <a href="detail.html?id={{$value._id}}">
        <div class="avatar">
          <img src="{{$value.author.avatar}}">
        </div>
        <div class="txt">
          <p>
            <span>{{$value.author.nickName}}</span>{{$value.createAt.split('T')[0]}}
          </p>
          <p>{{$value.content}}</p>
        </div>
      </a>
    </li>
    {{/each}}
    `
    // 绑定模板和数据
    var html = template.render(commentTpl, { data: response });
    $('#commentBox').html(html);

  }
})

// 获取分类列表
$.ajax({
  type: 'get',
  url: '/categories',
  success: function (response) {
    // 注意这里的类名前面的图标根据类名进行设置的
    var categoryTpl =
      `
      {{each data}}
      <li>
        <a href="list.html?categoryId={{$value._id}}">
          <i class="fa {{$value.className}}"></i>{{$value.title}}
        </a>
      </li>
      {{/each}}
      `;
    var html = template.render(categoryTpl, { data: response });
    $('#categoryBox').html(html);
    $('#topCategoryBox').html(html)
  }
})

//网站搜索功能是公共部分,获取搜索框并绑定提交事件(注意搜索结果展示页面和list.html一样复制一份作为搜索页面展示)
$('.search form').on('submit', function () {
  // 获取表单中的搜索关键值
  var keys = $(this).find('.keys').val();
  // 跳转到搜索结果页面 并且将用户输入的搜索关键字传递到搜索结果页面
  location.href = "/search.html?key=" + keys;
  // 阻止表单的默认提交行为
  return false;
})