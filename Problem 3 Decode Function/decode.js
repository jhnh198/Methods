/*determine the string from number 667734139064 using the provided hash function
*/
//dagpel = 18098989196
function decode(num){
	var letters =["a", "c", "d", "e", "g", "i", "l", "m", "n", "o", "p", "r", "s", "t", "u", "w"];
	var check = 0;
	var solutionR = "";
	while(num > 7){
		if((num - check) % 37 === 0){
			solutionR += letters[check];
			num -= check;
			num /= 37;
			check = 0;
		} else check++;
	}
	
	var decoded = "";
	for(var i = solutionR.length -1; i >= 0; i--){
		decoded += solutionR.charAt(i);
	}
	
	document.getElementById("result").innerHTML = decoded;
	return decoded;
}

//dagpel = 18098989196
function encode(str){
	var h = 7;
	var letters =["a", "c", "d", "e", "g", "i", "l", "m", "n", "o", "p", "r", "s", "t", "u", "w"];
	for(var i = 0; i < str.length; i++){
		var letter = str[i];
		var index = letters.indexOf(letter);
		h = (h * 37) + index;
	}
	
	document.getElementById("result").innerHTML = h;
	return h;
}