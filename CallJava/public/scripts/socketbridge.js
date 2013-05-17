var socket;

$(function ()
{
	$('#operand1').keyup(function(e)
		{
			getresult($('#operand1').val(), $('#operand2').val(), $('#operator').val());
		});

	$('#operand2').keyup(function(e)
		{
			getresult($('#operand1').val(), $('#operand2').val(), $('#operator').val());
		});

	$('#operator').change(function(e)
		{
			getresult($('#operand1').val(), $('#operand2').val(), $('#operator').val());
		});
	
	socket = io.connect('http://localhost:3000/');
	
	socket.on('RESULTS', function(data){		//EXECUTING THIS MULTIPLE TIMES, ADD FUNCTIONS TO A LIST, AND CALLED MULTIPLE TIMES
		//alert('RESULTS...' + data.results);
		$('#result').val(data.results);
		//alert(print(socket.socket));
		$('#socketinfo').text(print(socket));
	});
	
});

var print = function(o){
    var str='';

    for(var p in o){
        if(typeof o[p] == 'string'){
            str+= p + ': ' + o[p]+'; </br>';
        }else{
            str+= p + ': { </br>' + (o[p]) + '}';
        }
    }

    return str;
}

function getresult(oper1, oper2, oper)
{
	//http://localhost:3000/calcsocket WILL NOT WORK.  SOCKET CONNECTIONS ONLY SHOULD CONNECT TO HOST:PORT
	//socket = io.connect('http://localhost:3000/');

	// on connection to server, 
	socket.on('connect', function(){
		//alert('connected...');
	});
	//alert(oper1+oper2+oper);
	
	socket.emit('DOMATH', {oper1 : oper1, oper2 : oper2, oper : oper});
}