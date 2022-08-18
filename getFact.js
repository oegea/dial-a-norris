const facts = require('./facts.js')
const fs = require('fs');



function getFact(facts) {

    return new Promise((resolve, reject) => {
        fs.readFile('currentFactPosition.txt', 'utf8', (err, data) => {
            let currentFact
            if (err)
                currentFact = 0
            else
                currentFact = (parseInt(data))+1

            if (currentFact >= facts.length)
                currentFact = 0
    
            fs.writeFile('currentFactPosition.txt', `${currentFact}`, () => null)
            resolve(facts[currentFact])
        
        })
    });


}

module.exports = () => getFact(facts);