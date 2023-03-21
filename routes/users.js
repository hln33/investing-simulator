var express = require('express');
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

var router = express.Router();
router.use(cookieParser());

const Profile = require('../services/Profile');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

/* Login a user */
router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  const profile = await Profile.findProfileByLogin(email, password);
  if (!profile || profile === null) {
    res.send({ success: false });
    return;
  }

  const token = jwt.sign({ email }, process.env.JWT_KEY);
  res.cookie('token', token, { httpOnly: true });
  res.send({ success: true, token });

});

/* Verify a user's credentials  */
router.get('/verify', async (req, res, next) => {
  const token = req.headers['authorization'];
  console.log(token)
  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      console.error(err);
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    req.user = decoded;
    res.send({ success: true });
  });
});

/* Register a user */
router.post('/register', (req, res, next) => {
  const { fname, lname, password, email, phoneNum } = req.body;
  // console.log(req.body);

  res.send('registering user');
});

module.exports = router;
