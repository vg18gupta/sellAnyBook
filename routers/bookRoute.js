const router = require('express').Router()
const { getAll, create, getSingleBook, remove } = require('../controllers/bookController')


router.get('/', getAll)

router.post('/', create)

router.get('/:bookId', getSingleBook)

/*router.put('/:bookId', (req,res) => {

})*/

router.delete('/:bookId', remove)

module.exports = router