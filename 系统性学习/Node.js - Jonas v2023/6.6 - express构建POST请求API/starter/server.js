const express = require('express');
const fs = require('fs');
const fsAsync = require('node:fs/promises');
const app = express();

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8')
);

// 保证POST请求在req.body中获取请求入参
app.use(express.json());

/**
 * express构建GET请求API
 */
app.get('/api/v1/tous', (req, res) => {
  res.status(200).json({
    code: 200,
    data: tours,
  });
});

/**
 * express构建POST请求API
 */
app.post('/api/v1/tous', async (req, res) => {
  try {
    // post请求入参
    const { name = '', duration = 1, difficulty = 'easy' } = req.body;

    // 新数据
    tours.push({
      id: tours.length + 100,
      name,
      duration,
      difficulty,
    });

    // 注意: fs.writeFile只能写入字符串格式，否则报错 ( 完成笔记 )
    await fsAsync.writeFile(
      `${__dirname}/dev-data/data/tours-simple.json`,
      JSON.stringify(tours)
    );

    res.status(200).json({
      code: 200,
      data: {
        id: tours.length + 100,
        name,
        duration,
        difficulty,
      },
    });
  } catch (error) {
    res.status(200).json({
      code: 400,
      data: {},
      message: '添加失败',
    });
  }
});

app.listen(3000, () => {
  console.log('start: 3000 port');
});
