var cluster = require('cluster');

if (cluster.isMaster) {
  var worker = cluster.fork();
  console.log('worker created: id=' + worker.id);

  //var worker1 = cluster.fork();
  //console.log('worker created: id=' + worker1.id);

  var timeout;

  worker.on('listening', function(address) {
    //worker.disconnect();
	console.log('listening');
    timeout = setTimeout(function() {
      worker.send('force kill');
    }, 2000);
  });

  worker.on('disconnect', function() {
    clearTimeout(timeout);
	console.log('server disconnected');
  });

} else if (cluster.isWorker) {

	console.log('worker id=' + cluster.worker.id);
	
	var net = require('net');
	//Creates a new TCP server.
	//A server is a net.Socket that can listen for new incoming connections. 
	var server = net.createServer(function(socket) {
		// connection never end
	});

  server.listen(8000);

  server.on('close', function() {
    // cleanup
	console.log('server closed');
  });

  process.on('message', function(msg) {
    if (msg === 'force kill') {
      //server.destroy();
	  server.close();
	  server.unref();
	  console.log('server destroyed');
    }
  });
}