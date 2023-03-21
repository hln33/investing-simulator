require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');

const { getStockBySymbol } = require('../services/Stock');
const { addProfile, findProfileByLogin } = require('../services/Profile');

var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var stockRouter = require('../routes/stock');

// constants
const PORT = 8081;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/stock', stockRouter);

/** DB TEST **/
// app.get('/test', async (req, res) => {
//   const data = {
//     username: "Denzel",
//     password_hash: "123456",
//     email: "denzelnasol@gmail.com",
//     phone_number: "604-401-7843"
//   };
//   // await findProfileByLogin("DenzelNasol@gmail.com", "123456")
//   await addProfile(data);
//   // const data = await getStockBySymbol('testStock');
//   res.json(data);
// })

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
