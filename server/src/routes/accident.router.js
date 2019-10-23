import express from 'express'
import { addNewAccident, getAllAccidentApproved, getAllAccidentUnApproved, deleteAccident, accidentApproved} from '../controllers/accidentController'
const router = express.Router();

router.route('/accident/add')
  .post(addNewAccident)

router.route('/accident/approved')
  .get(getAllAccidentApproved)

router.route('/accident/unApproved')
  .get(getAllAccidentUnApproved)

router.route('/accident/delete/:id')
  .get(deleteAccident)

router.route('/accident/approved/:id')
  .get(accidentApproved)
  
module.exports = router;