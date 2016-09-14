// Most frequent word

function mostFrequentWord(words) {
  // your code here
  // `words` is an array of strings.
  var wordCount = {};
  for(var i = 0; i <= words.length; i++) {
    if(words[i] in wordCount) {
      wordCount[words[i]]++;
    } else {wordCount[words[i]] = 1;}
  }

  var maxKey = Object.keys(wordCount)[0];
  var maxCount = wordCount[maxKey];

  for(var word in wordCount) {
    if(wordCount[word] > maxCount) {
      maxKey = word;
      maxCount = wordCount[word];
    }
  }
  return maxKey;
}

function getTokens(rawString) {
  // returns an alphabetically sorted list of words, removing punctuation
  // characters
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}


// `getTokens` returns an alphabetically sorted list of words

(function testMostFrequentWord() {
 var spaceOddityText = 'Ground Control to Major Tom \n \
Ground Control to Major Tom\n \
Take your protein pills and put your helmet on\n \
Ground Control to Major Tom (ten, nine, eight, seven, six)\n \
Commencing countdown, engines on (five, four, three)\n \
Check ignition and may God\'s love be with you (two, one, liftoff)\n \
\n \
This is Ground Control to Major Tom\n \
You\'ve really made the grade\n \
And the papers want to know whose shirts you wear\n \
Now it\'s time to leave the capsule if you dare\n \
"This is Major Tom to Ground Control\n \
I\'m stepping through the door\n \
And I\'m floating in a most peculiar way\n \
And the stars look very different today\n \
For here\n \
Am I sitting in a tin can\n \
Far above the world\n \
Planet Earth is blue\n \
And there\'s nothing I can do\n \
\n \
Though I\'m past one hundred thousand miles\n \
I\'m feeling very still\n \
And I think my spaceship knows which way to go\n \
Tell my wife I love her very much she knows\n \
Ground Control to Major Tom\n \
Your circuit\'s dead, there\'s something wrong\n \
Can you hear me, Major Tom?\n \
Can you hear me, Major Tom?\n \
Can you hear me, Major Tom?\n \
Can you "Here am I floating \'round my tin can\n \
Far above the moon\n \
Planet Earth is blue\n \
And there\'s nothing I can do"';
  
 var expected = 'major';
 var actual = mostFrequentWord(getTokens(spaceOddityText));
 if (expected === actual) {
   console.log('SUCCESS: `mostFrequentWord` is working');
 }
 else {
   console.log('FAILURE: `mostFrequentWord` is not working');
 }
})();



// Data merge

function mergeDataStreams(stream1, stream2) {
  // your code here

  for(var i in stream1) {
    for(var j in stream2) {
      if(stream1[i]['id'] == stream2[j]['id']) {
        for(var key in stream2[j]) {
          stream1[i][key] = stream2[j][key];
        }
      }
    }
  }
  console.log(stream1);
  return stream1;
}

// data
var dataSource1 = [
    {
      id: '0',
      firstName: 'Juan',
      lastName: 'Doe',
      age: 32
    },
    {
      id: '1',
      firstName: 'Jane',
      lastName: 'Doe',
      age: 31
    },
    {
      id: '2',
      firstName: 'Janice',
      lastName: 'Doe',
      age: 30
    },
    {
      id: '3',
      firstName: 'Jake',
      lastName: 'Doe',
      age: 29
    },
  ];

var dataSource2 = [
    {
      id: '0',
      occupation: 'architect',
      address: {
        street: '123 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '1',
      occupation: 'architect',
      address: {
        street: '234 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '2',
      occupation: 'architect',
      address: {
        street: '345 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '3',
      occupation: 'architect',
      address: {
        street: '456 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
  ];



// tests 
function testMergeDataStreams(stream1, stream2) {
  var expected = stream1.map(function(item) {
   return _.assign(
     item, stream2.find(function(item2) {return item.id === item2.id;}));
  });
  
  var actual = mergeDataStreams(stream1, stream2);
  
  var passing = actual && expected.map(function(item) {
    return _.isEqual(
      item,
      actual.find(function(_item) {return _item.id === item.id; })
    );
  }).every(function(result) {return result;} );
  
  if (passing) {
    console.log('SUCCESS! mergeDataStreams works');
  }
  
  else {
    console.log('FAILURE! mergeDataStreams not working');
  }
}

testMergeDataStreams(dataSource1, dataSource2);