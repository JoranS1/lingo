var guess = document.getElementById("guess");
var submit = document.getElementById("submit");
var woordVeld = document.getElementById("woordVeld");
var random = Math.floor(Math.random() * words.length);
var directWord = words[random];
var newWord1 = directWord.split("");
var row = 0;
var buttons=[]


	//for(var i=0; i<=4; i++){
		//for(var t=0; t<=4; t++){
			//var button = document.createElement("button");
			//woordVeld.appendChild(button);
			//button.id = "row" + i + "knop" + t;
			
		//}
	//}
	for(var i=0; i < 25;i++){
		var button = document.createElement("button");
		woordVeld.appendChild(button);
	    buttons.push(button);
	    if(i<5){
	    	button.appendChild(document.createTextNode(i%5==0?newWord1[0]:"."));
	    }
	}


 submit.onclick = function(){
 	var newWord2 = directWord.split("");
 	var raad = guess.value.split("");
 	console.log(newWord2);
 	console.log(raad);
 	for(var i = 0; i<=4; i++){
// 			document.getElementById("row" + row + "knop" + i);
 			button.innerHTML = raad[i];
		button.style.backgroundColor = "red";
 			if (newWord2[i] == raad[i]) {
			button.style.backgroundColor = "green";
		newWord2[i]= null;
 		}
	}	
 	for(var i = 0; i <= 4; i++){
		if(newWord2.includes(raad[i])){
 			button.style.backgroundColor ="yellow";
 			var index = newWord2.indexOf(raad[i]);
 			newWord2[index]=null;

 		}
 	}
 	row++
 }