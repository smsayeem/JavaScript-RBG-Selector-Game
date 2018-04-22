//var colors = ["rgb(255, 0, 0)", "rgb(255, 255, 0)","rgb(0, 255, 0)","rgb(0, 255, 255)",	"rgb(0, 0, 255)","rgb(255, 0, 255)"	]
var numSquare = 6;
var colors = generateRandomColors(numSquare);//--------generate 6 color
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();//colors[3];
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquare = 3;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();//---------------pick a color from 6 colors
	colorDisplay.textContent = pickedColor;//---display picked color in text
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

});
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquare = 6;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<squares.length; i++){
	
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";

	}
});

resetButton.addEventListener("click", function(){
	//alert("Clicked Reset Button");
	//generate all new colors
	colors = generateRandomColors(numSquare);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for( var i =0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});


colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) 
{
	//add initial colors to square
	squares[i].style.backgroundColor = colors[i];

	//add click listners to squares
	squares[i].addEventListener("click", function () 
	{
		//grab color of clicked square
		//compare color to pickedColor
		var clickedColor = this.style.backgroundColor;
		if(clickedColor===pickedColor){
			//alert("Corret");
			messageDisplay.textContent = "Correct!!!";
			resetButton.textContent = "Play gain?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;

		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
			//alert("Wrong color;");
		}
	});
}
function changeColors(color) 
{
	// loop through all square
	for(var i = 0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
	//change each color to match given color
}
function pickColor() {
	//Math.floor(Math.randon()*6+1);
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num)
{
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i< num  ; i++)
	{
		//get random color and push into array
		arr.push(randomColors());

	}
	//return that array
	return arr;
}
function randomColors()
{
	//pick a 'RGB' from 0 - 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

return "rgb("+r+", "+g+", "+b+")";
}