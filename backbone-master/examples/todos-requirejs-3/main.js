(function () {
    'use strict';    
    
    var config = {}, underscore, bootstrap, cache;
        // config.baseUrl = '../../test/vendor';
        config.paths = {
            'vendor' : '../../test/vendor',
            'root' : '../..',
            'examples' : '..'
        };
    
    cache = require({ context : 'cache', paths : config.paths });
    cache(['order!vendor/jquery-1.6.4', 'order!cache'], function (a, cache) { cache.prime(true); });
    
    underscore = require({ context : 'underscore' });
    bootstrap = require({ context : 'bootstrap', paths : config.paths });        
    underscore(['underscore'], function (_) {
        window._ = _; // move underscore to global namespace for backbone 
        bootstrap(['vendor/json2', 'order!root/backbone', 'order!examples/backbone-localstorage', 'order!app.js'], function (a, b, c, app) {
            app.init();                
        });
    });    
}());