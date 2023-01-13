const {
  INTERNAL_SERVER_ERROR,
  NOT_FOUND
} = require('../../utils/messages')
const { filePath } = require('../../configs/app')
const { fetchPlayerStats } = require('../../utils/stats')
const { readSheet } = require('../../utils/excel')
const STATUS = require('../../utils/status')

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
