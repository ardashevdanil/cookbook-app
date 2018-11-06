import express from 'express';
import path from 'path';
import url from 'url';

const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

/* GET items. */
router.get('/', (req, res) => {
  const { query } = url.parse(req.url, true);
  let sql = '';
  const params = {};

  // FIX: not safe for sql injection
  if (query.tag) {
    sql = `SELECT *, _rowid_ as id FROM ${query.tag}`;
  } else if (query.search) {
    sql = 'SELECT *, _rowid_ as id FROM recipes WHERE name LIKE $search';
    params.$search = `%${query.search}%`;
  }

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
    }
    res.json(rows);
  });

  // close the database connection
  db.close((err) => {
    if (err) console.error(err.message);
  });
});

export default router;
