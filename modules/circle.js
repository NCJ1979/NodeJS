var PI = Math.PI;

exports.area = function (r) {
  return PI * r * r;
};

exports.circumference = function (r) {
  return 2 * PI * r;
};


/*
SAME AS BELOW

define(function()
		{
			return {
				area: function(r) {
					return PI * r * r;
				},
				
				circumference: function(r) {
					return 2 * PI * r;
				}
				
			}
		}
    
);

*/