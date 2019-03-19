// -----------------------------
// Exercise 1
// -----------------------------
const pushPull = arg => arg();
const push = () => console.log("push");
const pull = () => console.log("pull");

pushPull(push)
pushPull(pull)


// -----------------------------
// Exercise 2
// -----------------------------

const getTime = arg => console.log("time is : " + arg)  
const time = new Date();
getTime(time);

// -----------------------------
// Exercise 3
// -----------------------------

const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };
  const logDate = (arg) => console.log(arg) 
  //displayData(alert, logDate, "I like to party")

// -----------------------------
// Exercise 4
// -----------------------------

const showSum = (arg1, arg2, arg3) => arg1 + arg2 + arg3
console.log("showSum is : " + showSum(1,2,3))

// -----------------------------
// Exercise 5
// -----------------------------

const capitalize = arg => arg[0].toUpperCase() + "" + arg.slice(1).toLowerCase()
const b = capitalize("bOb") // returns Bob
const t = capitalize("TAYLOR") // returns Taylor
const f = capitalize("feliSHIA") // returns Felishia

console.log("b: " + b + " ,t: " + t + " ,f: " + f)

// -----------------------------
// Exercise 6
// -----------------------------

const commentOnWeather = arg => arg > 25 ? console.log("its hot... " ) : console.log("its cold!")

commentOnWeather(30);
commentOnWeather(22);

// -----------------------------
// Exercise 7
// -----------------------------

const explode = (lightFunc, soundfunc, sound) => {
    lightFunc()
    soundfunc(sound)
}

const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
const makeSound = (sound) => alert(sound)

explode(shineLight, makeSound, "BOOM")