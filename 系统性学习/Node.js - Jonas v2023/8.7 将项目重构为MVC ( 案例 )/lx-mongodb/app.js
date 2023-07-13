/* eslint-disable prettier/prettier */
const express = require('express');
const morgan = require('morgan');
const tourRoute = require('./routes/tours.route');
const userRoute = require('./routes/users.route');

const app = express();

/**
 * 第三方中间件
 */
app.use(express.json());

// 配置静态目录 ( 核心 )
app.use(express.static(`${__dirname}/public`));

// 当环境变量为开发环境时, 将在控制台打印请求日志
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// 路由
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);

// 配置单页面应用程序
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

module.exports = app;
