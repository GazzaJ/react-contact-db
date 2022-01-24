const express = require('express');
const router = express.Router();

// @route     GET api/auth
// @desc      Retrieve a logged in user
// @access    Private
router.get('/', (req, res) => {
  res.send('Retrieve a logged in user');
});

// @route     POST api/auth
// @desc      Authenticate user and get token
// @access    Public
router.post('/', (req, res) => {
  res.send('Log in the user');
});

module.exports = router;
