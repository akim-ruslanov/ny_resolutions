var express = require('express');
var router = express.Router();

let test_resolutions = [{
    'desc': "go to the gym every day",
    'type': 0,
    'id': 0,
    'streak': 5
  },
  {
    'desc': "stop drinking coke",
    'type': 1,
    'id': 1
  },
  {
    'desc': "die",
    'type': 2,
    'id': 2,
    'done': false
  },
  {
    'desc': "read for 20 mins",
    'type': 0,
    'id': 3,
    'streak': 4
  },
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/resolutions', function(req, res, next) {
  res.render('resolutions', {
    name: "Akim",
    resolutions: test_resolutions
  });
});




module.exports = router;
