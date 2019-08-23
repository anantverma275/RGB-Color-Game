var squares = document.querySelectorAll(".square");
var buttonRetry = document.querySelector("#retry");
var displayStatus = document.querySelector("#status");
var head = document.querySelector("#colorCode");
var colorCode;
var bar = document.querySelector(".bar");

function setColors(){
	for(var i=0; i<squares.length;i++){
		squares[i].style.background = "rgb(" + Math.random()*256 + ", " + Math.random()*256 + ", " + Math.random()*256 + ")";
	}
}

function getRandomNumber(num){
	return Math.floor( Math.random() * num);
}

setColors();



buttonRetry.addEventListener("click", function(){
	setColors();
	bar.style.background = "#1365a8";
	colorCode = (squares[getRandomNumber(squares.length)].style.background);
	head.textContent = colorCode.toUpperCase();
	if(buttonRetry.textContent == "Play Again")
		buttonRetry.textContent = "New Colors";
});

colorCode = (squares[getRandomNumber(squares.length)].style.background);
head.textContent = colorCode.toUpperCase();

for(var i=0; i<squares.length;i++){
	squares[i].addEventListener("click", function(){
		if(this.style.background==colorCode){
			bar.style.background = colorCode;
			// alert("Correct");
			displayStatus.textContent = "Correct!";
			for(var k = 0; k<squares.length;k++)
				squares[k].style.background = colorCode;
			buttonRetry.textContent = "Play Again";
		}
		else {
			// alert("Incorrect");
			displayStatus.textContent = "Try Again!"
			this.style.background = "#212121";
		}
	});
};