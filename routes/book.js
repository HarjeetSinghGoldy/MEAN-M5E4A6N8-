
// ensure the NODE_ENV is set to 'test'
// this is helpful when you would like to change behavior when testing
process.env.NODE_ENV = 'development';
var express = require('express');
var router = express.Router();
var Book = require('../lib/bookHandler');

console.log("get books");


/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  console.log("get books");
  Book.list(function(err, result) {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    return res.json(result);
  });
});

/* GET SINGLE BOOK BY ID */
router.post('/:id', function(req, res, next) {
  Book.findById(req.params.id,function(err, result) {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
  return res.json(result);
  });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
  Book.add(req.body,function(err, result) {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
  return res.json(result);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Book.add(req.params.id, req.body,function(err, result) {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    return res.json(result);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body,function(err, result) {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    return res.json(result);
  });
});

module.exports = router;
