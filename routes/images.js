var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var url = require('url');
var ROOT = __dirname;

/* GET image. */
router.get('/', function(req, res, next) {
  let imgName = url.parse(req.url, true).query.name;
  
  fs.readFile(path.join(ROOT, `../public/images/recipes/${imgName}`), (err, data) => {
    if (err) console.log(err);
    res.setHeader('Content-Type', 'image/jpeg');
    res.end(data);
  })
});

module.exports = router;