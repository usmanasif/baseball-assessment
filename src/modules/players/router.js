const playersController = require('./players.controller')
const { validatePlayerId, validatePlayerData } = require('../../utils/middleware')

const router = require('express').Router()

router.post('/', validatePlayerData, playersController.create)
router.get('/:id/stats', validatePlayerId, playersController.getPlayerStats)

module.exports = router
