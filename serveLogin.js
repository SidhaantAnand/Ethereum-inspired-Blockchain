var express = require('express');

var app = express();

var fs = require('fs');

var files = ["tetris.html","tictactoe.html","sudoku code.html"];
var index = 0;

app.get('/',function(req,res) {

 

                console.log("Request in process of being handled")

                var htm = fs.readFileSync('Login.html',"UTF-8");

                console.log("Read file");

                res.send(htm);

                console.log("File served");

 

});

 

app.post('/', function(req, res) {


	 	console.log("Request in process of being handled")

                var htm = fs.readFileSync(files[index],"UTF-8");

                console.log("Read file");

                res.send(htm);

                console.log("File served");
                index++;


 

});

 
/*
app.get('/test', function(req,res) {

                console.log("Hmm");

                var httm = fs.readFileSync('serveThis.html',"UTF-8")

                res.send(httm);

});
*/
 

app.listen(3000);