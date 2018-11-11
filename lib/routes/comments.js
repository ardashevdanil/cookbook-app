import express from 'express';
import path from 'path';
import url from 'url';

const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// GET comments
router.get('/', (req, res) => {
  const { query } = url.parse(req.url, true);
  const sql = `
    SELECT
      date,
      likes,
      text,
      comments._rowid_ AS id,
      users.img AS avatar,
      users.name AS userName
    FROM 
      comments
    LEFT JOIN users ON user_name = users.name
    WHERE
      recipe_id = $recipe;
  `;
  const params = {
    $recipe: query.recipe,
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

  // quering data from database
  db.all(sql, params, (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(404).end();
      return;
    }

    res.json(rows);
  });

  // close the database connection
  db.close((err) => {
    if (err) console.error(err.message);
  });
});

// POST comments
router.post('/', (req, res) => {
  const sql = `
    INSERT INTO comments(date, likes, recipe_id, text, user_name)
    VALUES (date("now"), 0, $recipeId, $text, $userName);
  `;
  const params = {
    $recipeId: req.body.recipeId,
    $text: req.body.text,
    $userName: req.body.userName,
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

  // inserting data to database
  db.run(sql, params, (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).end();
    }
  });

  // close the database connection
  db.close((err) => {
    if (err) console.error(err.message);
  });

  res.end();
});

export default router;
