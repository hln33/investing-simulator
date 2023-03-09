var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

/* Validate a user's credentials  */
router.post('/validate', (req, res, next) => {
  const { email, password } = req.body;
  // console.log(req.body);

  res.send('validating user');
});

/* Register a user */
router.post('/register', (req, res, next) => {
  const { fname, lname, password, email, phoneNum } = req.body;
  // console.log(req.body);

  res.send('registering user');
});

module.exports = router;
