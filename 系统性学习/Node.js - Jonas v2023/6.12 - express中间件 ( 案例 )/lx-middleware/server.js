const dotenv = require('dotenv');

/**
 * 配置环境变量文件
 *    a) process.env.XXX 可访问
 *    b) 注意: 环境变量配置要在，所有的变量最上方，方便其他文件访问环境变量 ( 核心 )
 *    c) 注意: 在 `package.json` 改变node.js环境变量, 以用于区分生产和开发环境命令配置
 */
dotenv.config({
  path: `${__dirname}/config.env`,
});

const app = require('./app');

/**
 * 初始化server
 */
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('start:3000');
});
