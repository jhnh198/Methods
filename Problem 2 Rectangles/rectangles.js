/*determine from rectangle dimensions if two rectangles intersect
*/
//function takes two rectangles, determines placement relative to dimensions and returns if they intersect
function rectanglesIntersect(r1, r2){
	//locate highest rectangle to set bounds
	var rectTop = determineTop(r1.y, r2.y) ? r1: r2;
	var rectBottom = determineTop(r1.y, r2.y) ? r2 : r1;
		
	//determine leftmost rectangle
	var checkX = determineLeft(rectTop.x, rectBottom.x) ? rectBottom.x : rectBottom.x + rectBottom.width;
	
	//bottom rect top will determine our intersect y value
	var checkY = rectBottom.y;
	
	//compare x,y to top rect boundaries
	return ((checkX >=rectTop.x && checkX <=(rectTop.x + rectTop.width)) &&
			(checkY >=rectTop.y && checkY <=(rectTop.y + rectTop.height)));
}

//onclick gets input and assigns to rectangles. pass to rectanglesIntersect to resolve
function solveIntersect(){
	//ensure two rectangles are passed to function
	r1 = {
		x: parseInt(document.getElementById("x1").value), 
		y: parseInt(document.getElementById("y1").value), 
		width: parseInt(document.getElementById("width1").value), 
		height: parseInt(document.getElementById("height1").value)
	}
	r2 = {
		x: parseInt(document.getElementById("x2").value), 
		y: parseInt(document.getElementById("y2").value), 
		width: parseInt(document.getElementById("width2").value), 
		height: parseInt(document.getElementById("height2").value)
	}
	document.getElementById("result").innerHTML = rectanglesIntersect(r1, r2);
}

//checker functions to determine x, y positions
function determineLeft(rectTop, rectBottom){
	return rectTop <= rectBottom;
}

function determineTop(r1, r2){
	return r1<= r2;
}