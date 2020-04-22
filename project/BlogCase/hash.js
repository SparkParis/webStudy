//哈希加密
// 导入bcrypt
const bcrypt = require('bcryptjs');
// 注意加密算法要放在异步函数中执行
async function run() {
  // 生成随机字符串,增加密码被破解的难度
  /*
  genSalt(num)
  num的值越大,生成的随机字符串越复杂,默认值是10
  返回生成的随机字符串
  */
  let salt = await bcrypt.genSalt(10);
  console.log(salt);
  // 使用随机字符串对密码进行加密
  /*
  hash('要加密的明文',随机字符串)
  返回值:加密之后的面膜
  */
  // 这里的hash()和genSalt()都是异步API,需要通过异步函数进行解决
  let pass = await bcrypt.hash('1234', salt);
  console.log(pass);
}
run();