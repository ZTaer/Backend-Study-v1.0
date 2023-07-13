const express = require('express');

const {
  // api逻辑
  handleApiTourAll,
  handleApiTourAdd,
  handleApiTourDelete,
  handleApiTourGet,
  handleApiTourPatch,
} = require('../controller/tours.controller');

const router = express.Router();

// tour相关路由
router
  .route('/')
  .get(handleApiTourAll)
  .post(handleApiTourAdd)
  .patch(handleApiTourPatch);

router.route('/:id').get(handleApiTourGet).delete(handleApiTourDelete);

module.exports = router;
