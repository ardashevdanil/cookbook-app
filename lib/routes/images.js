import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

/* GET image. */
router.get('/:dir/:name', (req, res) => {
  const { dir, name } = { ...req.params };

  fs.readFile(
    path.join(__dirname, `../public/images/${dir}/${name}`),
    (err, data) => {
      if (err) console.log(err);
      res.setHeader('Content-Type', 'image/png');
      res.end(data);
    },
  );
});

export default router;
