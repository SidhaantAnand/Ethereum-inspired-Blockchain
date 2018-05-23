var express = require('express');
var app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));;
var formidable = require('formidable');
var fs = require('fs');
var cheerio = require('cheerio');
var database = require('./EthereumDatabase.js')

var objToInsert = {
    type : null,
    text : null
};



app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/file', function (req, res){
    console.log("In post");
   // console.log(req.body.user.name);
    var form = new formidable.IncomingForm();
    form.parse(req);
    //res.sendFile(__dirname + '/index.html');
    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/uploads/' + file.name;
        console.log("fileBegin");
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
        console.log(file.path);
        var img = fs.readFileSync(file.path);
        console.log(img.toString());
        objToInsert.text = img.toString();
        objToInsert.type = req.body.user.name;
        database.addToUser(objToInsert);
    });
     res.sendFile(__dirname + '/index.html');

   
});

app.listen(3000);