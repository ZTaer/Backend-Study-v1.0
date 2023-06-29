const express = require('express');
const fs = require('fs');
const fsAsync = require('node:fs/promises');
const app = express();

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8')
);

// 保证POST请求在 req.body & req.params中获取请求入参
app.use(express.json());

/**
 * express构建GET请求API
 */
const handleGetAllTour = (req, res) => {
  res.status(200).json({
    code: 200,
    data: tours,
  });
};

/**
 * express构建POST请求API
 */
const handlePostAddTour = async (req, res) => {
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
};

/**
 * GET请求根据URL路径参数查询目标
 */
const handleGetIdTour = (req, res) => {
  const { id } = req.params; // 注意: app.use(express.json()); 最好存在

  // 根据id过滤查询
  const result =
    tours instanceof Array
      ? tours.filter((item) => {
          return item.id == id;
        })
      : [];

  res.status(200).json({
    code: 200,
    data: result,
  });
};

/**
 * PATCH更新请求
 */
const handlePatchTour = async (req, res) => {
  const { id, name, difficulty, duration } = req.body;
  let isId = false; // 是否查询到此Id
  let result = {}; // 查询目标数据

  if (!(tours instanceof Array) || !id) {
    res.status(200).json({
      code: 400,
      data: {},
      message: '更新失败',
    });

    return; // 终止下方逻辑执行
  }

  // 更新目标数据
  tours.map((item) => {
    if (item.id === id) {
      isId = true; // true代表查询到目标id
      result = {
        ...item,
        name: name || item.name,
        difficulty: difficulty || item.difficulty,
        duration: duration || item.duration,
      };

      return result;
    }
  });

  if (isId) {
    await fsAsync.writeFile(
      `${__dirname}/dev-data/data/tours-simple.json`,
      JSON.stringify(tours)
    );

    res.status(200).json({
      code: 200,
      data: result,
      message: '更新成功',
    });
  } else {
    res.status(200).json({
      code: 400,
      data: {},
      message: '查询无此id',
    });
  }
};

/**
 * DELETE删除请求
 */
const handleDeleteTour = async (req, res) => {
  const { id } = req.params;
  let isId = false; // 是否查询到此Id
  let result = tours;

  if (!(tours instanceof Array) || !id) {
    res.status(200).json({
      code: 400,
      data: {},
      message: '删除失败',
    });

    return; // 终止下方逻辑执行
  }

  // 删除目标数据
  result = result.filter((item) => {
    if (item.id == id) {
      isId = true; // 如果目标存在则为true
      return false;
    }
    return true;
  });

  if (isId) {
    await fsAsync.writeFile(
      `${__dirname}/dev-data/data/tours-simple.json`,
      JSON.stringify(result)
    );

    res.status(200).json({
      code: 200,
      data: id,
      message: '删除成功',
    });
  } else {
    res.status(200).json({
      code: 400,
      data: {},
      message: '查询无此id',
    });
  }
};

/**
 * 改进路由
 */

app
  .route('/api/v1/tours')
  .get(handleGetAllTour)
  .post(handlePostAddTour)
  .patch(handlePatchTour);
app.route('/api/v1/tours/:id').get(handleGetIdTour).delete(handleDeleteTour);

app.listen(3000, () => {
  console.log('start: 3000 port');
});
