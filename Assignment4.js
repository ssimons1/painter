var body = document.getElementsByTagName('body')[0];
var container = document.createElement('div');
var myCanvas = document.createElement('canvas');
var color = "black";


body.appendChild(container);
container.appendChild(myCanvas);



var sideDiv = document.createElement('div');
container.appendChild(sideDiv);
sideDiv.style.display = "inline-block";

myCanvas.height = "500";
myCanvas.width = "500";
myCanvas.style.border = "2px solid black";
myCanvas.style.backgroundColor = "lightgrey";

var clearButton = document.createElement('button');

var heightLabel = document.createElement('label');
var heightInput = document.createElement('input');
var widthLabel = document.createElement('label');
var widthInput = document.createElement('input');
var br = document.createElement('br');
var br2 = document.createElement('br');
var br3 = document.createElement('br');
var br4 = document.createElement('br');
var selectHeightWidth = document.createElement('button');

Object.assign(selectHeightWidth.style, {height:"24px", width:"100px", marginLeft:"64px", marginBottom:"70px"},
selectHeightWidth.innerHTML = "Select");


sideDiv.appendChild(heightLabel);
sideDiv.appendChild(heightInput);
sideDiv.appendChild(br);
sideDiv.appendChild(widthLabel);
sideDiv.appendChild(widthInput);
sideDiv.appendChild(br2);
sideDiv.appendChild(br4);
sideDiv.appendChild(selectHeightWidth);
sideDiv.appendChild(br3);
sideDiv.appendChild(clearButton);
Object.assign(clearButton.style,
{height:"45px", width:"50px", border:"2px solid black", boxShadow:"inset 2px 2px 10px black", position:"relative", bottom:"20px"},
clearButton.innerHTML = "Clear");


Object.assign(heightInput.style, {height:"20px", width:"100px", marginLeft:"5px"});
Object.assign(widthInput.style, {height:"20px", width:"100px", marginLeft:"10px"});

heightLabel.setAttribute('for', 'heightInput');
widthLabel.setAttribute('for', 'widthInput');
heightLabel.innerHTML = "Height of Canvas:";
widthLabel.innerHTML = "Width of Canvas:";

heightInput.setAttribute('type', 'number');
heightInput.setAttribute('id', 'heightInput');
widthInput.setAttribute('type', 'number');
widthInput.setAttribute('id', 'widthInput');


Object.assign(container.style, {marginTop:"20px", marginLeft:"20px"})
Object.assign(sideDiv.style, {marginLeft:"20px"})



function resetHeightWidth () {
	var userHeightInput = heightInput.value;
	var userWidthInput = widthInput.value;
	myCanvas.height = userHeightInput;
	myCanvas.width = userWidthInput;
}

selectHeightWidth.addEventListener('click', resetHeightWidth);


var ctx = myCanvas.getContext("2d");

clearButton.addEventListener('click', function(){
	ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
});

var buttonDiv = document.createElement('div');
container.appendChild(buttonDiv);

function paint (click) {
	var cursorX = click.layerX;
	var cursorY = click.layerY;
	
	if (click.buttons !== 1) return;
	console.log(click)
	ctx.fillStyle=color;
	ctx.fillRect(cursorX,cursorY,20,20);	
}

function changeColour() {
	color = this.style.backgroundColor;
}

myCanvas.addEventListener('mousemove', paint);

var colors = ["black","blue","red","yellow","green","orange","pink","purple","brown","lightgrey"];

for (var i = 0; i<colors.length; i++) {
	var button = document.createElement('button');
	
	Object.assign(button.style,
	{marginLeft:"1px", backgroundColor:colors[i], border:"4px solid black", height:"45px", width:"50px", marginRight:"5px", boxShadow:"inset 2px 2px 10px black", verticalAlign:"top"});

	if (colors[i] == "lightgrey") {
		Object.assign(button.style,
		{marginLeft:"20px", backgroundImage:"url('http://stationeryworld.com/3351/staedtler-luna-eraser-526-l40.jpg')", backgroundSize:"cover", backgroundColor:"none", border:"2px solid black"});
	}
	
	buttonDiv.appendChild(button);
	
	button.addEventListener('click', changeColour);	
}