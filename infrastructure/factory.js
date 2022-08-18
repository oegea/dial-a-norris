module.exports = {
    getNextFact: () => {
        const getNextFact = require('./getNextFact.js')
        const facts = require('../facts.js')
        const FactEntity = require('../domain/factEntity.js')
        return () => getNextFact(facts, FactEntity)
    },

    saveFact: () => {
        return () => require('./saveFact.js')
    }
}