var cmd = require('child_process').spawn('java', ['MyMain']);

cmd.stdout.on('data', function (data) {
  console.log('stdout: ' + data); // This will print string returned by Main class.
});


/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
  , fs = require('fs');
  
//var app = express()

//Socket.IO's .listen() method takes an http.Server instance as an argument. 
//As of 3.x, the return value of express() is not an http.Server instance. 
//(See the Application function section above.) To get Socket.IO working with Express 3.x, 
//make sure you manually create and pass your http.Server instance to Socket.IO's .listen() method.

var app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);

server.listen(3000);


function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))		//EXPECTED TO HANDLE STATIC
//app.use(express.static('./node_modules'))		//EXPECTED TO HANDLE STATIC
//app.use(app.router);

/*
app.get('/socket.io/socket.io.js', function (req, res) {

		console.log('Inside socket.io.js...');
		res.end(fs.readFileSync(__dirname + req.url.substring(0)));
	
	}
);
*/

app.get('/*', function (req, res) {
  
  //res.end('Hi there!')
  var endIndex = req.url.indexOf('?') == -1 ? req.url.length : req.url.indexOf('?');
  var resource = req.url.substring(1, endIndex);
  console.log('Requested:' + resource);
  console.log('Param oper1:' + req.param('oper1'));
  console.log('Param oper2:' + req.param('oper2'));
  console.log('Param oper:' + req.param('oper'));
  
  //HANDLES AJAX CALLS TO REPOND ONLY TEXT (NO HTML)
  if (req.param('oper1') != null)
  {
	console.log('Compute...');
    var cmd = require('child_process').spawn('java', ['MyMain', req.param('oper1'), req.param('oper2'), req.param('oper')]);

	cmd.stdout.on('data', function (data) {
		console.log('stdout: ' + data); // This will print string returned by Main class.
		res.end(data);
	});

	cmd.stderr.on('data', function (data) {
		console.log('stderr: ' + data); // This will print string returned by Main class.
		res.end('{error:' + data + '}');
	});	
  }
  else
  {//SERVER HTML
	  
	  if (resource == '')
	  {
		resource = 'index';
	  }
	  
	  res.render(resource,
			{ title : 'Navin Home', pretty: true }
		)
   }
  
})

//app.listen(3000)

//listen to 

//var io = require('socket.io').listen(app);

//PLANNING TO USE TO HANDLE SOCKET CONNECTIONS FROM CLIENT
io.sockets.on('connection', function (socket) {

	console.log('Inside connection...');
	
	socket.on('DOMATH', function (data) {
		console.log('Doing math...');
		console.log(data);
		
		var cmd = require('child_process').spawn('java', ['MyMain', data.oper1, data.oper2, data.oper]);
		cmd.stdout.on('data', function (output) {
			console.log('stdout: ' + output); // This will print string returned by Main class.
			//var trythis = '\'' + output + '\'';
			socket.emit('RESULTS', {results:new String(output)});	//SEND THE RESULTS BACK TO CLIENT
		});
		
	});
	
});

