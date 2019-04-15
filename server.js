const path = require('path');
const express = require('express');
const app = express();





const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'bef8aad65b2994',
    password: '0c5b5599',
    database: 'heroku_c2b251680f1e301'
})


mysqlConnection.connect((err) => {
    if (!err)
        console.log('Db connection succeded.')
    else
        console.log('Connection failed \n Error: ' + JSON.stringify(err, undefined, 2))
})


const bodyparser = require('body-parser');

app.use(bodyparser.json());


app.listen(3000, () => console.log('Express server is running in port 3000'));


var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

var config = {
    sql: 'SELECT * FROM users',
    timeout: 40000
};

// get
app.use(allowCrossDomain).get('/users', (req, res) => {
    mysqlConnection.query(config, (err, rows, fields) => {
        if (!err)
            console.log(rows)
        else
            console.log(err)

        res.send(rows);


    })
});















// Serve static files
app.use(express.static(__dirname + '/dist/temaOne'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/temaOne/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);



