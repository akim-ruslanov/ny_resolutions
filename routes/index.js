var express = require('express');
var router = express.Router();
var api = require("../server/Server");

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

router.get('/typeselect', function(req, res, next) {
  res.render('typeselect', {function: api.addEntry});
});

router.post('/typeselect', function(req, res, next) {
  res.redirect('/resolution')
})


router.get('/resolutions', function(req, res, next) {
  res.render('resolutions', {
    name: api.getUserName(),
    resolutions: api.getEntries(),
  });
});


router.get('/resolution/:id', function(req, res, next) {
  res.render('resolution', {id: req.params.id});
});

router.post('/resolution', function(req, res, next) {
  api.setEntryDesc(req.body["id"], req.body["content"]);
  res.redirect('/resolutions')
})

router.get('/welcome', function(req, res, next) {
  res.render('welcome');
});

router.post('/welcome', function(req, res, next) {
  // call API to do backend stuff
  api.setUserName(req.body["name"]);
  router.redirect('/typeselect');
  // res.render('resolutions', {
  //   name: req.body['name'],
  //   resolutions: test_resolutions
  // });
})



module.exports = router;
