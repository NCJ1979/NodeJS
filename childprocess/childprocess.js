//ChildProcess is an EventEmitter. 

//It is possible to stream data through a child's stdin, stdout, and stderr in a fully non-blocking way. 

//The ChildProcess class is not intended to be used directly. Use the spawn() or fork() methods to create a Child Process instance. 

//Child processes always have three streams associated with them. 
//	1. child.stdin, 
//  2. child.stdout
//  3. child.stderr. 
//

//grep changed to cmd (since its windows)
//

//var spawn = require('child_process').spawn, 
//	grep  = spawn('cmd', ['/?']);

var spawn = require('child_process').spawn, 
	grep  = spawn('net', ['send']);

console.log('Spawned child pid: ' + grep.pid);


grep.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});

grep.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

grep.on('close', function (code) {
  console.log('child process exited with code ' + code);
});

grep.stdin.on('data', function (data) {
  console.log('stdin: ' + data);
});

grep.stdin.end();

