import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import path from 'path';

import imagesRouter from './routes/images';
import itemsRouter from './routes/items';
import usersRouter from './routes/users';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', express.static(`${__dirname}/client/build`));
app.use('/users', usersRouter);
app.use('/images', imagesRouter);
app.use('/items', itemsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// FIX: sends page with every path
// express will serve up index.html if it doesn't recognize the route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

module.exports = app;
