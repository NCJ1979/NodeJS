;(function () {
    'use strict'; 
    
    var todos = JSON.parse(localStorage.getItem('todos')), count = 0, key;
    
    for (key in todos) {
        if (!todos[key].done)
            count++;
    }
    
    count ? pokki.setIconBadge(count) : pokki.removeIconBadge();
})();
