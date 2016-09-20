var state = {
  questions: {
    1: ["Tubular reabsorption and tubular secretion differ in that:",
        "Secretion adds material to the filtrate; reabsorption removes materials from the filtrate.",
        "Secretion is a passive process; reabsorption is an active transport process.",
        "Reabsorption tends to increase urine volume; secretion tends to decrease urine volume.",
        "Secretion adds materials to the blood; reabsorption removes materials from the blood."],
    2: ["The two 'currents' used in the countercurrent exchange system are the:",
        "Ascending and descending tubules.",
        "Afferent and efferent arterioles.",
        "Glomerulus and glomerular (Bowman's) capsule.",
        "Proximal and distal tubules."],
    3: ["The countercurrent exchange system:",
        "Facilitates osmosis.",
        "Prevents water reabsorption from the collecting duct.",
        "Concentrates sodium in the renal cortex.",
        "Concentrates chloride in the renal cortex."],
    4: ["The presence of albumin in the urine would indicate probable damage to:",
        "Glomeruli",
        "Renal columns",
        "Collecting tubules",
        "Pyramids"],
    5: ["Renal calculi may be composed of:",
        "Both calcium oxalate and uric acid.",
        "Calcium oxalate",
        "Uric acid",
        "Cholesterol"],
    6: ["Which renal condition usually involves a history of recent infection with group A beta-hemolytic streptococci?",
        "Glomerulonephritis",
        "Pyelonephritis",
        "Chronic renal failure",
        "Nephrosis"],
    7: ["Causes of acute renal failure include:",
        "Stones, strictures and heart failure",
        "Cholecystitis",
        "Stones and strictures in the kidneys or ureters",
        "Heart failure leading to poor renal perfusion"],
    8: ["Chronic kidney disease:",
        "All choices apply",
        "May result from hypertension",
        "Is usually the result of chronic inflammation of the kidney",
        "May be treated with dialysis or transplants"],
    9: ["A patient with their terminal ileum removed would be unable to absorb:",
        "Bile salts",
        "Carbohydrates",
        "Proteins",
        "Iron"],
    10: ["The human adult liver does not:",
        "Produce erythrocytes",
        "Store glycogen",
        "Convert ammonia to urea",
        "Produce blood coagulation proteins"],
  },
  //score
  record: [],
  //index of current question
  index: 1
};

var recordResponse = function(state, score) {
  state.record.push(score);
};

var renderQuestion = function(state, element) {
  var questionHTML = '<li>' + state.questions[state.index][0] + '</li>';
  element.html(questionHTML);
}

var renderAnswers = function(state, element) {
  var answersHTML = state.questions[state.index].slice(1,5).map(function(answer) {
    return '<li>' + answer + '</li>';
  });
  // identify correct answer
  answersHTML[0] = answersHTML[0].replace(/<.*?>/, "<li class='correct'>");
  element.html(answersHTML);
};

function randomizeAnswers() {
  var ul = document.querySelector('.quiz-answers');
  for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
  }
};

function evaluateResponse(responseClass) {
  if(responseClass == "correct") {
    state.record.push(1);
    return true;
  } else {
    state.record.push(0);
    return false;
  }
}






