const factory = {

    getPreviousFact: () => {
        const getPreviousFact = require('./getPreviousFact.js')
        const facts = require('../facts.js')
        const FactEntity = require('../domain/factEntity.js')
        return () => getPreviousFact(facts, FactEntity)
    },

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
        const getPreviousFact = factory.getPreviousFact()
        const runWebServer = require('./runWebServer.js')
        return () => runWebServer(getPreviousFact)
    },

    dailyRun: () => {
        const dailyRun = require('./dailyRun.js')
        return (callback) => dailyRun(callback)
    }
}

module.exports = factory