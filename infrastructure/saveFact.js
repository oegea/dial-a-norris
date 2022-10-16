const adaptToFestivalSynthesizer = (sentence) => {
    // Replace "ñ" by "ni"
    sentence = sentence.replaceAll("ñ", "ni")

    // Replace commas by "."
    sentence = sentence.replace(/,/g, ".")

    // Remove accents
    sentence = removeAccents(sentence)

    // Remove "¿"
    sentence = sentence.replace(/¿/g, "")

    // Remove "¡"
    sentence = sentence.replace(/¡/g, "")

    return sentence
}

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

module.exports = (fact) => {

    const factText = adaptToFestivalSynthesizer(fact.text)

    const fs = require('fs');
    const { exec } = require("child_process");

    fs.readFile('/etc/asterisk/extensions.conf', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const fileLines = data.split('\n')

        let newFileContent = ''
        for(let i = 0; i < fileLines.length; i++){
            if (i === 3)
                newFileContent += `exten => 100,3,Festival('${factText}')`
            else    
                newFileContent += `${fileLines[i]}`

            newFileContent += (i < fileLines.length-1) ? '\n' : ''
        }

        fs.writeFile('currentFactPosition.txt', `${fact.id}`, () => null)
        fs.writeFile('/etc/asterisk/extensions.conf', newFileContent, () => {
            exec("service asterisk reload")
        })
    
    });

}