module.exports = (fact) => {
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
                newFileContent += `exten => 100,3,Festival('${fact.text}')\n`
            else    
                newFileContent += `${fileLines[i]}\n`
        }

        fs.writeFile('currentFactPosition.txt', `${fact.id}`, () => null)
        fs.writeFile('/etc/asterisk/extensions.conf', newFileContent, () => {
            exec("service asterisk restart")
        })
    
    });

}