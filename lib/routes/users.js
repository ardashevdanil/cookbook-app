import express from 'express';
import shajs from 'sha.js';
import path from 'path';

const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// Login user
router.post('/login', (req, res) => {
  const sql = `
    SELECT
      password,
      salt
    FROM users
    WHERE name = $userName;
  `;
  const params = {
    $userName: req.body.name,
  };

  // open the database connection
  const db = new sqlite3.Database(
    path.join(__dirname, '../databases/main.db'),
    sqlite3.OPEN_READONLY,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    },
  );

  // quering password and salt from database
  db.get(sql, params, (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).end();
    } else if (!row) {
      res.status(401).end();
    } else {
      // hashing the client password
      const hash = shajs('sha256').update(req.body.password + row.salt).digest('hex');

      // compare passwords
      if (hash === row.password) {
        res.status(202).end();
      } else {
        res.status(401).end();
      }
    }
  });

  // close the database connection
  db.close((err) => {
    if (err) console.error(err.message);
  });
});

// Sign in user
router.post('/signin', (req, res) => {
  const sql = `
    INSERT INTO users(name, password, salt, img)
    VALUES($name, $password, $salt, '/images/users/' || $img);
  `;

  // making salt
  const salt = Date.now() + req.body.name;

  // hashing the client password
  const hash = shajs('sha256').update(req.body.password + salt).digest('hex');
  const params = {
    $img: req.body.img,
    $name: req.body.name,
    $salt: salt,
    $password: hash,
  };

  // open the database connection
  const db = new sqlite3.Database(
    path.join(__dirname, '../databases/main.db'),
    sqlite3.OPEN_READWRITE,
    (err) => {
      if (err) {
        console.error(err.message);
      }
    },
  );

  // inserting user data in the database
  db.run(sql, params, (err) => {
    if (err) {
      console.error(err.message);
      res.status(401).end();
      return;
    }

    res.status(201).end();
  });

  // close the database connection
  db.close((err) => {
    if (err) console.error(err.message);
  });
});

export default router;
