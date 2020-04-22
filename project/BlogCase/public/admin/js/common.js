function serializeToJson(form) {
  //将返回的数组中的对象转化为json格式
  var result = {};
  //[{name: 'email', value: '用户输入的内容'}]
  var f = form.serializeArray();
  // 这里的item是一个对象
  f.forEach(item => {
    result[item.name] = item.value;

  });
  return result;
}