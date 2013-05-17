//DEFINE ONLY THE FUNCTION (WITH DEPENDENCIES)

//MODULE DEFINTION IS RETURNING OBJECT

define(['basicmath'], function(basicmath)
		{
			return {
				circlearea: function(r) {
					return 3.14 * basicmath.square(r);
				},
				
				squarearea: function(l) {
					return basicmath.square(l);
				}
			}
		}
    
);
