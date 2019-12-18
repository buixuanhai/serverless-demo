
 const mysql = require('serverless-mysql')

 export const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.DB_NAME,
    user: process.env.USERNAME,
    password: process.env.PASSWORD
  }
})
 