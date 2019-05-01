var tID; //we will use this variable to clear the setInterval()

function animateScript() {

const pxInterval = 228;
var    position = 241; //start position for the image slicer
var    positiony = 12;
const  interval = 100;

tID = setInterval ( () => {
    document.getElementById("walk").style.backgroundPosition = 
    `-${position}px -${positiony}px`; 
    //we use the ES6 template literal to insert the variable "position"

    if (position < 650)
    { position = position + pxInterval;}
    else if (positiony < 1500)
    { position = 13; positiony = positiony + 261}
    else
    { position = 13; positiony = 14}

    console.log(position)
    console.log(positiony)
}
, interval ); //end of setInterval

} //end of animateScript()

$(function() {
    $(window).scroll(function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = $("#hero").height();
        
        if (y_scroll_pos > scroll_pos_test) {
           $(".navbar-brand").show();
           console.log('hello')
        } else {
           $(".navbar-brand").hide();
        }
    });

    animateScript()
});