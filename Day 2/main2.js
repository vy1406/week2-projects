// -----------------------------
// Exercise 1
// -----------------------------

const StringFormatter =  () => { 
    const capitalizeFirst = (argString) => {
        const str = argString[0].toUpperCase() + "" + argString.slice(1).toLowerCase()
        return str
    }

    const skewerCase  = (argString) => {
        const str = argString.replace(/ /g,"_");
        return str
    }

    return {
        capitalizeFirst: capitalizeFirst,
        skewerCase     : skewerCase
        }
}

const formatter = StringFormatter();
const firstToUpper  = formatter.capitalizeFirst("dorothy")
const replaceToDash = formatter.skewerCase("blue box number 2")
console.log("firstToUpper  : " + firstToUpper)
console.log("replaceToDash : " + replaceToDash)
// -----------------------------
// Exercise 2
// -----------------------------

const Bank = () => {
    let money = 500
    const depositCash = (arg) => {
        money += arg
    }
    const checkBalance = () => {
        return console.log(money)
    }
    return {
        deposit  : depositCash,
        showBalance : checkBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance()


// -----------------------------
// Exercise 3
// -----------------------------
const SongsManager = () => {

    let arrSongs = []

    const addSong = (argSong, argUrl) => {
        let tempSong = {
            name: argSong,
            url : argUrl
        }

        arrSongs.push(tempSong)
    }

    const getSong = (argName) => {
        for ( let i = 0 ; i < arrSongs.length ; i ++ )
            if ( arrSongs[i].name == argName)
                return console.log(arrSongs[i].url)
        
        // default return
        console.log("no song was found")
    }
    return {
        addSong : addSong,
        getSong : getSong
    }
}
const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.getSong("sax") // no song found