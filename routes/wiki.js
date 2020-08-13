const express = require('express');
const router = express.Router();
const { Page } = require('../models');

router.get('/', async (req, res, next) => {
  const allPages = await Page.findAll();
  console.log('cookie1');
  res.send(allPages);
});

module.exports = router;
