let app = require('express')
let api = app()

api.get('/', (request, response) => {
  response.send('Home Page')
})
api.get('/about', (request, response) => {
  response.send('About Page')
})

api.listen(3000)
module.exports = api
