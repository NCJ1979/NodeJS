//DEFINE ONLY THE FUNCTION (THERE ARE NO DEPENDENCIES)

//MODULE DEFINTION IS RETURNING OBJECT

define(function()
		{
			return {
				add: function(var1, var2) {
					return var1 + var2;
				},
				
				subtract: function(var1, var2) {
					return var1 - var2;
				},
				
				square: function(var1) {
					return var1 * var1;
				}
				
			}
		}
    
);


/*
define(function () {
    //Do setup work here

    return {
        color: "black",
        size: "unisize"
    }
});
*/