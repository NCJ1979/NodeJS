

//var databaseUrl = "system:navin@127.0.0.1:1521:XE"; // "username:password@example.com/mydb"
//var databaseUrl = "util:util@10.232.70.235:1521/ntxdvn"; // "username:password@example.com/mydb"
var databaseUrl = 'mongodb://system:navin@localhost/test';

var collections = ["navinproducts"]

//var db = require("mongojs").connect(databaseUrl, collections, {auto_reconnect:true});
var db = require("mongojs").connect(databaseUrl, collections);

/*
db.open(function(err, status)
{
	console.log('Onopen:' + err + '==' + JSON.stringify(err));
});
*/

console.log(db.version);

db.navinproducts.find({item: "candy"}, 
	function(err, records) 
	{  
		console.log("Inside....." + err + !records);  
		
		if( err || !records) 
			console.log("No records found. " + err);  
		else records.forEach( 
			function(record) {    
				console.log(record);  
			} 
		);
	}
);



