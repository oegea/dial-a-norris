const express = require('express')
const app = express()
const port = 80

app.use(express.static('public'));


module.exports = (getPreviousFact) => {

    app.get('/api/previous', (req, res) => {
        getPreviousFact().then(fact => res.json(fact))
    })


    app.listen(port, () => {
        console.log(`Dial a Norris server running at port ${port}`)
    })    
}