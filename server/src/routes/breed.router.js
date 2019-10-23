import express from 'express'
import { getAllBreeds } from '../controllers/breedController'
const router = express.Router();

router.route('/breeds')
  .get(getAllBreeds)
  
module.exports = router;