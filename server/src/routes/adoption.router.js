import express from 'express'
import { addNewAdoption, getAllPetsAdoption, GetAllUnApprovedTakenPet } from '../controllers/adoptionController'

const router = express.Router();

router.route('/adoption/add')
  .post(addNewAdoption)

router.route('/adoption')
  .get(getAllPetsAdoption)

  router.route('/adoption/unapproved/taken')
  .get(GetAllUnApprovedTakenPet)

module.exports = router;