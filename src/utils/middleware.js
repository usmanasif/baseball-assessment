const Joi = require('joi')

const { BAD_REQUEST, INTERNAL_ERROR } = require('./status')
const { INVALID_ID } = require('./messages')

exports.validatePlayerData = (req, res, next) => {
  try {
    const joiSchema = Joi.object({
      playerId: Joi.number().positive().required(),
      gameDate: Joi.date().required(),
      opponent: Joi.string().required(),
      battingAvg: Joi.number(),
      plateAppearances: Joi.number().required(),
      atBats: Joi.number().required(),
      runs: Joi.number().required(),
      hits: Joi.number().required(),
      runBattedIn: Joi.number().required(),
      doubles: Joi.number().required(),
      triples: Joi.number().required(),
      homerun: Joi.number().required(),
      class: Joi.string().required()
    })

    const { error } = joiSchema.validate(req.body)

    if (error) {
      const message = error.details[0].message.replace(/'/g, '')
      return res.status(BAD_REQUEST).send({ message })
    }

    next()
  } catch (err) {
    res.status(INTERNAL_ERROR).send({ message: err.message })
  }
}

exports.validatePlayerId = (req, res, next) => {
  const joiSchema = Joi.object({
    id: Joi.number().positive().required()
  })

  const { error } = joiSchema.validate(req.params)

  if (error)
    return res.status(BAD_REQUEST).send({ message: INVALID_ID })

  next()
}
