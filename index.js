const express = require('express')
const app = express()
// const connection = require('./data')

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT, POST ,GET ,DELETE ,OPTIONS')
  res.header('X-Powered-By', '3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

const result = {
  code: 1,
  data:[
    {
      name: 'greatjiang',
      height: '177cm'
    },
    {
      name: 'luca',
      height: '50cm'
    }
  ]
}

app.get('/getData', (req, res) => {
  res.status(200)
  res.json(result)
})

const server = app.listen(3000, () => {
  console.log('[info]---API start')
})