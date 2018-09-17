const express = require('express')
const app = express()
const connection = require('./data')

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT, POST ,GET ,DELETE ,OPTIONS')
  res.header('X-Powered-By', '3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.get('/getData', (req, res, next) => {
  const sql = "select * from usermes"
  connection.query(sql,(err,result) => {
    if(err) {
      console.log('[SELECT ERROR] - ', err.message)
      return false
    }
    console.log('result',result)
    res.status(200)
    res.json(result)
  })
  console.log('connection end')
  // connection.end()
})

const server = app.listen(3000, () => {
  console.log('[info]---API start')
})