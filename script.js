var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColor = document.getElementById("random");



function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", "+ color2.value + ")";
	css.textContent = body.style.background + ";";
};

function getRandomColor(){
	var number = Math.floor(100000 + Math.random() * 900000);
	return "#" + number;
}

function rancol() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
};

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

randomColor.addEventListener("click", rancol);