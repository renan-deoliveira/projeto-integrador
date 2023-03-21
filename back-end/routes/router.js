const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send({ titulo: 'home' })
})
router.get('/produtos', (req, res) => {
    res.status(200).send({ titulo: 'home' })
})

module.exports = router