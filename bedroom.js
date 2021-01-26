img = "";
status = "";

function preload()
{
img = loadImage("dog_cat.jpg");
}

function setup()
{
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd'. modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting objects";
}
function modelLoaded()
{
console.log("ModellOADED!");
status = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
if (error) {
console.log(error);
} else {
console.log(results);
}
}
