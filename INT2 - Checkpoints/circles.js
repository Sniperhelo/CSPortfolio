/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

fill(255,0,0);
stroke(0,0,0);
strokeWeight(5);
//The code below creates three different circles that together create the shape of saturn using xPos and yPos
var xPos =0;
var yPos =0;
draw = function() {
ellipse(xPos,yPos,30,30);
var weight =2;
ellipse(xPos,yPos,60,10);
var weight =2;
ellipse(xPos,yPos,30,10);


xPos+=20
yPos+=20



};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
