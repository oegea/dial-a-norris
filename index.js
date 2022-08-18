const applicationFactory = require('./application/factory.js')
const generateNewFact = applicationFactory.fakeGenerateNewFact()

const dailyRun = require('./infrastructure/dailyRun.js')
dailyRun(() => generateNewFact())