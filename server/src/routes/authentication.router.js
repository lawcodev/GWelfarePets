import express from 'express'
import { authentication, detailAuthentication } from '../controllers/authenticationController'
const router = express.Router();

router.route('/authentication')  
  .post(authentication)

router.route('/authentication/detail/:id')
  .get(detailAuthentication)
  
module.exports = router;