/**
* Module Path
*/
const playersRouteHandler = require('../modules/players/router')
const { apiVersion } = require('../configs/app')
 
module.exports = app => {
  app.get('/', (req, res) => {
    res.send('Welcome to Baseball Stats')
  })
 
  /**
  * Module Routes
  */
  app.use(`${apiVersion}players`, playersRouteHandler)
}
