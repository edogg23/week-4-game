$( document ).ready(function() {
    // console.log( "ready!" );
 
 	var gameMin = 19;
	var gameMax = 120;
	var crystalMin = 1;
	var crystalMax = 12;
	var numCrystals = 4;
	var crystalValues = [];
	var redCrystal;
	var blueCrystal;
	var orangeCrystal;
	var greenCrystal;
	var scoreCurrent = 0;
	var targetNumber;
	var seriesWins = 0;
	var seriesLosses = 0;
	var value = 0;


	var active = true;	

	//html elements
	var $targetNumber = $(".target-number");
	var $seriesWins = $(".series-wins-value");
	var $seriesLosses = $(".series-losses-value");
	var $scoreCurrent = $(".score-current-value");
	var $restart = $(".action-restart");
	var $crystals = $(".crystal");


console.log("active true? " + active);



function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function init() {
	targetNumber = getRandomInt(gameMin, gameMax);
	$targetNumber.append(targetNumber);
	scoreCurrent = 0;
	$scoreCurrent.html(scoreCurrent);

	console.log("random #: " + targetNumber);

	for (var i = 0; i < $crystals.length; i++) {
		var random = getRandomInt(crystalMin, crystalMax);
		crystalValues[i] = random;
		// console.log("crystal values: " + random);
	}
	// console.log(crystalValues);
	redCrystal = crystalValues[0];
	blueCrystal = crystalValues[1];
	orangeCrystal = crystalValues[2];
	greenCrystal = crystalValues[3];
	// console.log("red crystal: " + redCrystal);
	// console.log("blue crystal: " + blueCrystal);
	// console.log("orange crystal: " + orangeCrystal);
	// console.log("green crystal: " + greenCrystal);

	//remove all click listeners
	$crystals.off('click');

	//attaach click listeners
	$crystals.on("click", function(event) {  //attaches click handler to every crystal w/o using a for loop
		var elemID = $(this).attr("id");
		console.log($(this).attr('class'));
		if(active) {
			if (elemID === 'crystal-blue') {
				console.log('clicked blue crystal: ' + blueCrystal);
				scoreCurrent += blueCrystal;
				$scoreCurrent.html(scoreCurrent);
				console.log("current score: " + parseInt(scoreCurrent));

				checkScore();
			} 

			if (elemID === 'crystal-red') {
				console.log('clicked red crystal: ' + redCrystal);
				scoreCurrent += redCrystal;
				$scoreCurrent.html(scoreCurrent);
				console.log("current score: " + parseInt(scoreCurrent));

				checkScore();
			
			}
			if (elemID === 'crystal-orange') {
				console.log('clicked orange crystal');
				scoreCurrent += orangeCrystal;
				$scoreCurrent.html(scoreCurrent);
				console.log("current score: " + parseInt(scoreCurrent));

				checkScore();
			} 
			if (elemID === 'crystal-green') {
				console.log('clicked green crystal');
				scoreCurrent += greenCrystal;
				$scoreCurrent.html(scoreCurrent);
				console.log("current score: " + parseInt(scoreCurrent));

				checkScore();
			}

			

		}
	
	}) 


	// $crystals.each(function() {  //  the each function will go thru each of my crystals b'c of class crystals
	// 	var value = crystalValues[$crystals.eq($(this)))];
	// 	console.log("crystal value: " + value);

		
	

	active = true;	
	console.log("active true? " + active);
 }

 function checkScore() {
	$seriesWins;
	$seriesLosses;

	if (active) {
		if (scoreCurrent < targetNumber) {
			return;
		} else if (scoreCurrent === targetNumber) {
			seriesWins++;
			$seriesWins.html(seriesWins);
			active = false;
		} else {
			seriesLosses++;
			$seriesLosses.html(seriesLosses);
			active = false;
		}
	}
	
 };

console.log("losses: " + seriesLosses);
console.log("wins: " + seriesWins);


var actionRestartGame=document.getElementsByClassName("action-restart");

actionRestartGame[0].addEventListener("click", function() {
    init();
    // active = false;
    $targetNumber.html("Number to guess: ");
    $targetNumber.append(targetNumber);
    console.log("target number: " + targetNumber)
    console.log("active? " + active);
});



init();


});


