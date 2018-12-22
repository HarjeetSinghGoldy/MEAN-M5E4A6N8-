var createError = require('http-errors');
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean-angular6')
  .then(() =>  console.log('mongo connection succesful'))
  .catch((err) => console.error(err));

var routes = require('./routes');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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
