document.getElementById("qui1").addEventListener("click", grabIt);
function grabIt() {
	var checkbox = document.getElementById('qui1').checked;

    alert('checkbox value1: ' + checkbox);

  if (checkbox == true) {
  		document.getElementById("input1").innerHTML = "Pour un voyage en français vous pouvez utiliser notre produit : ";
  		document.getElementById("input2").innerHTML = "Cours intensif";
  }
  if(checkbox == false) {
  	document.getElementById("input1").innerHTML = "Vous pouvez apprendre le français pour voyager et apprécier la culture du pays";
  	document.getElementById("input2").innerHTML = "Et si vous vous inscriviez à un cous de français ?";
  }
  else {
	alert ("choisir une option pour obtenir une réduction")
}

}

document.getElementById("qui2").addEventListener("click", grabIt1);
function grabIt1() {
	var checkbox = document.getElementById('qui2').checked;
  alert('checkbox value2: ' + checkbox);
    if (checkbox == true) {
  		document.getElementById("input1").innerHTML = "Pour un voyage en français vous pouvez utiliser notre produit : ";
  		document.getElementById("input2").innerHTML = "Cours 2";
  }
  if(checkbox == false) {
  	document.getElementById("input1").innerHTML = "Vous pouvez apprendre le français pour voyager et apprécier la culture du pays";
  	document.getElementById("input2").innerHTML = "Et si vous vous inscriviez à un cous de français ?";
  }
  else {
	alert ("choisir une option pour obtenir une réduction")
}
}

document.getElementById("qui3").addEventListener("click", grabIt2);
function grabIt2() {
	var checkbox = document.getElementById('qui3').checked;
  alert('checkbox value3: ' + checkbox);
    if (checkbox == true) {
  		document.getElementById("input1").innerHTML = "Pour un voyage en français vous pouvez utiliser notre produit : ";
  		document.getElementById("input2").innerHTML = "Séjour";
  }
  if(checkbox == false) {
  	document.getElementById("input1").innerHTML = "Vous pouvez apprendre le français pour voyager et apprécier la culture du pays";
  	document.getElementById("input2").innerHTML = "Et si vous vous inscriviez à un cous de français ?";
  }
  else {
	alert ("choisir une option pour obtenir une réduction")
}
}

document.getElementById("qui4").addEventListener("click", grabIt3);
function grabIt3() {
	var checkbox = document.getElementById('qui4').checked;
  alert('checkbox value4: ' + checkbox);
    if (checkbox == true) {
  		document.getElementById("input1").innerHTML = "Pour un voyage en français vous pouvez utiliser notre produit : ";
  		document.getElementById("input2").innerHTML = "Cinéma";
  }
  if(checkbox == false) {
  	document.getElementById("input1").innerHTML = "Vous pouvez apprendre le français pour voyager et apprécier la culture du pays";
  	document.getElementById("input2").innerHTML = "Et si vous vous inscriviez à un cous de français ?";
  }
  else {
	alert ("choisir une option pour obtenir une réduction")
}
}

