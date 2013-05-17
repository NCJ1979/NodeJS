var cursor = db.climatedata.find();

/*
cdata.forEach(function(mydoc)
	{
		print('Record#');
		print('datetime:' + mydoc.datetime);
		print('pressure:' + mydoc.pressure);
		print('rainfall:' + mydoc.rainfall);
		print('####################################');
	}
);
*/

print('Total Record#' + cursor.count());

print(db.getCollectionNames());

/////////////////////////////////////////////////
//MAP REDUCE
/////////////////////////////////////////////////
//FOR THE GIVEN PRESSURE, WHAT IS THE TOTAL TEMPERATURE

var mapFunction = function() {
						//print('Emit# pressure:' + this.pressure + ' temp:' + this.temperature);
                       emit(this.pressure, this.temperature);
                   };
				   
var reduceFunction = function(keyCustId, valuesPrices) {
						 print('hi');				//WILL NOT PRINT, PROBABLY THE OUT STREAM IS OUT OF SCOPE
                          //return '12345';
						  return Array.sum(valuesPrices);
                      };

//var map_reduce_example = new Object();					  

//RUN ON THE ENTIRE COLLECTION		
/*			  
db.climatedata.mapReduce(
						mapFunction,
						reduceFunction,
						{ 
							out: "map_reduce_example3", 
							//out: {inline: 1}, 
							verbose: true
						}
					);
*/

//RUN ON A SUBSET OF THE COLLECTION
/*
db.climatedata.mapReduce(
						mapFunction,
						reduceFunction,
						{ 
							out: "map_reduce_example3", 
							//out: {inline: 1}, 
							verbose: true,
							query: {
									winddirection:244
								}
						}
					);
*/

//RUN ON A SUBSET OF THE COLLECTION [MORE CONDITIONS]
/*
db.climatedata.mapReduce(
						mapFunction,
						reduceFunction,
						{ 
							out: "map_reduce_example3", 
							//out: {inline: 1}, 
							verbose: true,
							query: {
									winddirection:{$gt:350}
								}
						}
					);
*/					

//RUN ON A SUBSET OF THE COLLECTION [MORE CONDITIONS] WITH FINALIZE
var finalizeFn = function(key, reduceValue)
	{
		return Math.round(reduceValue);
	};
/*
db.climatedata.mapReduce(
						mapFunction,
						reduceFunction,
						{ 
							out: "map_reduce_example3", 
							//out: {inline: 1}, 
							verbose: true,
							query: {
									winddirection:{$gt:350}
								},
							finalize: finalizeFn
						}
					);					
*/

//ACTIONS ON THE OUTPUT COLLECTIONS					
db.climatedata.mapReduce(
						mapFunction,
						reduceFunction,
						{ 
							out: {
									//merge:"map_reduce_example3"			//MERGE THE COLLECTIONS, OVERWRITES EXISTING KEYS
									//replace:"map_reduce_example3"			//JUST REPLACE WITH NEW COLLECTION
									reduce:"map_reduce_example3"			//APPLY REDUCE IF SAME KEYS ALREADY EXISTS
								}, 
							//out: {inline: 1}, 
							verbose: true,
							query: {
									winddirection:{$gt:350}
								},
							finalize: finalizeFn
						}
					);	

					
print(db.map_reduce_example3.find().count());
db.map_reduce_example3.find().forEach(function(mydoc)
	{
		print('Record#' + JSON.stringify(mydoc));
		print('####################################');
	}
);

					
