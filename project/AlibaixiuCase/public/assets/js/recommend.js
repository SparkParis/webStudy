// 索要热门推荐数据
$.ajax({
  type: 'get',
  url: '/posts/recommend',
  success: function (response) {
    // 将公共模板写在js文件中通过字符串进行拼接
    var str = `
    {{each data}}
      <li>
        <a href="detail.html?id={{$value._id}}">
          <img src="{{$value.thumbnail}}">
          <span>{{$value.title}}</span>
        </a>
      </li>
    {{/each}}
    `;
    // 渲染模板
    var html = template.render(str, { data: response });
    // 添加到页面中
    $('#hotBox').html(html)
  }
})