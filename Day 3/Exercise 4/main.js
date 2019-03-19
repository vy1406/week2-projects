
// -----------------------------
// Exercise 4
// -----------------------------

// old one
const addElement = function (argString) {
    const $elementToAdd = "<div class=cart-item>" + argString + "</div>"
    $("body").append($elementToAdd)
}

// new one
const addElementWithRemove = function(argString) {
    const $curElement = $("<div></div>").text(argString);
  
    // binding an event to created div!
    $curElement.on("click", function() {
        console.log("clicked")
    })

    // console.log($curElement)
    $("body").append($curElement)
}


$("body").on("click", ".item", function () {
    const isInStock = $(this).attr("data-instock")
    if (isInStock == "true"){
        addElementWithRemove(($(this)).text())
    }
})