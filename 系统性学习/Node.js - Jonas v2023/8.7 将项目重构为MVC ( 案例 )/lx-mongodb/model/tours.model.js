const mongoose = require('mongoose');

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

module.exports = Tours;
