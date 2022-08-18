const applicationFactory = require('./application/factory.js')
const infrastructureFactory = require('./infrastructure/factory.js')

const generateNewFact = applicationFactory.generateNewFact()
const runWebServer = infrastructureFactory.runWebServer()
const dailyRun = infrastructureFactory.dailyRun()

dailyRun(() => generateNewFact())

runWebServer()