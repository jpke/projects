// Traffic Lights

function turnOffLights() {
  $('.traffic-light').removeClass('yellow-on red-on-green-on');
}

function turnGreen() {
  turnOffLights();
  $('.green-light').addClass('green-on');
}

function turnYellow() {
  turnOffLights();
  $('.yello-light').addClass('yellow-on');
}

function turnRed() {
  turnOffLights();
  $('.red-light').addClass('red-on');
}

function getActiveLight() {
  return (['red', 'green', 'yellow'])[Math.floor(Math.random() * 3)];
}

function doTrafficLights() {
  var activeLight = getActiveLight();
  // your code will replace this call
  // to `alert
  alert(activeLight);

}

function handleClicks() {
  $('.js-control-lights').click(function() {
    doTrafficLights();
  });
}

$(function() {
  handleClicks();
})



// Error alert

function main() {
 try {doAllTheThings();}
 catch(e) {
   console.error(e);
   reportError(e);
 }
}

function doAllTheThings() {
  throw {
    message: "Everything's ruined",
    name: "FatalException",
    toString: function(){return this.name + ": " + this.message;} 
  }
}

function reportError(e) {
  $('.js-error-report').text("Uh oh, something went wrong! Here's what we know: " + e.message);
}

$(main);