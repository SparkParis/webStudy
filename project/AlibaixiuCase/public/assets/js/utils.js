// 根据属性名获取参数值函数
function getURLParams(name) {
  // 获取url中的参数
  var urlArr = location.search.substr(1).split('&');
  // 通过循环获取当前属性值
  for (var i = 0; i < urlArr.length; i++) {
    var tmp = urlArr[i].split('=');
    if (tmp[0] == name) {
      return tmp[1];
    }
    // 没有找到则返回-1
    return -1
  }
}
