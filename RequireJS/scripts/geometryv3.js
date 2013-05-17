//DEFINE ONLY THE FUNCTION (WITH DEPENDENCIES)

//MODULE DEFINTION IS RETURNING OBJECT

//HERE MODULE NAME IS DEFINED...BUT STILL IT HAS TO BE THE FILE NAME ONLY.
//THIS PRACTISE NOT RECOMMENDED, SINCE IF THEY FILE IS MOVED/RENAMED, THEN MODULE NAME NEEDS TO BE UPDATED

define('geometryv3', ['basicmath'], function(basicmath)
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
