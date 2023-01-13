const {
  ADDED,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  PLAYER_NOT_ADDED_MSG
} = require('../../utils/messages')
const { filePath } = require('../../configs/app')
const { fetchPlayerStats } = require('../../utils/stats')
const { readSheet, writeToFile } = require('../../utils/excel')
const STATUS = require('../../utils/status')

exports.create = ({ body }, res) => {
  try {
    const data = [
      body['playerId'],
      body['gameDate'],
      body['opponent'],
      body['battingAvg'],
      body['plateAppearances'],
      body['atBats'],
      body['runs'],
      body['hits'],
      body['runBattedIn'],
      body['doubles'],
      body['triples'],
      body['homerun'],
      body['class']
    ]

    writeToFile(filePath, data)
    return res.status(STATUS.OK).send({ message: ADDED })
  } catch (error) {
    return res.status(STATUS.INTERNAL_ERROR).send({ message: error.message || PLAYER_NOT_ADDED_MSG })
  }
}

exports.getPlayerStats = async (req, res) => {
  try {
    const { id } = req.params
    const data = await readSheet(filePath)

    const playerStats = fetchPlayerStats(data, parseInt(id))

    if (Object.keys(playerStats).length === 0 && playerStats.constructor === Object)
      return res.status(STATUS.NOT_FOUND).send({ message: NOT_FOUND })

    return res.status(STATUS.OK).send({ data: playerStats })
  } catch (error) {
    return res.status(STATUS.INTERNAL_ERROR).send({ message: error.message || INTERNAL_SERVER_ERROR })
  }
}
