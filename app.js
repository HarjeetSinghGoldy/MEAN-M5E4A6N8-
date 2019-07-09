var createError = require('http-errors');
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
<<<<<<< HEAD
//const config = require('config.json'); 

=======
var path = require('path');
var app = express();
>>>>>>> 847e6c4192b84d5b43ec73d0b729f9c67c7daf5d
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean-angular6')
  .then(() =>  console.log('mongo connection succesful'))
  .catch((err) => console.error(err));

<<<<<<< HEAD
var apiRouter = require('./routes/book');
var apiRouterUser = require('./routes/user');
=======
var routes = require('./routes');

>>>>>>> 847e6c4192b84d5b43ec73d0b729f9c67c7daf5d


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/books', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/book-details/:id', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/book-create', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/book-edit/:id', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/api', apiRouter);
app.use('/api/user', apiRouterUser);

=======
>>>>>>> 847e6c4192b84d5b43ec73d0b729f9c67c7daf5d
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   console.log("@@@@@@@@@@@@@ ############");
//   next();
// });
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.sendStatus(err.status);
// });
console.log("EEEEEEEEEEEEEEEEEEEEEEE",routes);

app.use('/', routes);
module.exports = app;
