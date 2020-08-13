const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/', async (req, res, next) => {
  const allUsers = await User.findAll();
  console.log('cookie2');
  res.send(allUsers);
});

module.exports = router;
