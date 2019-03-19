

// -----------------------------
// Exercise 1
// -----------------------------

const $myList = $("#list")
const $btn = $("#addName")
const $input_text = $("#input_text")

const createNewListItem = function () {
    const $curListItem = "<li>" + $input_text.val() + "</li>"

    $myList.append($curListItem)

    //dynamically adding listiner to the element each time its created
    $("body").on("click", "li", function () {
        console.log("adding dynamically a listiner")
        $(this).remove()
    })
}
$btn.on("click", function () {
    createNewListItem()
})

// -----------------------------
// Exercise 2
// -----------------------------

// adding to all classes an event listiner
$("body").on("click", "li", function () {
    $(this).remove()
})
