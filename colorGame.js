var squares = document.querySelectorAll(".square");
var buttonRetry = document.querySelector("#retry");
var displayStatus = document.querySelector("#status");
var head = document.querySelector("#colorCode");
var colorCode;
var bar = document.querySelector(".bar");
var n=6;

function setColors(n){
	for(var i=0; i<n;i++){
		squares[i].style.backgroundColor = "rgb(" + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ", " + Math.floor(Math.random()*256) + ")";
	}
}

function getRandomNumber(num){
	return Math.floor( Math.random() * num);
}

function clearTheRest(n){
	for(var i=n;i<6;i++)
		squares[i].style.backgroundColor = "#212121";
}

function resetThings(){
	// if(easyButton.classList.contains("selected"))
		// n=3;
	// else
		// n=6;
	setColors(n);
	clearTheRest(n);
	bar.style.background = "#1365a8";
	colorCode = (squares[getRandomNumber(n)].style.backgroundColor);
	head.textContent = colorCode.toUpperCase();
	displayStatus.textContent = "";
	if(buttonRetry.textContent == "Play Again")
		buttonRetry.textContent = "NEW COLORS";
}

setColors(n);

buttonRetry.addEventListener("click", resetThings);

colorCode = (squares[getRandomNumber(squares.length)].style.backgroundColor);
head.textContent = colorCode.toUpperCase();


for(var i=0; i<squares.length;i++){
	squares[i].addEventListener("click", function(){
		if(this.style.backgroundColor==colorCode){
			bar.style.backgroundColor = colorCode;
			displayStatus.textContent = "Correct!";
			for(var k = 0; k<n;k++)
				squares[k].style.backgroundColor = colorCode;
			buttonRetry.textContent = "Play Again";
		}
		else {
			displayStatus.textContent = "Try Again!";
			this.style.backgroundColor = "#212121";
		}
	});
};

var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
easyButton.addEventListener("click", function(){
	n=3;
	resetThings();
	clearTheRest(n);
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
});

hardButton.addEventListener("click", function(){
	n=6
	resetThings();
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
})

easyButton.addEventListener("mouseover", function(){
		this.classList.add("white-text");
});

easyButton.addEventListener("mouseout", function(){
		this.classList.remove("white-text");
});

hardButton.addEventListener("mouseover", function(){
		this.classList.add("white-text");
});

hardButton.addEventListener("mouseout", function(){
		this.classList.remove("white-text");
});

buttonRetry.addEventListener("mouseover", function(){
		this.classList.add("white-text");
});

buttonRetry.addEventListener("mouseout", function(){
		this.classList.remove("white-text");
});