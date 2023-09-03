const mysql = require('mysql2');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

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
      'SELECT id_user,id_novel,details,num_like,display_name FROM user_review r join user_detail d WHERE id_novel= ? AND id_user=d.id;',[req.params.idNovel],
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

exports.checkUser = async (req,res)=>{
  if(!req.body.username || !req.body.password){
    return res.json("fail");
  }
  try{
    connection.execute(
    'SELECT username,`password`,id,level FROM user_detail where username= ? And password= ?;',[req.body.username,req.body.password],
      (err, results, fields) => {
        if(results.length > 0){
          res.cookie('id',results[0].id);
          res.json("success");
        }
        else{
          res.json("wrong");
        }

      })
  }
  catch(err){
    res.json('err');
  }
}

exports.checkCokkie = async (req,res)=>{
  if(!req.cookies.id){
    return res.status(400).json({
      status: 'Failed',
      message: 'No data',
    });
  }
  try{
    connection.execute(
      'SELECT pic,display_name,id,email,level FROM user_detail where id = ?;',[req.cookies.id],
        (err, results, fields) => {
          if(results.length > 0){
            res.json(results);
          }
          else{
            res.json("Failed");
          }
  
        })
  }
  catch(err){
    res.json("error")
  }
}

exports.pullidnovel = async (req,res)=>{
  if(!req.params.idUser){
    return res.status(400).json({
      status: 'Failed',
      message: 'No data',
    });
  }
  try{
    connection.execute(
      'SELECT id,`name`,price,category,author,file_pic FROM novel_detail WHERE id in(SELECT id_novel FROM user_buy where id_user = ?);',[req.params.idUser],
        (err, results, fields) => {
          if(results.length > 0){
            res.json(results);
          }
          else{
            res.json("Failed");
          }
  
        })
  }
  catch(err){
    res.json("error")
  }
}

exports.passReviewByIdNovel = async (req,res)=>{
  if(!req.body){
    return res.status(400).json({
      status: 'Failed',
      message: 'No data',
    });
  }
  try{
    connection.execute(
      'INSERT INTO user_review (id_user, id_novel, details, num_like`) VALUES (?, ?, ?, ?);',[req.body.id_user,req.body.id_novel,req.body.details,req.body.num_like],
        (err, results, fields) => {
          if(results.length > 0){
            res.json(results);
          }
          else{
            res.json("wrong");
          }
  
        })
  }
  catch(err){
    res.json("error")
  }
}