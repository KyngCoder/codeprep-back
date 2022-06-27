const express = require('express')
//import controllers
const {getQuizzes,createQuiz,deleteQuiz,getQuizzesBySearch} = require('../controllers/Quiz')


const router = express.Router()

router.get('/',getQuizzes)
router.get('/search',getQuizzesBySearch)

// router.get('/:id',getQuiz)

 router.post('/',createQuiz)

// router.patch('/:id',updateQuiz)

router.delete('/:id',deleteQuiz)


module.exports = router