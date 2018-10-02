import express from 'express';
import fs from 'fs';
import path from 'path';
import url from 'url';

const router = express.Router();

/* GET image. */
router.get('/', (req, res, next) => {
  const imgName = url.parse(req.url, true).query.name;

  fs.readFile(path.join(__dirname, `../public/images/recipes/${imgName}`), (err, data) => {
    if (err) console.log(err);
    res.setHeader('Content-Type', 'image/jpeg');
    res.end(data);
  });
});

export default router;
