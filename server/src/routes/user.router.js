import express from 'express'
import { addNewUser } from '../controllers/userController'
const router = express.Router();

router.route('/user/add')
  .post(addNewUser)

module.exports = router;