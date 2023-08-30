const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

exports.getAllReview = async (req,res)=>{
    connection.execute(
        'SELECT * FROM user_review;',
        (err, results, fields) => {
          res.json(results);
        })
}
// exports.getRating = async (req,res)=>{
//   connection.execute(
//       'SELECT * FROM user_review;',
//       (err, results, fields) => {
//         res.json(results);
//       })
// }

exports.getsecret = async (req,res)=>{
  connection.execute(
      `SELECT * FROM user_review WHERE id_user=${req.params.id};`,
      (err, results, fields) => {
        res.json(results);
      }) 
}
