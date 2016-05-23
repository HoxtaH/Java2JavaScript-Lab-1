" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello";
}

function oneToTen(){
	var output = "*** Output ***";
	for(var i = 1; i <= 10; i++){
		output += "<br>" + i;
	}
	display.innerHTML = output;
};

function oddNumbers(){
	var output = "*** Output ***";
	for(var i = 1; i <=20; i += 2){
		output += "<br>" + i;
	}
	display.innerHTML = output;
}

function squareNumbers(){
	var output = "*** Output ***";
	for(var i = 1; i<= 10; i++){
		output += "<br>" + (i * i);
	}
	display.innerHTML = output;
}

function randomNumbers(){
	var output = "*** Output ***";
	for(var i = 1; i <=4; i++){
		output += "<br>" + Math.floor((Math.random() * 100) + 1);
	}
	display.innerHTML = output;
}

function evenNumbersLessThanN(n) {
	var output = "***Output ***";
	for(var i = 2; i < n; i += 2){
		output += "<br>" + i;
	}
	display.innerHTML = output;
}

function powersOf2(n){
	var output = "***Output***";
	for(var i = 2; i <= n; i++){
		output += "<br>" + Math.pow(2, i);
	}
	display.innerHTML = output;
}

function areWeThereYet(){
	var there = false;
	while(there == false){
		var areWeThere = prompt("Are We There Yet?");
		if(areWeThere.toLowerCase() == "yes"){
			display.innerHTML = "GOOD!";
			there = true;
		}else{
			areWeThere;
		}
	}
}

function triangle(){
	var output = "*** Output ***";
	var star = "";
	for(var i = 1; i <= 6; i++){
		star += "*";
		output += "<br>" + star;
	}
	display.innerHTML = output;
}

function tableSquare(){
	var output = "*** Output ***" + "<br>" + "A4x4tablesquare";
	for(var i = 1; i <=4; i++){
		 output +=  "|" + "<br>";
		for(var j = 1; j <= 4; j++ ){
			output += "|" + j * i;
		}
	}
	display.innerHTML = output + "|";
}

function tableSquares(n){
	var output = "*** Output ***" + "<br>" + "A6x6tableSquare";
	for(var i = 1; i <= n; i++){
		output += "|" + "<br>";
		for(var j = 1; j <= n; j++){
			output += "|" + j * i;
		}
	}
	display.innerHTML = output + "|";
}

