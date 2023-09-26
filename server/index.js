const express = require('express')
var mysql = require('mysql');
var jwt = require('jsonwebtoken');
var cors = require('cors');
var bcrypt = require('bcrypt');
var cookieParser = require('cookie-parser')


const app = express();
app.use(express.json());
app.use(cors())
app.use(cookieParser())

const port = process.env.PORT || 5000


app.use(express.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs"
});


app.get('/', (req, res) => {
  var sql = "SELECT * FROM user";
  con.query(sql, function(err, results) {
    if (err) throw err;
    res.send(results);
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


