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

router.get('/pets/count', async (req, res, next) => {
  const countPet = await petModel.getCountPet();
  res.json({
    status: res.statusCode,
    data:  countPet.rows[0]
  })
});

router.get('/pets/delete/:id', async (req, res, next) =>{
  const rowsAffect = await petModel.delete(req.params.id)
  const response = (rowsAffect) ? 'Deleted Success' : 'Not deleted'
  res.json({
    status: res.statusCode,
    data: response
  })
});
module.exports = router;