const express = require('express')

const app = express()


app.get('/letsgo', (req, res) => {
    console.log('funcionou')
})



app.listen(3333, () => {
    console.log('Rodou')
})