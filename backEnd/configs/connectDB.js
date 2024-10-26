import mysql from 'mysql2'

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'thuchanh',
  password: ''
})

const connection = pool.promise()
if (connection) {
  console.log("Connected")
}
export default connection
