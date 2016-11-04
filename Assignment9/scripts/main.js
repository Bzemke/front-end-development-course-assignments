/////// Part One

var name = "Brett Zemke";
document.getElementById("partOne").innerHTML = name;

/////// Part Two

var foo = "This is not an integer";
document.getElementById("partTwo").innerHTML = foo;

/////// Part Three

var partThree = 5;
partThree += 10;
partThree = partThree * 14;
partThree = partThree - 25;
document.getElementById("partThree").innerHTML = partThree;

/////// Part Four

var fName = "Brett";
var lName = "Zemke";
var fullName = (fName + " " + lName);
document.getElementById("partFour").innerHTML = fullName;

/////// Part Five

var myHtml = ""
myHtml += "<h2>Title<h2>";
myHtml += "<p>Lorem ipsum dolor</p>";
myHtml += "<h3>Pellentesque habitant morbi</h3>";
myHtml += "<p>Morbi in sem quis dui placerat ornare. </p>";
document.getElementById("partFive").innerHTML = myHtml;

/////// Part Six

var part6Number =getRandomNumber();
var part6Result = "";
if (part6Number > 50){
  document.getElementById("part6Number").innerHTML = part6Number;
  document.getElementById("part6Result").innerHTML = "Above 50";
}
else{
  document.getElementById("part6Number").innerHTML = part6Number;
  document.getElementById("part6Result").innerHTML = "Below or equal to 50";
}

/////// Part Seven

var part7Number = getRandomNumber();
var part7Result = "";
document.getElementById("part7Number").innerHTML = part7Number;
if (part7Number <25){
  document.getElementById("part7Result").innerHTML = "Below 25";
}
else if (part7Number >= 25 & part7Number <50) {
  document.getElementById("part7Result").innerHTML = "Between 25 and 50";
}
else if (part7Number >= 50 & part7Number < 75) {
  document.getElementById("part7Result").innerHTML = "Between 50 and 75";
}
else {
  document.getElementById("part7Result").innerHTML = "Greater than 75";
}

////////////////////////////////////////////////////////////////
//////Ignore everything below this line////////////////////////

function getRandomNumber() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}
