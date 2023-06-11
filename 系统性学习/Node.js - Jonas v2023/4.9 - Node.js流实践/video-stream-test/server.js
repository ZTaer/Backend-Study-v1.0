const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');
const rangeParser = require('range-parser');
const pump = require('pump');

http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  if (parsedUrl.pathname === '/video') {
    const videoPath = path.join(__dirname, '/video/sample.mp4');
    fs.stat(videoPath, (err, stat) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.statusCode = 404;
          return res.end('Not found');
        }
        res.statusCode = 500;
        return res.end(err.message);
      }

      const fileSize = stat.size;
      const range = req.headers.range;

      if (!range) {
        res.setHeader('Content-Length', fileSize);
        res.setHeader('Content-Type', 'video/mp4');
        return pump(fs.createReadStream(videoPath), res);
      }

      const ranges = rangeParser(fileSize, range, {combine: true});
      if (ranges === -1 || ranges === -2 || ranges.type !== 'bytes' || ranges.length > 1) {
        res.statusCode = 416;
        return res.end('Invalid range');
      }

      if (!Array.isArray(ranges) || ranges.length !== 1 || ranges[0].length !== 2) {
        res.statusCode = 500;
        return res.end('Unexpected range format');
      }

      const [start, end] = ranges[0];
      res.statusCode = 206;
      res.setHeader('Content-Range', `bytes ${start}-${end}/${fileSize}`);
      res.setHeader('Accept-Ranges', 'bytes');
      res.setHeader('Content-Length', end - start + 1);
      res.setHeader('Content-Type', 'video/mp4');
      pump(fs.createReadStream(videoPath, {start, end}), res);
    });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
}).listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
