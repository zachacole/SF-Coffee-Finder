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

var answerLog = [
]

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

function showFinalAnswer() {
	if(answerLog.feeling === "cheery" &&
	answerLog.wifi === "wifi" &&
	answerLog.toast === "amazing" &&
	answerLog.traveling === "solo") {
		$('.mazarine').show();
	} else if(answerLog.feeling === "cheery" &&
	answerLog.wifi === "wifi" &&
	answerLog.toast === "amazing" &&
	answerLog.traveling === "with a group") {
		$('.andytown').show();
	} else if(answerLog.feeling === "pensive" &&
	answerLog.wifi === "wifi" &&
	answerLog.toast === "amazing" &&
	answerLog.traveling === "solo") {
		$('.reveille').show();
	} else if(answerLog.feeling === "pensive" &&
	answerLog.wifi === "wifi" &&
	answerLog.toast === "amazing" &&
	answerLog.traveling === "with a group") {
		$('.andytown').show();
	} else if(answerLog.feeling === "productive" &&
	answerLog.wifi === "wifi" &&
	answerLog.toast === "amazing" &&
	answerLog.traveling === "solo") {
		$('.reveille').show();
	} else if(answerLog.feeling === "productive" &&
	answerLog.wifi === "wifi" &&
	answerLog.toast === "amazing" &&
	answerLog.traveling === "with a group") {
		$('.mazarine').show();
	} else if(answerLog.feeling === "cheery" &&
	answerLog.wifi === "wifi" &&
	answerLog.toast === "not for me" &&
	answerLog.traveling === "solo") {
		$('.village-market').show();
	} else if(answerLog.feeling === "cheery" &&
	answerLog.wifi === "wifi" &&
	answerLog.toast === "not for me" &&
	answerLog.traveling === "with a group") {
		$('.matching-half').show();
	} else if(answerLog.feeling === "pensive" &&
	answerLog.wifi === "wifi" &&
	answerLog.toast === "not for me" &&
	answerLog.traveling === "solo") {
		$('.haus').show();
	} else if(answerLog.feeling === "pensive" &&
	answerLog.wifi === "wifi" &&
	answerLog.toast === "not for me" &&
	answerLog.traveling === "with a group") {
		$('.flywheel').show();
	} else if(answerLog.feeling === "productive" &&
	answerLog.wifi === "wifi" &&
	answerLog.toast === "not for me" &&
	answerLog.traveling === "solo") {
		$('.contraband').show();
	} else if(answerLog.feeling === "productive" &&
	answerLog.wifi === "wifi" &&
	answerLog.toast === "not for me" &&
	answerLog.traveling === "with a group") {
		$('.sextant').show();
	} else if(answerLog.feeling === "cheery" &&
	answerLog.wifi === "no wifi" &&
	answerLog.toast === "amazing" &&
	answerLog.traveling === "solo") {
		$('.trouble').show();
	} else if(answerLog.feeling === "cheery" &&
	answerLog.wifi === "no wifi" &&
	answerLog.toast === "amazing" &&
	answerLog.traveling === "with a group") {
		$('.mill').show();
	} else if(answerLog.feeling === "pensive" &&
	answerLog.wifi === "no wifi" &&
	answerLog.toast === "amazing" &&
	answerLog.traveling === "solo") {
		$('.trouble').show();
	} else if(answerLog.feeling === "pensive" &&
	answerLog.wifi === "no wifi" &&
	answerLog.toast === "amazing" &&
	answerLog.traveling === "with a group") {
		$('.trouble').show();
	} else if(answerLog.feeling === "productive" &&
	answerLog.wifi === "no wifi" &&
	answerLog.toast === "amazing" &&
	answerLog.traveling === "solo") {
		$('.mill').show();
	} else if(answerLog.feeling === "productive" &&
	answerLog.wifi === "no wifi" &&
	answerLog.toast === "amazing" &&
	answerLog.traveling === "with a group") {
		$('.mill').show();
	} else if(answerLog.feeling === "cheery" &&
	answerLog.wifi === "no wifi" &&
	answerLog.toast === "not for me" &&
	answerLog.traveling === "solo") {
		$('.tiny-warrior').show();
	} else if(answerLog.feeling === "cheery" &&
	answerLog.wifi === "no wifi" &&
	answerLog.toast === "not for me" &&
	answerLog.traveling === "with a group") {
		$('.front').show();
	} else if(answerLog.feeling === "pensive" &&
	answerLog.wifi === "no wifi" &&
	answerLog.toast === "not for me" &&
	answerLog.traveling === "solo") {
		$('.hollow').show();
	} else if(answerLog.feeling === "pensive" &&
	answerLog.wifi === "no wifi" &&
	answerLog.toast === "not for me" &&
	answerLog.traveling === "with a group") {
		$('.pinhole').show();
	} else if(answerLog.feeling === "productive" &&
	answerLog.wifi === "no wifi" &&
	answerLog.toast === "not for me" &&
	answerLog.traveling === "solo") {
		$('.ritual').show();
	} else if(answerLog.feeling === "productive" &&
	answerLog.wifi === "no wifi" &&
	answerLog.toast === "not for me" &&
	answerLog.traveling === "with a group") {
		$('.sightglass').show();
	}
};

$('.play-again').click(function(){
	location.reload();
});
