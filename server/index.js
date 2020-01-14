const express = require('express');
const app = express()
const port = 3449;
const people = require('./data.json')

// ENDPOINTS
app.get('/api/people', (req, res) => {
    res.status(200).send(people)
    // res.sendStatus(200)
})


app.listen(port, () => {
    console.log(`Server listening on Port: ${port}`)
})
