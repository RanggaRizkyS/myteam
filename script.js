$(document).ready(function(){
	var inProgress = false;
	
	funtion randUpTo(number){
		return Math.floor(Math.random() * number) + 1
	}
	
	$('*').click(function(){
		if(inProgress == true){
			return false;
		}
		
		$('.start').text('0');
		
		var minute = $('.start');
		var ht         = 0;
		
		inProgress = true;
		
		var events = [
		    'have scored!',
		    'shot and missed', 
		    'missed by a mile', 
		    'received a yellow card', 
		    'have had a player sent off', 
		    'have a corner', 
		    'have a free-kick'
		];
		
		var teams = [
		    'England',
		    'The Nethetlands'
		];
		
		$('.fact_card').append('<p class="one_event">And we\'re off!');
		
		var match = setInterval(function(){
			minute.text(parseInt(minute.text()) + 1);
			
			if(parseInt(minute.text()) == 90){
				clearInterval(match);
				
				if(parseInt($('span[data-id="' + teams[0] + '"]').text()) > parseInt($('span[data-id="' + teams[1] + '"]').text())){
					$('.fact_card').append('<p class="one_event">' + teams[0] + ' wins!</p>');
				}
			}
		}, 200);
	});
	
});