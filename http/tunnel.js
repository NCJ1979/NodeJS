//WHAT IS HAPPENING HERE?
// tunnel.js -- HTTP SERVER IS CREATED AND IS LISTENING IN PORT 1337
//			-- THIS SERVER ALSO LISTENS FOR CLIENT 'CONNECT' REQUESTS

// tunnel_client.js
//			HERE, THE 'CONNECT' REQUEST IS MADE TO THE SERVER LOCALHOST:1337
//			THE CONNECT LISTENER, CREATES A BRAND NEW SOCKET TO GOOGLE.COM:80
//			THIS NEW SOCKET AND ORIGINAL CLIENT SOCKET (CREATED WHEN CLIENT MADE THE HTTP CONNECT REQUEST) ARE PIPED.
//			SO NOW, REQUEST TO LOCALHOST:1337 IS ACTUALLY RETURNING GOOGLE.COM:80



//The application that wishes to communicate with a remote host opens an HTTP connection 
//to a mediator server, which acts as a relay of communications to and from the remote host. 
//The application then communicates with the mediator server using HTTP requests, 
//encapsulating the actual communications within those requests. 
//The mediator server is required to be in a network location with sufficiently unrestricted connectivity.



var http = require('http');
var net = require('net');
var url = require('url');

// Create an HTTP tunneling proxy
var proxy = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  //var socket = req.connection;
  var socket = net.connect('80', 'www.google.com');
  /*
  var socket = net.connect('80', 'www.google.com', function() {
	socket.on('data', function(chunk) {
      res.write(chunk.toString());
    });
	*/
	console.log('socket<---------------------------->' + socket);
	//socket.write('HTTP/1.1 200 Connection Established\r\n' +
    //                'Proxy-agent: Node-Proxy\r\n' +
    //                '\r\n');
					
	socket.write('GET / HTTP/1.1\r\n' +
                'Host: www.google.com:80\r\n' +
                'Connection: close\r\n' +
                 '\r\n');
				 
	socket.on('data', function(chunk) {
		console.log('<---------------------------->' + chunk);
		res.write(chunk);
    });
	
	socket.on('end', function() {
      //proxy.close();
	  console.log('socket end!');
		
		res.write('navin');
		res.end('okay');
    });

});

//Event: 'connect'		function (request, socket, head) { }
//•request is the arguments for the http request, as it is in the request event.
//•socket is the network socket between the server and client.
//•head is an instance of Buffer, the first packet of the tunneling stream, this may be empty.

//Emitted each time a client requests a http CONNECT method. 
//If this event isn't listened for, then clients requesting a CONNECT method will have their connections closed. 

//NOTE THAT IF REQUESTING FROM BROWSER DIRECTLY, THIS EVENT IS NOT FIRED SINCE METHOD == 'GET'.
//ONLY IF THE METHOD IS 'CONNECT', THEN THIS EVENT IS FIRED

proxy.on('connect', function(req, cltSocket, head) {
  // connect to an origin server
  console.log('Inside onConnect()' + req);
  
  var srvUrl = url.parse('http://' + req.url);
  
  //Constructs a new socket object and opens the socket to the given location. 
  //When the socket is established, the 'connect' event will be emitted. 

  var srvSocket = net.connect(srvUrl.port, srvUrl.hostname, function() {

    console.log('TCP Socket created: Host:' + srvUrl.hostname + ' Port:' + srvUrl.port);
	console.log('HEAD:' + head);
	
	cltSocket.write('HTTP/1.1 200 Connection Established\r\n' +
                    'Proxy-agent: Node-Proxy\r\n' +
                    '\r\n');
    srvSocket.write(head);
	
//readable.pipe(destination, [options])
//Connects this readable stream to destination WriteStream. 
//Incoming data on this stream gets written to destination. 
//Properly manages back-pressure so that a slow destination will not be overwhelmed by a fast readable stream. 


	
    srvSocket.pipe(cltSocket);
    cltSocket.pipe(srvSocket);
  });
  
 
 
});

// now that proxy is running
proxy.listen(1337, '127.0.0.1', function() {


 
});

