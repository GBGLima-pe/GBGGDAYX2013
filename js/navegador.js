$(function(){

	var idpas = 'none';

	if(idpas=='none'){
	navigater('pres');
	}
		
	$('#nav li a').bind('click',function(e){
		var id = $(this).attr('id');
		navigater(id);
		return false;			
	});

	function navigater(id){
		if(id!=idpas){
		$('#'+idpas+'-izquierda').animate({top:'100%'});
		$('#'+idpas+'-derecha').animate({top:'-100%'});
		$('#'+id+'-izquierda').animate({top:'45px'});
		$('#'+id+'-derecha').animate({top:'45px'});
		$('#'+idpas+'-izquierda').animate({top:'-100%'},0);
		$('#'+idpas+'-derecha').animate({top:'100%'},0);
		idpas=id;
		}
	}
});
