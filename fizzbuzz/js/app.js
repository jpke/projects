
// solution for 3.1.9
// for(var i = 1; i <= 100; i++) {
// 	if(i % 3 == 0 & i % 5 == 0 ) {
// 		$('.main').append('<p>FizzBuzz</p>');
// 		console.log("FizzBuzz");
// 	} else if(i % 3 == 0) {
// 		$('.main').append('<p>Fizz</p>');
// 		console.log("Fizz");
// 	} else if(i % 5 == 0) {
// 		$('.main').append('<p>Buzz</p>');
// 		console.log("Buzz");
// 	} else {
// 		$('.main').append('<p>' + i + '</p>');
// 		console.log(i);
// 	}
// }

$(document).ready(function() {

	$('#fizzbuzz-input-value').submit(function(event) {
		event.preventDefault();

		//console.log(+$("#input-value-entry").val());
		// console.log(typeof(+$("#input-value-entry").val()));

		// Can use 'this' instead
		// console.log(+$(this).val());
		// console.log(typeof(+$(this).val()));

		//removes prior results, if any
		$('.main').find("p").remove();

			// why can 'this' not be used here?
		if(!( parseInt(+$("#input-value-entry").val()) ) ||
				+$('#input-value-entry').val() != Math.floor(+$('#input-value-entry').val()) ) {
				// or could have used
				//+$("#input-value-entry").val() % 1 != 0 ) {

			return alert("Please enter a whole number.");

		} else {

			for(var i = 1; i <= +$("#input-value-entry").val(); i++) {
				if(i % 3 == 0 & i % 5 == 0 ) {
					$('.main').append('<p>FizzBuzz</p>');
					//console.log("FizzBuzz");
				} else if(i % 3 == 0) {
					$('.main').append('<p>Fizz</p>');
					//console.log("Fizz");
				} else if(i % 5 == 0) {
					$('.main').append('<p>Buzz</p>');
					//console.log("Buzz");
				} else {
					$('.main').append('<p>' + i + '</p>');
					//console.log(i);
				}
			}
		};

	});

});



// for(var i = 1; i <= 100; i++) {
// 	if(i % 3 == 0 & i % 5 == 0 ) {
// 		document.write('<p>FizzBuzz</p>');
// 		console.log("FizzBuzz");
// 	} else if(i % 3 == 0) {
// 		document.write('<p>Fizz</p>');
// 		console.log("Fizz");
// 	} else if(i % 5 == 0) {
// 		document.write('<p>Buzz</p>');
// 		console.log("Buzz");
// 	} else {
// 		document.write('<p>' + i + '</p>');
// 		console.log(i);
// 	}
// }

//solved through appending array
//var record = [];

// for(var i = 1; i <= 100; i++) {
// 	if(i % 3 == 0 & i % 5 == 0 ) {
// 		record.push("<p>FizzBuzz</p>");
// 		console.log("FizzBuzz");
// 	} else if(i % 3 == 0) {
// 		record.push("<p>Fizz</p>");
// 		console.log("Fizz");
// 	} else if(i % 5 == 0) {
// 		record.push("<p>Buzz</p>");
// 		console.log("Buzz");
// 	} else {
// 		record.push("<p>" + i + "</p>");
// 		console.log(i);
// 	}
// }

// $('.main').append('<p></p>').html(record);