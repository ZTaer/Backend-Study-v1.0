const Tours = require('../model/tours.model');

/**
 * tour相关中间件
 */

/**
 * tour相关API逻辑
 */
// 获取全部tour
exports.handleApiTourAll = async (req, res) => {
  try {
    // mongoose读取文档 ( 等待笔记 )
    //    a) 通过Mongoose查询文档中全部数据
    const data = await Tours.find();

    res.status(200).json({
      code: 200,
      data,
      message: 'success',
    });
  } catch (error) {
    console.warn('handleApiTourAll error', error);
    res.status(200).json({
      code: 400,
      data: {},
      message: error,
    });
  }
};

// 增加tour
exports.handleApiTourAdd = async (req, res) => {
  try {
    // mongoose创建文档 ( 等待笔记 )
    //    a) 在tours文档中创建一条数据
    //    b) 如果tours不存在, 先创建合集在增加数据
    const data = await Tours.create(req.body);

    res.status(200).json({
      code: 200,
      data,
      message: 'success',
    });
  } catch (error) {
    console.warn('handleApiTourAdd error', error);

    res.status(200).json({
      code: 400,
      data: {},
      message: error,
    });
  }
};

// 获取指定tour
exports.handleApiTourGet = async (req, res) => {
  try {
    const { id } = req.params; // 注意: app.use(express.json()); 最好存在

    // mongoose读取文档 ( 等待笔记 )
    //    a) 二种查询方式
    //    b) Model.findById() 仅能通过id查询
    //    c) Model.find() 可以通过多条件查询
    const data = await Tours.findById(id); // 方式一: 通过id查询数据
    // const data = await Tours.find({ _id: id }); // 方式二: 通过id查询数据

    res.status(200).json({
      code: 200,
      data,
      message: 'success',
    });
  } catch (error) {
    res.status(200).json({
      code: 400,
      data: {},
      message: error,
    });
  }
};

// 更新指定tour
exports.handleApiTourPatch = async (req, res) => {
  const { id, name, difficulty, duration } = req.body;
};

// 删除指定tour
exports.handleApiTourDelete = async (req, res) => {
  const { id } = req.params;
};
