const mysql = require('mysql')

module.exports =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'xxxx',
  port: '3306',
  database: 'system-jiang'
})

console.log('connection begin')
connection.connect()
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
connection.end()
