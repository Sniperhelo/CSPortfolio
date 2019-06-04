/* global draw ellipse rect p Processing width height size fill drawplanet  mouseX mouseY mouseClicked box translate rotateY background random mousePressed*/
var sketch = function(processing) {with(processing) {
    size(400, 400);
    // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
    var changecolor = function() {
        //This is the info for what the image is going to be when it is created

        // || <-- Is an or statement
        
        //This code below creates the cross and changes the color of the cross if it makes contact with the middle square or the top and left cross lines
        for (var i = 0; i < width; i += 50) {
                //This creates the changing color formula to change the color of the cross based on the cursors X and Y axis
                if (0 < mouseX && mouseX < 220 && 0 < mouseY && mouseY < 220) {
                    fill(random(255),random(255),random(255));
                }
                //This changes the color to black when not in the X and Y axis that changes it to yellow
                else {
                    fill(0);
                }
                //This is the specific code that is used to create the cross using rectangles
                rect(169, i, 50, 50);
                rect(i, 169, 50, 50);
            }

        //This code is for the white square in the middle which helps see where the cursor meets the required axis to change its color to yellow
        fill(255);
        rect(169, 169, 50, 50);
    };


    //Everything below the draw function is used to create the background and the little ellipse/circle that follows the cursor
    draw = function() {
        //This creates the background, fills the color of the ball and enables the ellipse/circle to follow the cursor
        background(135, 25, 0);
        changecolor();
        fill(255);
        ellipse(mouseX, mouseY, 10, 10);

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//  
    };
}
};
var p = new Processing(document.getElementById("output-canvas"), sketch);
