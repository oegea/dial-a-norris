module.exports = {
    getNextFact: () => {
        const getNextFact = require('./getNextFact.js')
        const facts = require('../facts.js')
        const FactEntity = require('../domain/factEntity.js')
        return () => getNextFact(facts, FactEntity)
    },

    saveFact: () => {
        const saveFact = require('./saveFact.js')
        return (fact) => saveFact(fact)
    },

    runWebServer: () => {
        const runWebServer = require('./runWebServer.js')
        return () => runWebServer()
    },

    dailyRun: () => {
        const dailyRun = require('./dailyRun.js')
        return (callback) => dailyRun(callback)
    }
}