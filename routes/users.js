var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Validate a user's credentials  */
router.get('/validate', function(req, res, next) {
  res.send('validating');
});

module.exports = router;
