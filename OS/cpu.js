var os = require('os');

var cpus = os.cpus();
console.log('CPU: %j', cpus);

//require('util').log('Timestamped message.' + cpus);



require('util').log('Timestamped message.' + JSON.stringify(cpus, null, 2));

