function renderResponse(state, response) {
  if(response) {
    return alert("Correct. Click 'Next' to advance.");
  } else {
    return alert("Incorrect. The correct answer is: " + state.questions[state.index][1]);
  }
};

function renderProgress(state, element) {
  var progress = "<span>Question: " + (state.index) + " of 10</span>";
  element.html(progress);
};

function renderScore(state, element) {
  var score = state.record.reduce((a, b) => a + b, 0);
  if(score == 1) {
    var scoreHTML ="<span>Score: " + score + " question correct</span>";
  } else {
    var scoreHTML = "<span>Score: " + score + " questions correct</span>";
  }
  element.html(scoreHTML);
};

function renderQuiz(state) {
  renderQuestion(state, $('.quiz-question'));
  renderAnswers(state, $('.quiz-answers'));
  randomizeAnswers();
  renderProgress(state, $('.progress'));
  renderScore(state, $('.score'));
}

$('#start').on('click', function(event) {
  event.preventDefault();
  state.index = 1;
  state.record = [];
  $('#next').removeClass('hidden');
  $('#start').addClass('hidden');
  renderQuiz(state);
  $('.quiz').removeClass('hidden');
  $('.finished').addClass('hidden');
});

$('#next').on('click', function(event) {
  event.preventDefault();
  if($('.quiz-answers').get(0).classList.contains('unclicked')) {
    return alert("You must make a selection before continuing.")
  };
  
  if(state.index < 10) {
    state.index++;
    renderQuiz(state);
    $('.quiz-answers').addClass('unclicked');
  } else {
    $('.quiz').addClass('hidden');
    $('.finished').removeClass('hidden');
    $('#start').removeClass('hidden');
    $('#next').addClass('hidden');
  }
});

$('.quiz-answers').on('click', 'li', function(event) {
  event.preventDefault();
  if($('.quiz-answers').get(0).classList.contains('unclicked')) {
    $('.quiz-answers').removeClass('unclicked');
    var response = evaluateResponse($(this).attr('class'));
    renderResponse(state, response);
    renderScore(state, $('.score'));
  } else {
      alert("Selection already made. Click next to advance.");
    }
});