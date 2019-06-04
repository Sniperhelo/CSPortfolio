    /* global draw ellipse rect p Processing width height size random stroke background fill triangle delay*/
    var sketch = function(processing) {
        with(processing) {
            size(400, 400);
            background(255);
            // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//






            background(255, 135, 100);
//This code below enables the ablity to create colored triangles,rectangles and ellipses/circles at a random size but same distance apart from eachother
         for (var i = 0; i < width; i += 50) {
                    for (var j = 0; j < height; j += 30) {
                        fill(random(255), random(255), random(255));
                        stroke(random(255), random(255), random(255));
                        triangle(i, j, random(30), random(30));
                        rect(i, j, random(3), random(3));
                        ellipse(i, j, random(3), random(3));

                    }



                }


            draw = function() {
                //Putting it into the draw function just makes it look cool
                for (var i = 0; i < width; i += 50) {
                    for (var j = 0; j < height; j += 30) {
                        fill(random(255), random(255), random(255));
                        stroke(random(255), random(255), random(255));
                        triangle(i, j, random(3), random(3));
                        rect(i, j, random(3), random(3));
                        ellipse(i, j, random(3), random(3));

                    }



                }







            };

            // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
        }
    };
    var p = new Processing(document.getElementById("output-canvas"), sketch);
    