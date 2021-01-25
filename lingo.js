var guess = document.getElementById("guess");
var submit = document.getElementById("submit");
var woordVeld = document.getElementById("woordVeld");
var random = Math.floor(Math.random() * words.length);
var directWord = words[random];
var newWord1 = directWord.split("");
var row = 0;
var buttons=[]


	for(var i=0; i<=4; i++){
		for(var t=0; t<=4; t++){
			var button = document.createElement("button");
			woordVeld.appendChild(button);
			button.id = "row" + i + "knop" + t;
		var buttonText = document.createTextNode(".");
			button.appendChild(buttonText)
		}
	}


document.getElementById("row0knop0").innerText = newWord1[0];
 submit.onclick = function(){
 	var newWord2 = directWord.split("");
 	var raad = guess.value.split("");
 	console.log(newWord2);
 	console.log(raad);
 	for(var i = 0; i<=4; i++){
			var knop = document.getElementById("row" + row + "knop" + i);
 			knop.innerHTML = raad[i];
		    knop.style.backgroundColor = "red";
 			if (newWord2[i] == raad[i]) {
			knop.style.backgroundColor = "green";
		newWord2[i]= null;
 		}
	}	
 	for(var i = 0; i <= 4; i++){
 		var idOfRowAndButton = document.getElementById("row"+ row + "knop" + i );
		if(newWord2.includes(raad[i]) && idOfRowAndButton.style.backgroundColor != "green"){
 			idOfRowAndButton.style.backgroundColor ="yellow";
 			idOfRowAndButton.style.borderRadius = "100%"
 			var index = newWord2.indexOf(raad[i]);
 			newWord2[index]=null;

 		}
 	}
 	row++
 }