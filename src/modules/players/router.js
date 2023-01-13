const playersController = require('./players.controller')
const { validatePlayerId } = require('../../utils/middleware')

const router = require('express').Router()

router.get('/:id/stats', validatePlayerId, playersController.getPlayerStats)

module.exports = router
