/*find the difference of the largest and smallest elements of a set
solution 1a: find smallest and largest number by a for loop to check each number
*/
function subtractMinMax1(){
	var a = [5, 7, 6, 8, 9, 10, 3, 2, 4];

	var min = a[0];
	var max = a[0];
	for(var i = 1; i < a.length; i++){
		if(a[i] > max) max = a[i];
		if(a[i] < min) min = a[i];	
	}
	document.getElementById("result").innerHTML =  max - min;
	return max - min;
}

//solution 1b: sorts the array and then subtracts the first number from the last
function subtractMinMax2(){
	var numbers = [5, 7, 6, 8, 9, 10, 3, 2, 4];
	numbers.sort(function(a, b){return a-b}); //need to use a comparator or else the sorting doesn't work well
	document.getElementById("result").innerHTML = numbers[numbers.length - 1] - numbers[0];
	return numbers[numbers.length - 1] - numbers[0];
}