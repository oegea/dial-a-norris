const infrastructureFactory = require('../infrastructure/factory.js')

module.exports = {
    generateNewFact: () => {
        const generateNewFact = require('./generateNewFact.js')
        const saveFact = infrastructureFactory.saveFact()
        const getNextFact = infrastructureFactory.getNextFact()
        return () => generateNewFact(saveFact, getNextFact)
    },

    fakeGenerateNewFact: () => {
        const generateNewFact = require('./generateNewFact.js')
        const getNextFact = infrastructureFactory.getNextFact()
        const saveFact = () => console.log('saveFake')
        
        return () => generateNewFact(saveFact, getNextFact)
    }
}