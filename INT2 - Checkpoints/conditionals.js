/* global draw ellipse rect p processing width height size background mouseX mouseY*/
var sketch = function(processing) {
    with(processing) {
        size(400, 400);
        background(255);
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


        draw = function() {
            background();
            ellipse(mouseX, mouseY, 70, 70);
            //The Code Below Changes The Color Based On The Mouses X and Y Position
            if (mouseX > 200 && mouseY > 200) {
                fill(255, 0, 0);

            }else if(mouseX > 200 && mouseY < 200){
                ellipse(mouseX,mouseY,80,80);
                fill(0,0,255);
                
            }else if(mouseY>200 && mouseX <200){
                fill(0,255,0);
            
            }
            else if(mouseY<200 && mouseX <200) {
                ellipse(mouseX,mouseY,90,90);
            }

        };

        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);