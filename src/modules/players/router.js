const playersController = require('./players.controller')

const router = require('express').Router()

router.get('/:id/stats', playersController.getPlayerStats)

module.exports = router
