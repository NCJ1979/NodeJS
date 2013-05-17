
var oracle = require('./lib/oracle');
console.log('oracle===' + JSON.stringify(oracle));

oracle.connect({ "hostname": "127.0.0.1", "user": "system", "password": "navin" }, function(err, connection) {

	console.log(err);
	console.log(connection);
});

/*
new oracle.Database({
    hostname: '127.0.0.1',
    port: 1521,
    user: 'system',
    password: 'navin',
    database: 'XE'
}).connect(function(error) {
    if (error) {
        return console.log("CONNECTION ERROR: " + error);
    }
    this.query("select * FROM <some.arbitrary.table").execute(function(error, rows) {
        if (error) {
            return console.log('ERROR: ' + error);
        }
        console.log(rows.length + ' ROWS');
    });
});

*/