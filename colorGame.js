var squares = document.querySelectorAll(".square");
var buttonRetry = document.querySelector("#retry");
var displayStatus = document.querySelector("#status");
var head = document.querySelector("#colorCode");
var colorCode;
var bar = document.querySelector(".bar");

function setColors(){
	for(var i=0; i<squares.length;i++){
		squares[i].style.backgroundColor = "rgb(" + Math.random()*256 + ", " + Math.random()*256 + ", " + Math.random()*256 + ")";
	}
}

function getRandomNumber(num){
	return Math.floor( Math.random() * num);
}

setColors();



buttonRetry.addEventListener("click", function(){
	setColors();
	bar.style.backgroundColor = "#1365a8";
	colorCode = (squares[getRandomNumber(squares.length)].style.backgroundColor);
	displayStatus.textContent = "";
	head.textContent = colorCode.toUpperCase();
	if(buttonRetry.textContent == "Play Again")
		buttonRetry.textContent = "New Colors";
});

colorCode = (squares[getRandomNumber(squares.length)].style.backgroundColor);
head.textContent = colorCode.toUpperCase();

for(var i=0; i<squares.length;i++){
	squares[i].addEventListener("click", function(){
		if(this.style.backgroundColor==colorCode){
			bar.style.backgroundColor = colorCode;
			// alert("Correct");
			displayStatus.textContent = "Correct!";
			for(var k = 0; k<squares.length;k++)
				squares[k].style.backgroundColor = colorCode;
			buttonRetry.textContent = "Play Again";
		}
		else {
			// alert("Incorrect");
			displayStatus.textContent = "Try Again!"
			this.style.backgroundColor = "#212121";
		}
	});
};