// Wiseperson generator
function wisePerson(wiseType, whatToSay) {
  return 'A wise ' + wiseType + ' once said: "' +
    whatToSay + '".';
}

// tests

function testWisePerson() {
  var wiseType = 'goat';
  var whatToSay = 'hello world';
  var expected = 'A wise ' + wiseType + ' once said: "' +
      whatToSay + '".';
  var actual = wisePerson(wiseType, whatToSay);
  console.log(actual);
  if (expected === actual) {
    console.log('SUCCESS: `wisePerson` is working');
  }
  else {
    console.log('FAILURE: `wisePerson` is not working');
  } 
}

testWisePerson();

// Shouter
function shouter(whatToShout) {
  return whatToShout.toUpperCase() + "!!!";
}

// tests

function testShouter() {
  var whatToShout = 'fee figh foe fum';
  var expected = 'FEE FIGH FOE FUM!!!';
  if (shouter(whatToShout) === expected) {
    console.log('SUCCESS: `shouter` is working');
  }
  else {
    console.log('FAILURE: `shouter` is not working');
  }
}

testShouter();

// Text normalizer
function textNormalizer(text) {
  return text.toLowerCase().trim()
}

// tests

function testTextNormalizer() {
  var text = "   let's GO SURFING NOW everyone is learning how   ";
  var expected = "let's go surfing now everyone is learning how";
  if (textNormalizer(text) === expected) {
    console.log('SUCCESS: `textNormalizer` is working');
  }
  else {
    console.log('FAILURE: `textNormalizer` is not working');
  }
}

testTextNormalizer();


// Typo corrector
function typoCorrector(sourceText, target, value) {
  var regTarget = RegExp(target, 'g');
  var count = (sourceText.match(regTarget) || []).length;

  return sourceText.replace(regTarget, value);
}

// tests

function testTypoCorrector() {
  var sourceText = 'cats dogs cats dogs';
  var target = 'cats';
  var value = 'dogs';
  var expected = 'dogs dogs dogs dogs';
  if (typoCorrector(sourceText, target, value) === expected) {
    console.log('SUCCESS: `typoCorrector` is working');
  }
  else {
    console.log('FAILURE: `typoCorrector` is not working');
  }
}

testTypoCorrector();
