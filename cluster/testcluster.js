//A single instance of Node runs in a single thread. 
//To take advantage of multi-core systems the user will sometimes want to 
//launch a cluster of Node processes to handle the load. 



var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;
var workers = new Array(4);

console.log('Check the number of times it is executed... seems every fork() is calling this');

if (cluster.isMaster) {
  // Fork workers.
	console.log('cluster.isMaster ');
  
  for (var i = 0; i < numCPUs; i++) {
    workers[i] = cluster.fork();
	console.log('fork() worker created id:' + workers[i].id);
	workers[i].send('From worker id:' + workers[i].id + ' Message:hi there');
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {

	console.log('cluster.isMaster NOT');
	
  // Workers can share any TCP connection
  // In this case its a HTTP server
  http.createServer(function(req, res) {
    res.writeHead(200);
    res.end("hello world\n");
  }).listen(8000);
  
  
  process.on('message', function(msg) {
    process.send(msg);
  });

}