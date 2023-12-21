const express = require('express')
const router = express.Router()

const { all_houses, add_house, update_house, delete_house, searchHouseByCity } = require('./controller')

router.get('/all-houses', all_houses)
router.get('/search-by-city', searchHouseByCity)

router.post('/add-house', add_house)
router.put('/update-house', update_house)
router.delete('/delete-house', delete_house)

module.exports = router