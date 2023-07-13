const express = require('express');

const userRoute = express.Router();
const {
  handleApiUserAll,
  handleApiUserCreate,
  handleApiUserDelete,
  handleApiUserGet,
  handleApiUserPatch,
} = require('../controller/users.controller');

// user相关路由
userRoute.route('/').get(handleApiUserAll).post(handleApiUserCreate);
userRoute
  .route('/:id')
  .get(handleApiUserGet)
  .patch(handleApiUserPatch)
  .delete(handleApiUserDelete);

module.exports = userRoute;
