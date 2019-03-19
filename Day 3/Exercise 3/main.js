

// -----------------------------
// Exercise 3
// !! THIS WILL RUN IN index2.html !!
// -----------------------------

const createBoxes = function() {
    $("body").append("<div id='box1' class='box'></div>")
    $("body").append("<div id='box2' class='box'></div>")
}

createBoxes()
let switchToBlue = true
const changeColor = function() {
    if ( switchToBlue ){ // switch to blue
        $("#box1").css("background-color", "#8e44ad")
        $("#box2").css("background-color", "blue")
    }
    else{                // switch to red
        $("#box1").css("background-color", "blue")
        $("#box2").css("background-color", "#8e44ad")
    }
    switchToBlue = !switchToBlue
}

$("body").on("mouseover", ".box", changeColor)
