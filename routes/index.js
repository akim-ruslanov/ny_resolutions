var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/typeselect', function(req, res, next) {
  res.render('typeselect');
});



module.exports = router;
