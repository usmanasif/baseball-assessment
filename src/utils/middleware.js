const Joi = require('joi')

const { BAD_REQUEST } = require('./status')
const { INVALID_ID } = require('./messages')

exports.validatePlayerId = (req, res, next) => {
  const joiSchema = Joi.object({
    id: Joi.number().positive().required()
  })

  const { error } = joiSchema.validate(req.params)

  if (error)
    return res.status(BAD_REQUEST).send({ message: INVALID_ID })

  next()
}
