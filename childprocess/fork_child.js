//The process object is a global object and can be accessed from anywhere. It is an instance of EventEmitter. 


process.on('message', function(m) {
  console.log('CHILD got message:', m);
});

process.send({ foo: 'bar' });