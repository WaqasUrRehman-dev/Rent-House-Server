const express = require('express')
const router = express.Router()
const { all_users, signup, login, update_profile } = require('./controller')

router.get('/all-users', all_users)

router.post('/signup', signup)
router.post('/login', login)
router.put('/update-profile', update_profile)

module.exports = router