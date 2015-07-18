console.log("zach's js is working");

var selectOne = document.getElementById("select-one");
var selectTwo = document.getElementById("select-two");
var selectThree = document.getElementById("select-three");
var selectFour = document.getElementById("select-four");

var showPromptOne = function() {
	$('#prompt-one').delay(300).fadeIn(500);
};

var showPromptTwo = function() {
	$('#prompt-two').delay(300).fadeIn(500);
};

var showPromptThree = function() {
	$('#prompt-three').delay(300).fadeIn(500);
};

var showPromptFour = function() {
	$('#prompt-four').delay(300).fadeIn(500);
};

var fadeInChoices = function(selectnumber) {
	$(selectnumber).fadeIn(500);
};

var answerLog = {};
var coffeeShopData = {
  "cheery": {
    "wifi": {
      "amazing": {
        "solo": "mazarine",
        "with a group": "andytown"
      },
      "not for me": {
        "solo": "village-market",
        "with a group": "matching-half"
      }
    },
    "no wifi": {
      "amazing": {
        "solo": "trouble",
        "with a group": "mill"
      },
      "not for me": {
        "solo": "tiny-warrior",
        "with a group": "front"
      }
    }
  },
  "pensive": {
    "wifi": {
      "amazing": {
        "solo": "reveille",
        "with a group": "andytown"
      },
      "not for me": {
        "solo": "haus",
        "with a group": "flywheel"
      }
    },
    "no wifi": {
      "amazing": {
        "solo": "trouble",
        "with a group": "trouble"
      },
      "not for me": {
        "solo": "hollow",
        "with a group": "pinhole"
      }
    }
  },
  "productive": {
    "wifi": {
      "amazing": {
        "solo": "reveille",
        "with a group": "mazarine"
      },
      "not for me": {
        "solo": "contraband",
        "with a group": "sextant"
      }
    },
    "no wifi": {
      "amazing": {
        "solo": "mill",
        "with a group": "mill"
      },
      "not for me": {
        "solo": "ritual",
        "with a group": "sightglass"
      }
    }
  },
};

$('.start-quiz').click(function(){
	$('.quiz-section').velocity('scroll', { duration: 400, easing: "ease-out" });
});

$('.select-one').click(function(){
	fadeInChoices('.one');
});

$('.choice-one').click(function(){
	var choiceText = $(this).text();
	$('.select-one').html(choiceText);
	$(this).parent().parent().fadeOut(200);
	showPromptTwo();
	answerLog.feeling = choiceText;
});

$('.select-two').click(function(){
	fadeInChoices('.two');
});

$('.choice-two').click(function(){
	var choiceText = $(this).text();
	$('.select-two').html(choiceText);
	$(this).parent().parent().fadeOut(200);
	showPromptThree();
	answerLog.wifi = choiceText;
});

$('.select-three').click(function(){
	fadeInChoices('.three');
});

$('.choice-three').click(function(){
	var choiceText = $(this).text();
	$('.select-three').html(choiceText);
	$(this).parent().parent().fadeOut(200);
	showPromptFour();
	answerLog.toast = choiceText;
});

$('.select-four').click(function(){
	fadeInChoices('.four');
});

$('.choice-four').click(function(){
	var choiceText = $(this).text();
	$('.select-four').html(choiceText);
	$(this).parent().parent().fadeOut(200);
	answerLog.traveling = choiceText;
	$('.paragraph').delay(300).fadeOut(300);
	showFinalAnswer();
});

function cssClassBasedOnAnswers(){
  return coffeeShopData[answerLog.feeling][answerLog.wifi][answerLog.toast][answerLog.traveling];
}

function showFinalAnswer() {
  var cssClass = cssClassBasedOnAnswers();
  $("." + cssClass).show();
};

$('.play-again').click(function(){
	location.reload();
});
