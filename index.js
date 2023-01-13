// Third Party Packages Imports
const express = require('express')
const swaggerUi = require('swagger-ui-express')

// Custom Imports
const routes = require('./src/routes')
const swaggerDocument = require('./swagger.json')

const app = express()
const port = process.env.PORT || 3000

// Middleware
app.use(express.json())

// Setting Headers
app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'api-token, Origin, Content-Type, Accept'
  )
  next()
})

// Swagger
app.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Routes
routes(app)

app.listen(port, () => console.log(`Listening on port ${port}`))
