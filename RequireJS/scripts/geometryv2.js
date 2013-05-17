//DEFINE ONLY THE FUNCTION (WITH DEPENDENCIES)

//MODULE DEFINTION IS RETURNING FUNCTION AND NOT OBJECT

define(['basicmath'], function(basicmath)
		{
			var PI = 3.14;
			return function (r) {
					return PI * basicmath.square(r);
			}
		}
);
