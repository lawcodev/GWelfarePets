import express from 'express'
import { getAllQuestions } from '../controllers/questionController'
const router = express.Router();

router.route('/questions')
  .get(getAllQuestions)

module.exports = router