import formidable from 'formidable';
import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

// GET image.
router.get('/:dir/:name', (req, res) => {
  const { dir, name } = { ...req.params };

  fs.readFile(
    path.join(__dirname, `../public/images/${dir}/${name}`),
    (err, data) => {
      if (err) {
        console.log(err);
        res.status(404).end();
        return;
      }

      res.end(data);
    },
  );
});

// POST image
router.post('/users', (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err);
      return;
    }

    // check file type
    if (['image/jpeg', 'image/png'].indexOf(files.img.type) === -1) {
      console.log('wrong file type');
      res.status(401);
      return;
    }

    const oldpath = files.img.path;
    const newpath = path.join(__dirname, `../public/images/users/${files.img.name}`);

    // moving image to the public dir
    fs.rename(oldpath, newpath, (error) => {
      if (error) {
        console.error(err);
        res.status(500).end();
      }
    });
  });

  // waiting for loading all files on the disk
  form.on('end', () => {
    res.end();
  });
});

export default router;
