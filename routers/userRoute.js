const router = require('express').Router()
const {login} = require('../controllers/userControllers')


router.post('/register', (req,res) => {

})


router.post('/login', login)

module.exports = router 