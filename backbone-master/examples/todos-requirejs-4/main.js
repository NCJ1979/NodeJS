(function () {
    'use strict';    
    
    var bootstrap = require({ context : 'bootstrap' });
    bootstrap(['order!mvc', 'order!app'], function (a, app) {
        app.init();                
    });  
}());