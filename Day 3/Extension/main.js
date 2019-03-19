// -----------------------------
// Extension
// -----------------------------

const init = function() {

    $("span").addClass("picker")
    const $arrSpans = $(".picker");
    console.log($arrSpans)

    for (let x of $arrSpans) {
        const curSpan = $(x)
        const curColor = curSpan.html()
        curSpan.css("background-color", curColor)
        curSpan.on("click", () => changeMainColor(curColor))
    }

}
const changeMainColor = function(argColor){
    console.log(argColor)
    $(".box").css("background", argColor)
}
const customizeElement = function(arg) {
    console.log(arg)
}

$(document).ready(init())


