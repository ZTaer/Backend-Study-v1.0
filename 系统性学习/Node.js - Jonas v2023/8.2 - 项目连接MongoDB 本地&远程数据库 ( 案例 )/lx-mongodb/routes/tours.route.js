const express = require('express');
const {
  // api逻辑
  handleApiTourAll,
  handleApiTourAdd,
  handleApiTourDelete,
  handleApiTourGet,
  handleApiTourPatch,

  // 中间件逻辑
  handleMidTourCheckId,
  handleMidTourCheckBody,
} = require('../controller/tours.controller');

/**
 * express更合理的路由写法
 */

const router = express.Router();

/**
 * 参数中间件
 */
router.param('id', handleMidTourCheckId); // 校验要求带/:id的url参数id是否合格

/**
 * 连接多个路由级中间件函数
 *    a) 在指定路由生效的中间件，一条路由可以放多个中间件
 *    b) 常见: 登录校验，权限校验，错误校验等...， 特殊逻辑
 */

// tour相关路由
router
  .route('/')
  .get(handleApiTourAll)
  .post(handleMidTourCheckBody, handleApiTourAdd)
  .patch(handleMidTourCheckBody, handleApiTourPatch);
router.route('/:id').get(handleApiTourGet).delete(handleApiTourDelete);

module.exports = router;
