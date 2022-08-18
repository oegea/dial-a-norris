module.exports = generateNewFact = async (saveFact, getNextFact) => {
    const fact = await getNextFact()
    console.log(`New Chuck Norris fact is ${fact.text}`)
    
    saveFact(fact)
    
}