/* global draw ellipse rect p Processing width height size fill drawplanet random mouseX mouseY mouseClicked*/
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
//This is the info for what the image is going to be when it is created
function drawplanet(x,y){
    
    fill(random(255),random(255),random(255));
ellipse(x+5,y,15,15);
    fill(random(255),random(255),random(255));
ellipse(x+5,y,45,5);
    
    
    
}
//This enables the image to be created at the mouse whenever the mouse is clicked 
mouseClicked = function(){
    drawplanet(mouseX,mouseY);





};







draw = function() {

    
    
    
    
    
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
