const express = require('express');
const router = express.Router();
const configModel = require('./settingPersistence');

router.get('/settings', async (req, res, next) => {
  const configRows = await configModel.getConfig();
  res.json({
    status: res.statusCode,
    data: configRows
  })
});

module.exports = router;