const fs = require('fs');

module.exports = function getPreviousFact(facts, FactEntity) {

    return new Promise((resolve, reject) => {
        fs.readFile('currentFactPosition.txt', 'utf8', (err, data) => {
            let currentFact
            if (err)
                currentFact = 0
            else
                currentFact = (parseInt(data))

            let previousFact
            // Si estamos en el primer fact, volvemos al último
            if (currentFact === 0)
                previousFact = facts.length - 1
            else
                previousFact = currentFact - 1
    
            const fact = new FactEntity(currentFact, facts[previousFact])
            resolve(fact)
        })
    });


}