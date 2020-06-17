const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

const serversList = [
  {id: 'server1', ip: '123.456.789', host: 'www.google.com'},
  {id: 'server2', ip: '456.789.123', host: 'www.t-mobile.com'},
  {id: 'server3', ip: '789123.456', host: 'www.fczbkk.com'},
]

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/servers_list', (req, res) => {
  setTimeout(() => {
    res.send(serversList)
  }, 3000)
})

app.listen(port, () => {
  console.log('dev server running at port', port)
})
