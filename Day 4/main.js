const arrPCs = []

// ----------------------------
// add listiner to console the id of processor
// ----------------------------
$(".generator").on("click", function(){
    let relevantInputValue = $(this).closest("div").attr("id")
    console.log("Processor ID: " + relevantInputValue)
})

// ----------------------------
// add listiner to console the id of computer
// ----------------------------
$(".generator").on("click", function(){
    let relevantInputValue = $(this).closest(".computer").data().id
    console.log("Computer's data-id: " + relevantInputValue)
    arrPCs.push({cmp_id : relevantInputValue})
})

// ----------------------------
// add listiner to console the bus number ( text )
// ----------------------------
$(".generator").on("click", function(){
    let relevantInputValue = $(this).closest(".computer").find(".BUS").text()
    console.log("BUS: " + relevantInputValue)
})

// ----------------------------
// add listiner to console the generator text ( uncle ) 
// ----------------------------

$(".validator").on("click", function(){
    let relevantInputValue = $(this).closest(".ram").siblings(".processor").find(".generator").text()
    console.log(relevantInputValue)
})

// ----------------------------
// add listiner to console the generator text ( uncle ) 
// ----------------------------

$(".validator").on("click", function(){
    let relevantInputValue = $(this).closest(".computer").find(".MB").text()
    console.log(relevantInputValue)
})

// ----------------------------
// add listiner to console BOTH span texts  
// ----------------------------

$(".validator").on("click", function(){
    let relevantInputValue = $(this).closest(".computer").find(".processor").children()
    let str = "";
    for ( let i = 0; i< relevantInputValue.length ; i ++ ){
        let $current = $(relevantInputValue[i])
        if ($current[0].className == "QR")
            str += $current.text() + " "
    }

    console.log("QRs : " + str)
})