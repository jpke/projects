// max and min (without sort)

function max(numbers) {
 var currentMax = numbers[0];
 for(var i = 1; i < numbers.length; i++) {
   if(numbers[i] > currentMax) {
     currentMax = numbers[i]
   }
 }
 return currentMax;
}


function min(numbers) {
 var currentMin = numbers[0];
 for(var i = 1; i < numbers.length; i++) {
   if(numbers[i] < currentMin) {
     currentMin = numbers[i];
   }
 }
 return currentMin;
}



// tests

function testFunctionWorks(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  }
  else {
    console.log(
      'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input)
    );
    return false;
  }
}


(function runTests() {
  // we'll use the variables in our test cases
  var numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
  var realMin1 = numList1[3];
  var realMax1 = numList1[6];
  var numList2 = [0, 1, 2, 3, 4];
  var realMin2 = numList2[0];
  var realMax2 = numList2[4];
  
  var testResults = [
    testFunctionWorks(max, numList1, realMax1),
    testFunctionWorks(max, numList2, realMax2),
    testFunctionWorks(min, numList1, realMin1),
    testFunctionWorks(min, numList2, realMin2),
  ];
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
})();



// Compute the average

function average(numbers) {
  var total = null;
  for(var i = 0; i < numbers.length; i++){
     total += numbers[i];
  }
  return total/numbers.length;
}


// tests

function testFunctionWorks(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  }
  else {
    console.log(
      'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input)
    );
    return false;
  }
}

(function runTests() {
  var numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var correctAns1 = 5.5;
  var numList2 = [0, -1, 1];
  var correctAns2 = 0;
  
  var testResults = [
    testFunctionWorks(average, numList1, correctAns1),
    testFunctionWorks(average, numList2, correctAns2)
  ];
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.')
})();



// FizzBuzz

function fizzBuzz(countTo) {
  var results = [];
  for(var i = 1; i <= countTo; i++) {
     if(i % 15 == 0) {
       results.push("fizzbuzz");
     }
     else if(i % 3 == 0) {
       results.push("fizz");
     }
     else if(i % 5 == 0) {
       results.push("buzz");
     }
     else results.push(i);
  }
  return results;
};



