var mongoose = require('mongoose');
var Book = require('../models/Book.js');


function list(callback) {
  console.log("list");
  Book.find({}, function(err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}

function add(body,callback) {
  console.log("add");
  Book.create(body, function(err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}

function findById(id,callback) {
  console.log("findById");
  Book.findById(id, function(err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}

function findByIdAndUpdate(id,body,callback) {
  console.log("findByIdAndUpdate");
  Book.findByIdAndUpdate(id, body,function(err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}
function findByIdAndRemove(id,body,callback) {
  console.log("findByIdAndRemove");
  Book.findByIdAndRemove(id, body,function(err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}


var self = {
  list: list,
  add: add,
  findById: findById,
  findByIdAndRemove: findByIdAndRemove,
  findByIdAndUpdate: findByIdAndUpdate
};


module.exports = self;
