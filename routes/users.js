var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Validate a user's credentials  */
router.post('/validate', function(req, res, next) {
  const { email, password } = req.body;
  // console.log("email: " + email);
  // console.log("password: " + password);

  res.send('validating user');
});

/* Register a user */
router.post('/register', function(req, res, next) {
  const { fname, lname, password, email, phoneNum } = req.body;
  // console.log("password: " + password);

  res.send('registering user');
});

module.exports = router;
