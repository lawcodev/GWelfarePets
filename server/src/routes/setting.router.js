const express = require('express');
const router = express.Router();
const configModel = require('../services/setting.services');

router.get('/settings', async (req, res, next) => {
  const rows = await configModel.getSetting();
  res.json({
    status: res.statusCode,
    data: rows
  })
});

module.exports = router;