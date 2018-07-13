
function doIt(){
var element1 = document.getElementById("email").value
var element2 = document.getElementById("password").value
var element4 = document.getElementById("thing5").value
var element5 = document.getElementById("thing6").value
var element6 = document.getElementById("password").value
var element7 = document.getElementById("password").value
var element8 = document.getElementById("password").value
var element9 = document.getElementById("password").value

if (element4 == "on") {
	var discours = "Monsieur devriez pour votre projet de langue suivre le cours XX"
	var total = discours + " " + element1 +" "+element2 + " " + element4 +  "  " +element5

	alert(total);
	document.getElementById("input1").innerHTML = element1
document.getElementById("input2").innerHTML = element2
}

else {
	return false
}

if (element5 == "on") {
	var discours = "Madame vous devriez pour votre projet de langue suivre le cours XX"
	var total = discours + " " + element1 +" "+element2 + " " + element4 +  "  " +element5

	alert(total);
	document.getElementById("input1").innerHTML = element1
document.getElementById("input2").innerHTML = element2
}

else {
	return false
}





}