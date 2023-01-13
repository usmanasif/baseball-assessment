// Third Party Packages Imports
const express = require('express')

// Custom Imports
const routes = require('./src/routes')

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

// Routes
routes(app)

app.listen(port, () => console.log(`Listening on port ${port}`))
