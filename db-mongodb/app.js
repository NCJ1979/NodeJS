var Db = require('./node_modules/mongodb').Db,
    Connection = require('./node_modules/mongodb').Connection,
    Server = require('./node_modules/mongodb').Server;

function runQuery (db, myCollection, query, nextFn) {
    // perform the {query} on the collection and invoke the nextFn when done
    db.open(function(err, db) {
		console.log('DB:' + db);
		console.log('Error:' + err);
		db.collection(myCollection, function(err, collection) {
			collection.find(query, function(err, cursor) {
			cursor.toArray(function(err, docs) {
				console.log("Found " + docs.length + " documents");
				var queryResults = [];
				for(var i=0; i<docs.length; i++) {
				queryResults[queryResults.length] = docs[i]; 
				}
				db.close();
				nextFn(queryResults);
			});
			});
		});
    });
}

var doneFn = function(results) {
	data = data.concat(results);
	count--;
	if( count <= 0 ) {
	    var uniqueResults = [];
	    for(var i=0; i<data.length; i++) {
		if( ! uniqueResults[data[i]['_id']] ) {
		    uniqueResults[uniqueResults.length] = data[i];
		    uniqueResults[data[i]['_id']] = true;
		}
	    }
	    nextFn(uniqueResults);
	}
};

	
runQuery(new Db('XE', new Server('127.0.0.1', 1521, {})),
	     ["FMCT_VDR_FORM"],
	     {'VDR_ID':'1'},
	     doneFn);
	
	
	
var databaseUrl = "system:navin@127.0.0.1:1521:XE"; // "username:password@example.com/mydb"
//var databaseUrl = "util:util@10.232.70.235:1521/ntxdvn"; // "username:password@example.com/mydb"
var collections = ["FMCT_VDR_FORM"]

/*
var db = require("mongojs").connect(databaseUrl, collections, {auto_reconnect:true});

console.log(db.FMCT_VDR_FORM);

db.FMCT_VDR_FORM.find({VDR_ID: "1"}, 
	function(err, records) 
	{  
		if( err || !records) 
			console.log("No records found. " + err);  
		else records.forEach( 
			function(record) {    
				console.log(record);  
			} 
		);
	}
);



*/