var oracle = require("oracle");

console.log('Connecting...');
oracle.connect({ "hostname": "localhost", "user": "system", "password": "navin" }, function(err, connection) {

	console.log(err);
	console.log(connection);

	
  // selecting rows
  connection.execute("SELECT * FROM person WHERE name = :1", ['bob smith'], function(err, results) {
    // results will be an array of objects
	console.log(err);
	console.log(results);
  });

  // inserting with return value
  connection.execute(
    "INSERT INTO person (name) VALUES (:1) RETURNING id INTO :2",
    ['joe ferner', new oracle.OutParam()],
    function(err, results) {
      // results.updateCount = 1
      // results.returnParam = the id of the person just inserted
    });

  connection.setAutoCommit(true);

  connection.commit(function(err) {
    // transaction committed
	console.log(err);
  });

  connection.rollback(function(err) {
    // transaction rolledback
	console.log(err);
  });

  connection.close(); // call this when you are done with the connection
});
