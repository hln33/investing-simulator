var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Validate a user's credentials  */
router.get('/validate', function(req, res, next) {
  const { email, password } = req.query;
  //console.log("email: " + email);
  //console.log("password: " + password);

  res.send('validating user');
});

/* Register a user */
router.get('/register', function(req, res, next) {
  const { fname, lname, password, email, phoneNum } = req.query;
  //console.log("password: " + password);

  res.send('registering user');
});

module.exports = router;
