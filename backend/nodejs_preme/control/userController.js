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
          res.json(results )
        })
}

exports.getReviewByIdNovel = async (req,res)=>{
  connection.execute(
      'SELECT * FROM user_review WHERE id_novel= ?;',[req.params.idNovel],
      (err, results, fields) => {
        res.json(results )
      })
}

exports.getsecret = async (req,res)=>{
  connection.execute(
      `SELECT * FROM user_review WHERE id_user=?;`,[req.body.id],
      (err, results, fields) => {
        res.json(results);
      }) 
}

exports.getbasketByIdNovel = async (req,res)=>{
  connection.execute(
    'SELECT id,`name`,price,file_pic,author FROM novel_detail u WHERE u.id In(SELECT id_novel FROM basket_user WHERE id_user=?);', [req.params.idUser],
      (err, results, fields) => {
        res.json(results)
      })
}

exports.deletebasketById = async (req,res)=>{
  connection.execute(
    'delete FROM basket_user WHERE id_novel=?;', [req.params.idnovel],
      (err, results, fields) => {
        res.json(results)
      })
}

