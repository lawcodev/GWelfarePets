const express = require('express');
const router = express.Router();
const petModel = require('./petPersistence');

router.get('/pets', async (req, res, next) => {
  const rows = await petModel.getPet();
  res.json({
    status: res.statusCode,
    data: rows
  })
});

module.exports = router;