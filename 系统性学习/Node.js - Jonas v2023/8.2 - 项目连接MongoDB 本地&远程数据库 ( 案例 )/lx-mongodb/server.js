const dotenv = require('dotenv');
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require('mongoose');

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
 * 连接MongoDB数据库
 */
// 线上数据库
// const DB = process.env.DATABASE_SERVER.replace(
//   '<password>',
//   process.env.DATABASE_PASSWORD
// );
// 本地数据库, 注意开启mongod
const DB = process.env.DATABASE_LOCAL;

mongoose
  .connect(DB, {
    // 这些选项是为了消除一些警告, 因版本问题部分选项会报错
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log('connect db success');
  })
  .catch((err) => {
    console.log('connect db fail', err);
  });

/**
 * 方式一: 使用Mongoose创建简单的数据模型,以tour示例 ( 不推荐 )
 *      a) 规则入库
 */
const toursSchema = new mongoose.Schema({
  name: {
    type: String, // 字段内容类型: String, Number,
    require: [true, 'Required name string'], // 是否必填: [ 必填开关, 报错内容 ]
    unique: true, // 唯一: 字段内容不可重复
    index: true, // 确保索引存在,保证unique正常
  },
  rating: {
    type: Number,
    default: 10,
  },
  price: {
    type: Number,
    required: [true, 'Required price number'],
  },
});
const Tours = mongoose.model('Tours', toursSchema);

/***
 * 创建MongoDB文档(合集), 写入数据测试数据模型
 */
const testTour = new Tours({
  name: 'TourTitle',
  rating: 8.5,
  price: 120,
});

// 写入数据
testTour
  .save()
  .then((msg) => {
    console.log('save success', msg);
  })
  .catch((err) => {
    console.log('save fail', err);
  });

/**
 * 初始化server
 */
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('start:3000');
});
