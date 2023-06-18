const express = require('express');
const fs = require('fs');
const app = express();

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf-8')
);

/**
 * express构建GET请求API
 */
app.get('/api/v1/tous', (req, res) => {
  res.status(200).json({
    code: 200,
    data: tours,
  });
});

app.listen(3000, () => {
  console.log('start: 3000 port');
});
