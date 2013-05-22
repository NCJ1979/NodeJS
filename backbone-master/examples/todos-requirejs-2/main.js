(function () {
    'use strict';    
    
    var config = {}, underscore, bootstrap;
        // config.baseUrl = '../../test/vendor';
        config.paths = {
            'vendor' : '../../test/vendor',
            'root' : '../..',
            'examples' : '..'
        };
    
    underscore = require({ context : 'underscore' });
    bootstrap = require({ context : 'bootstrap', paths : config.paths });
    underscore(['underscore'], function (_) {
        window._ = _; // move underscore to global namespace for backbone 
        bootstrap(['vendor/json2', 'order!vendor/jquery-1.6.4', 'order!root/backbone', 'order!examples/backbone-localstorage', 'order!app.js'], function (a, b, c, d, app) {
            app.init();                
        });
    });    
}());