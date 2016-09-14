// Square Area 
function computeArea(width, height) {
  return width * height;
}

// tests

function testComputeArea() {
  var width = 3;
  var height = 4;
  var expected = 12;
  if (computeArea(width, height) === expected) {
    console.log('SUCCESS: `computeArea` is working');
  }
  else {
    console.log('FAILURE: `computeArea` is not working');
  }
}

testComputeArea();


// Temperature Conversion
function celsToFahr(celsTemp) {
  return (celsTemp * 9/5) + 32 
}

function fahrToCels(fahrTemp) {
  return (fahrTemp -32)*5/9
}

// tests

function testConversion(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` is working');
    return true;
  }
  else {
    console.log('FAILURE: `' + fn.name + '` is not working');
    return false;
  }
}

function testConverters() {
  var cel2FahrInput = 100;
  var cel2FahrExpect = 212;
  var fahr2CelInput = 32;
  var fahr2CelExpect = 0;
  
  if (testConversion(celsToFahr, cel2FahrInput, cel2FahrExpect) &&
     testConversion(fahrToCels, fahr2CelInput, fahr2CelExpect)) {
    console.log('SUCCESS: All tests passing');
  }
  else {
    console.log('FAILURE: Some tests are failing');
  }
}

testConverters();


// Is Divisible
// function isDivisible(divisee, divisor) {
//    if(divisee % divisor == 0) {
//      return true
//    } else return false;
// }

function isDivisible(divisee, divisor) {
   return (divisee % divisor === 0)
}

// tests

function testIsDivisible() {
  if (isDivisible(10, 2) && !isDivisible(11, 2)) {
    console.log('SUCCESS: `isDivisible` is working');
  }
  else {
    console.log('FAILURE: `isDivisible` is not working');
  }
}

testIsDivisible();


