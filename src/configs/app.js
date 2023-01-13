require('dotenv').config()

const apiVersion = process.env.API_VERSION || '/api/v1/'
const env = process.env.NODE_ENV || 'local'
const filePath = process.env.FILE_PATH
const port = process.env.PORT || 3000

module.exports = {
  apiVersion,
  env,
  filePath,
  port
}
