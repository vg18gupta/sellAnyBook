const router = require('express').Router()
const { getAll, create } = require('../controllers/bookController')


router.get('/', getAll)

router.post('/', create)

router.get('/:bookId', (req,res) => {

})

router.put('/:bookId', (req,res) => {

})

router.delete('/:bookId', (req,res) => {

})

module.exports = router