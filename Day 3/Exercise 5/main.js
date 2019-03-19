
// -----------------------------
// Exercise 5
// -----------------------------

const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
]
const addElement = function(argElement) {
    const custom = {
        // id... 
        // class... 
        css: {
          "color": argElement.color
        }
      };

    const $curElement =  $("<div>", custom);
    $curElement.html(argElement.name)

    $("body").append($curElement)
}
const iterate = function() {
      fruits.forEach(element => addElement(element))
}

$(document).ready(iterate())
