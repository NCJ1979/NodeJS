var app = require('http').createServer(handler)
  , fs = require('fs');

app.listen(8000);

function handler ( req, res ) {
	var resource = req.url.substring(1);
	if (resource == '')
	{
		resource = 'index.html';
	}	
	console.log('request received:' + resource);
    res.writeHead( 200 , {'Content-Type': 'text/html'});
    res.end(fs.readFileSync(resource));
};

	
//io.sockets.on( 'connection', function ( socket ) {
//  socket.volatile.emit( 'notification' , "blah" );
//});

var io = require('socket.io').listen(80);

io.sockets.on('connection', function (socket) {
	console.log('Inside connection');
	socket.emit('news', { hello: 'world' });
	socket.on('my other event', function (data) {
		console.log(data);
	});
});