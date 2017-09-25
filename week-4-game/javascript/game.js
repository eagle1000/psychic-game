//Set a random number for crystals to add up to
//Assign a random number to each crystal button
//Create click event for buttons 
//If user score < computer number, add cumulative user score with each click event
//If user score=computer number, then add one to wins and display win message
//If user score > computer number then add one to losses and display loss message
//Game restars when user wins or loses, with new random values to computer choice and to crystals



// VARIABLES

var cpuValues = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120];
var wins = 0;
var losses = 0;
var crystalValues = [1,2,3,4,5,6,7,8,9,10,11,12];
var score = 0;



var computerChoice;
var buttonChoice1;
var buttonChoice2;
var buttonChoice3;
var buttonChoice4;





// FUNCTIONS
$(document).ready(function() {
	$("#intro").fadeOut(5000);
	$("#cpuNum").html(computerChoice);
	
	$("#button1").on("click", function() {
		$("#button1").attr("data-points", buttonChoice1);
		score+=(buttonChoice1);
		$("#scoreElem").html(score);
	});

	$("#button2").on("click", function() {
		$("#button2").attr("data-points", buttonChoice2);
		score+=(buttonChoice2);
		$("#scoreElem").html(score);	
	});
	
	$("#button3").on("click", function() {
		$("#button3").attr("data-points", buttonChoice3);
		score+=(buttonChoice3);
		$("#scoreElem").html(score);	
	});

	$("#button4").on("click", function() {
		$("#button4").attr("data-points", buttonChoice4);
		score+=(buttonChoice4);
		$("#scoreElem").html(score);	
	});
	
	$(document).on("click", function() {
		
		if (score == computerChoice) {
			wins++;
			$("#winsElem").html(wins); 

			var winMessage = ("You Win!!");
			var winAudio = $("#wand")[0];
			winAudio.play();
			$("#winMessageElem").html(winMessage).fadeOut(3000);
			$("#winMessageElem").show().html(winMessage).fadeOut(3000);
			
			score = 0;
			$("#scoreElem").html(score);

			computerChoice = cpuValues[Math.floor(Math.random()*cpuValues.length)];
			$("#cpuNum").html(computerChoice);

			buttonChoice1 = crystalValues[Math.floor(Math.random()*crystalValues.length)];
			console.log(buttonChoice1);

			buttonChoice2 = crystalValues[Math.floor(Math.random()*crystalValues.length)];
			console.log(buttonChoice2);

			buttonChoice3 = crystalValues[Math.floor(Math.random()*crystalValues.length)];
			console.log(buttonChoice3);

			buttonChoice4 = crystalValues[Math.floor(Math.random()*crystalValues.length)];
			console.log(buttonChoice4);
		};

		if (score > computerChoice) {
			losses++;
			$("#lossElem").html(losses);

			var lossMessage = ("You Lose!!");
			var evilAudio = $("#laugh")[0];
			evilAudio.play();
			$("#lossMessageElem").html(lossMessage).fadeOut(3000);
			$("#lossMessageElem").show().html(lossMessage).fadeOut(3000);
			
			score = 0;
			$("#scoreElem").html(score);

			computerChoice = cpuValues[Math.floor(Math.random()*cpuValues.length)];
			$("#cpuNum").html(computerChoice);

			buttonChoice1 = crystalValues[Math.floor(Math.random()*crystalValues.length)];
			console.log(buttonChoice1);

			buttonChoice2 = crystalValues[Math.floor(Math.random()*crystalValues.length)];
			console.log(buttonChoice2);

			buttonChoice3 = crystalValues[Math.floor(Math.random()*crystalValues.length)];
			console.log(buttonChoice3);

			buttonChoice4 = crystalValues[Math.floor(Math.random()*crystalValues.length)];
			console.log(buttonChoice4);
		};
	});






});
// STARTUP/MAIN LOGIC

var computerChoice = cpuValues[Math.floor(Math.random()*cpuValues.length)];
console.log(computerChoice);


var buttonChoice1 = crystalValues[Math.floor(Math.random()*crystalValues.length)];
console.log(buttonChoice1);

var buttonChoice2 = crystalValues[Math.floor(Math.random()*crystalValues.length)];
console.log(buttonChoice2);

var buttonChoice3 = crystalValues[Math.floor(Math.random()*crystalValues.length)];
console.log(buttonChoice3);

var buttonChoice4 = crystalValues[Math.floor(Math.random()*crystalValues.length)];
console.log(buttonChoice4);

