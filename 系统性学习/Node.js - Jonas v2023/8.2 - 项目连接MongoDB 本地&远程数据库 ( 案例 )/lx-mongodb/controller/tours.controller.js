const fs = require('fs');
const fsAsync = require('node:fs/promises');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, 'utf-8')
);

/**
 * tour相关中间件
 */
// 校验url参数id是否合格, 不合格return将拦截API逻辑
exports.handleMidTourCheckId = (req, res, next, val) => {
  const { id } = req.params;

  if (id === '0') {
    return res.status(200).json({
      code: 400,
      data: {},
      message: '参数不正确',
    });
  }

  next();
};

// 校验req.body下的参数是否合格
exports.handleMidTourCheckBody = (req, res, next) => {
  const { id } = req.body;

  if (typeof id !== 'number') {
    res.status(200).json({
      code: 400,
      data: {},
      message: '参数不正确',
    });
  }

  next();
};

/**
 * tour相关API逻辑
 */
// 获取全部tour
exports.handleApiTourAll = (req, res) => {
  res.status(200).json({
    code: 200,
    data: tours,
  });
};

// 增加tour
exports.handleApiTourAdd = async (req, res) => {
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
      `${__dirname}/../dev-data/data/tours-simple.json`,
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

// 获取指定tour
exports.handleApiTourGet = (req, res) => {
  const { id } = req.params; // 注意: app.use(express.json()); 最好存在

  // 根据id过滤查询
  const result =
    tours instanceof Array
      ? tours.filter((item) => item.id.toString() === id)
      : [];

  res.status(200).json({
    code: 200,
    data: result,
  });
};

// 更新指定tour
exports.handleApiTourPatch = async (req, res) => {
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
    return item;
  });

  if (isId) {
    await fsAsync.writeFile(
      `${__dirname}/../dev-data/data/tours-simple.json`,
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

// 删除指定tour
exports.handleApiTourDelete = async (req, res) => {
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
    if (item.id === Number(id)) {
      isId = true; // 如果目标存在则为true
      return false;
    }
    return true;
  });

  if (isId) {
    await fsAsync.writeFile(
      `${__dirname}/../dev-data/data/tours-simple.json`,
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
