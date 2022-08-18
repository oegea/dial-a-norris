const main = async () => {
    const saveFact = require('./saveFact.js')
    const getFact = require('./getFact.js')
    
    const fact = await getFact()
    console.log(`New Chuck Norris fact is ${fact}`)
    
    saveFact(fact)
    
}

const oneMinute = 60000
const oneHour = oneMinute*60
const oneDay = oneHour*24
setInterval(() => main(), oneDay)
main()