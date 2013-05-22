(function () {     

	'use strict';         
	console.log('go go gadget main!');           
	
	var config = {}, underscore, bootstrap;         
	
	config.paths = {             
		'vendor' : '../../test/vendor',             
		'root' : '../..',             
		'examples' : '..',
		'myscripts':'./scripts'
	};           
	
	underscore = require({ context : 'underscore' });     
	
	bootstrap = require({ context : 'bootstrap', paths : config.paths });     
	
	underscore(['underscore'], function (_) {         
		window._ = _; // move underscore to global namespace for backbone          
		bootstrap([	'vendor/json2', 
					'order!vendor/jquery-1.6.4', 
					'order!myscripts/backbone',              
					'order!examples/backbone-localstorage', 
					'order!myscripts/todos.js'], function (a, b, c, d, app) 
						{             
							app.init();                         
						});
					});
	}()); 
