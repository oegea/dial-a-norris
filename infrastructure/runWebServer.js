const express = require('express')
const app = express()
const port = 80

/*app.get('/', (req, res) => {
    res.send('Hello World!')
})*/

app.use(express.static('public'));


module.exports = () => {
    app.listen(port, () => {
        console.log(`Dial a Norris server running at port ${port}`)
    })    
}