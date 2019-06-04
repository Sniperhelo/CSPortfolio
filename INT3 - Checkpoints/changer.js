//Creates Variables and Saves DOM Elements
var newBGcolor = document.getElementById("newBGcolor");
var colorChangeButton = document.getElementById("colorChangeButton");
/*Eventlistener
   Changes the background color based on the inputted color name the user has inputted into the box */
colorChangeButton.addEventListener("click", function(){
    document.body.style.backgroundColor = newBGcolor.value;
});

