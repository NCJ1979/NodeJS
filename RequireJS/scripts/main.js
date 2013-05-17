//alert('main');
//alert('main');

//CALLING MODULE DEFINED WITH OBJECT
var callfn = require(['shirts'], function(shirts)
	{
		//alert(shirts.size);
	
	}
	);
	
	
//CALLING INDEPENDENT MODULE DEFINED WITH OBJECT (WITH FUNCTIONS)	
var basic = require(['basicmath'], function(basic)

	{
		//alert("Add: 10 + 20 = " + basic.add(10, 20));
		//alert("Square: 10 = " + basic.square(10));
	}

);


//CALLING DEPENDENT MODULE DEFINED WITH OBJECT (WITH FUNCTIONS)	
var g = require(['geometry'], function(g)

	{
		//alert("Circle Area: radius:2 = " + g.circlearea(2));
		//alert("Square Area: Side:3 = " + g.squarearea(3));
	}
);


//CALLING MODULE DEFINED WITH FUNCTION	
require(['geometryv2'], function (gv2) {
    //gv2 is now loaded.
	
	//alert('Circle Area: radius:2 =' + gv2(2));
});

//CALLING DEPENDENT MODULE DEFINED WITH OBJECT (WITH FUNCTIONS)	- WITH ITS OWN DEFINED NAME
var gv3 = require(['geometryv3'], function(gv3)

	{
		//alert("Circle Area: radius:2 = " + gv3.circlearea(2));
		//alert("Square Area: Side:3 = " + gv3.squarearea(3));
	}
);


alert(requirejs.config.shim);
