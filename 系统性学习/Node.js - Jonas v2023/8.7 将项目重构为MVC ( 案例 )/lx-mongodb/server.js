const dotenv = require('dotenv');
const mongoose = require('mongoose');

/**
 * 配置环境变量文件
 */
dotenv.config({
  path: `${__dirname}/config.env`,
});

const app = require('./app');

/**
 * 连接MongoDB数据库
 */
// 线上数据库
const DB = process.env.DATABASE_SERVER.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);
// 本地数据库, 注意开启mongod
// const DB = process.env.DATABASE_LOCAL;

mongoose
  .connect(DB, {
    // 这些选项是为了消除一些警告, 因版本问题部分选项会报错
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: true,
  })
  .then(() => {
    console.log('connect db success');
  })
  .catch((err) => {
    console.log('connect db fail', err);
  });

/**
 * 初始化server
 */
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('start:3000');
  console.log('connect db loading...');
});
