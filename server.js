/*
Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, 
scalable network applications. 

Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, 
perfect for data-intensive real-time applications that run across distributed devices.


BECAUSE OF THE FACT THAT ITS BUILT ON V8, IT IS OPTIMIZED TO RUN ON CHROME
SO A WEBSITE HAVING MORE I/O MAY PERFORM BETTER IN CHROME BECAUSE OF THE WAY IT IS HANDLED.

http://www.sitepoint.com/node-js-is-the-new-black/

FriendFeed: Each user’s feed is updating in real time, all the time. 
	Long polling: Fires off an Ajax request to the server, but unlike normal Ajax request, the server doesn’t respond right away. It just waits, and fires back a response only when it has something new it wants the browser to display.  
	
	This may not scale up since every request is actually a thread on the server side.  Too many threads == more memory, which can bring down the system.
	
	So we need NON-BLOCKING / EVENT DRIVEN IO.
	
NON-BLOCKING IO: non-blocking server as a loop: it just keeps going round and round.  When a request comes in, the loop grabs it, passes it along to some other process (like a database query), sets up a callback, and keeps going round, ready for the next request. It doesn’t just sit there, waiting for the database to come back with the requested info.

If the database query comes back — fine, we’ll deal with that the same way: throw a response back to the client and keep looping around. 

FriendFeed:  Uses non-blocking framework written in Python, called Tornado.

Node.js uses JavaScript — running on Google’s crazy-fast V8 engine.  Reason is that JavaScript is intrinsically event-driven. 
Think about it: when you write JavaScript for the browser, you’re just attaching event handlers and callbacks. That’s the way the language was designed.


	
*/


var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');