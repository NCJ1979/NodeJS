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
		
});

function getresult(oper1, oper2, oper)
{
	//alert(oper1+oper2+oper);
	
	var request = $.ajax(
		{  	url: "/calc",  
			type: "GET",  
			data: {oper1 : oper1, oper2 : oper2, oper : oper},  
			dataType: "text"
		}); 
		
	request.done(function(msg) 
		{  
			//alert( msg + $('#result').val());
			$('#result').val(msg);
			//alert( msg );
		}); 
		
	request.fail(function(jqXHR, textStatus) 
		{  
			alert( "Request failed: " + textStatus + jqXHR.responseText );
		});

}