const fs = require('fs');

module.exports = function getNextFact(facts, FactEntity) {

    return new Promise((resolve, reject) => {
        fs.readFile('currentFactPosition.txt', 'utf8', (err, data) => {
            let currentFact
            if (err)
                currentFact = 0
            else
                currentFact = (parseInt(data))+1

            if (currentFact >= facts.length)
                currentFact = 0
    
            const fact = new FactEntity(currentFact, facts[currentFact])
            resolve(fact)
        })
    });


}