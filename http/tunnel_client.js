var http = require('http');

  // make a request to a tunneling proxy
  var options = {
    port: 1337,
    hostname: '127.0.0.1',
    method: 'CONNECT',
    path: 'www.google.com:80'
  };

	//http.request() returns an instance of the http.ClientRequest class. 
	//The ClientRequest instance is a writable stream.   
  var req = http.request(options);
  req.end();

  req.on('connect', function(res, socket, head) {
    console.log('got connected!');

	  /*

    // make a request over an HTTP tunnel
    socket.write('GET / HTTP/1.1\r\n' +
                 'Host: www.google.com:80\r\n' +
                 'Connection: close\r\n' +
                 '\r\n');
    socket.on('data', function(chunk) {
      console.log(chunk.toString());
    });
    socket.on('end', function() {
      //proxy.close();
	  console.log('socket end!');
    });
*/

	//res.write('navin');

	});
 
