/*for(var i = 1; i <= 100; i++) {
	if(i % 3 == 0 & i % 5 == 0 ) {
		$('.main').append('<p>FizzBuzz</p>');
		console.log("FizzBuzz");
	} else if(i % 3 == 0) {
		$('.main').append('<p>Fizz</p>');
		console.log("Fizz");
	} else if(i % 5 == 0) {
		$('.main').append('<p>Buzz</p>');
		console.log("Buzz");
	} else {
		$('.main').append('<p></p>').text(i);
		console.log(i);
	}
}*/

var record = [];

for(var i = 1; i <= 100; i++) {
	if(i % 3 == 0 & i % 5 == 0 ) {
		record.push("<p>FizzBuzz</p>");
		console.log("FizzBuzz");
	} else if(i % 3 == 0) {
		record.push("<p>Fizz</p>");
		console.log("Fizz");
	} else if(i % 5 == 0) {
		record.push("<p>Buzz</p>");
		console.log("Buzz");
	} else {
		record.push("<p>" + i + "</p>");
		console.log(i);
	}
}

$('.main').append('<p></p>').html(record);