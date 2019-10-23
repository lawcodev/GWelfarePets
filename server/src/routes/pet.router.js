import express from 'express'
import { addNewPet, getAllPets, countAllPetActive, deletePet, detailPet } from '../controllers/petController'
const router = express.Router();

router.route('/pets/add')
  .post(addNewPet)

router.route('/pets')
  .get(getAllPets)

router.route('/pets/count')
  .get(countAllPetActive)

router.route('/pets/delete/:id')
  .get(deletePet)

router.route('/pets/detail/:id')
  .get(detailPet)

module.exports = router;