//It is possible to stream data through a child's stdin, stdout, and stderr in a fully non-blocking way. 

//The ChildProcess class is not intended to be used directly. Use the spawn() or fork() methods to create a Child Process instance. 

//Child processes always have three streams associated with them. 
//	1. child.stdin, 
//  2. child.stdout
//  3. child.stderr. 
//

//grep changed to cmd (since its windows)
//

var spawn = require('child_process').spawn, 
	bad  = spawn('bad_command', []);

bad.stderr.setEncoding('utf8');

bad.stderr.on('data', function (data) 
{
	console.log('stderr: ' + data);
	
	if (/^execvp\(\)/.test(data) == true) 
	{
		console.log('Failed to start child process.');
	}

});

//WHY IS THE ORDER OF THE EVENT HANDLERS IMPORTANT??
//IF I GIVE CLOSE FOLLOWED BY ERROR, ONLY CLOSE IS PRINTED.

bad.on('error', function (stream) {
  console.log('Some Error!' + stream.toString());
});


bad.on('close', function (code) {
  console.log('child process exited with code ' + code);
});

var util = require('util');
console.log(util.inspect(bad.listeners('close'))); // [ [Function] ]

console.log(require('util').inspect(bad.listeners('close'), {depth: null})); // [ [Function] ]		DIRECTLY USING require('util');


