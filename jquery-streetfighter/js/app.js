$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	}).mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1030px'}, 
			500, 
			function() {
				$('.hadouken').hide();
				$('.hadouken').css(
					{'left': '530px'});
			}
		);
	}).mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

	/*$('.ryu').keydown(function(e) {
		if(e.keyCode == 88) {
			alert("X keydown");
			$('.ryu-still').hide();
			$('.ryu-throwing').hide();
			$('.ryu').append("<div class='ryu-cool'></div>")
				.css({'background-image': 'url("/images/ryu-cool.gif")',
					'display': 'block'});
		};
	});*/

	$(document).keydown(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('<div/>', {
				'class':'ryu-cool',
				'style': 'background-image: url("/images/ryu-cool.gif")',
				'background-repeat': 'no-repeat',
				'width': '659px',
				'height': '494px'
			}).appendTo('.ryu');
	}); /*.keyup(function() {
				$('.ryu-still').hide();
				$('.ryu-ready').show();
				$('.ryu-cool').detach();
			});*/

});

function playHadouken() {
	$('#hadouken-sound')[0].volume=0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
};