var app = require('express')();
var express = require('express');
var server = require('http').Server(app);
var io = require('socket.io')(server);

var socket = require('socket.io');
var port = 8080;

server.listen(port);
var connections = [];


console.log('Socket server is running on port', port);

app.use(express.static('public')); //host public directory

// app "routes": /login, /register, etc
// app.get('/page', function (req, res) {
//   res.sendfile(__dirname + '/index.html');
// });

io.on('connection', newConnection);  //event for new connection (hey im connected, i see you, goodbye)

function newConnection(socket) {
	var conLen = connections.length;
	console.log('new connection: ' + socket.id);
	socket.emit('open', {hello:'world'});
	connections.push(socket);

	io.sockets.emit('getConnection', {connectionLength: conLen});

	console.log("the current connections are:" + connections.length);;

	socket.on('theMouseWasPressed', handleMousePress);
	broadcast(conLen);

}

function confirmData(data) {
	console.log(data);
}

function handleMousePress(data) {
	console.log(data);
}
	

	// setInterval( function(){newLine(Math.random(1000), Math.random(1000))}, 10);
  // socket.on('mousePressed', newLine( 100, 100 ));
   // socket.on('theMouseWasPressed', console.log("mouse was pressed"));

  // when client emits the message
	// socket.on('mousePressed', function(data){mousePressed({mousePressed: data, id: socket.id});});


	function broadcast (data) {
		for (item in connections) {
			connections[item].send(data);
		}
	}

// }


// function newLine(newX, newY){
// 	io.emit('newLine', {x: newX, y: newY})
// }

