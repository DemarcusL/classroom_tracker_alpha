var createError = require('http-errors');
const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(cors({
  origin: '*'
}));
const mongoDB = "mongodb+srv://dlester:dlester12@cluster0.ytyfm.mongodb.net/301Final?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {});

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error'));

const PORT = process.env.PORT || 3001;



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/seed', require('./routes/seed'));
app.use('/student', require('./routes/student'));
app.use('/gradebook', require('./routes/gradebook'));


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));


module.exports = app;
