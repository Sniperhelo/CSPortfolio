//The Var codeblocks is what is used to define the names of my images

var Dragon = document.getElementById("Dragon");
var MetalLegs = document.getElementById("MetalLegs");
var Display = document.getElementById("display");

//The Event Listeners and the click function allows my images to become clickable and to create text upon click

Dragon.addEventListener("click", function(){
    display.innerHTML = "This is just an image I took and used in my 3D printing class in 8th grade"
    
});

MetalLegs.addEventListener("click", function(){
    display.innerHTML = "Metal Legs is the best operator in Rainbow Six Siege, coming in as a 4 armor and 0 speed operator, his passive allows him to be immune to Frost Traps and is completely immune to Gu Mines aswell, ontop of this, his special ability is to emit a ear deafening sound whenever he walks. The downsides to this operator is that he requires two people to revive him from a downed state and he takes longer to go up a staircase or ladder due to his legs being encased in metal"
    
});