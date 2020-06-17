const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

const randomHosts = [
  'www.google.com',
  'www.t-mobile.cz',
  'www.t-mobile.sk',
  'www.fczbkk.com'
]

function generateRandomServer (id) {
  return {
    id: id,
    ip: Math.round(Math.random() * 100000),
    host: randomHosts[Math.floor(Math.random() * randomHosts.length)]
  }
}

const serversList = []
for (let i = 0; i < 100; i++) {
  serversList[i] = generateRandomServer(i + 1)
}

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/servers_list', (req, res) => {
  setTimeout(() => {
    res.send(serversList)
  }, 1000)
})

app.listen(port, () => {
  console.log('dev server running at port', port)
})
