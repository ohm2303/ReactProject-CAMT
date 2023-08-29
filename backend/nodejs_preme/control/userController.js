const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

exports.getAllNovels = async (req,res)=>{
    connection.execute(
        'SELECT * FROM novel_detail;',
        (err, results, fields) => {
          res.json(results);
        })
}

