var normal = require('child_process').fork('server2_child.js', ['normal']);
var special = require('child_process').fork('server2_child.js', ['special']);

// Open up the server and send sockets to child
var server = require('net').createServer();

server.on('connection', function (socket) 
	{
		socket.write(socket.remoteAddress);

		// if this is a VIP
		if (socket.remoteAddress === '127.0.0.1') 
		{
			special.send('socket', socket);
			return;
		}
		
		// just the usual dudes
		normal.send('socket', socket);
	});
	
server.listen(1337);