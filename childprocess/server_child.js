
var counter = 0;

process.on('message', function(m, server) 
{
	if (m === 'server') 
	{
		server.on('connection', function (socket) 
			{
				//socket.end('handled by child ' + counter++);
				//socket.end('hello');							//NOT ALLOWED; END IS EQUIVALUENT TO WRITE+END
				
				socket.write('handled by child ' + counter++);
				socket.write('socket.remoteAddress  ' + socket.remoteAddress + ':' + socket.remotePort);
				socket.write('socket.localAddress  ' + socket.localAddress + ':' + socket.localPort);
				socket.end();
				
			});
	}
});

