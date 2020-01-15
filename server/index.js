const express = require('express')
const app = express()
const port = 3449
const data = require('./data.json')
const ctrl = require('./controllers/peopleController')

app.use(express.json())

// ENDPOINTS
app.get('/api/people', ctrl.getPeople)
app.delete('/api/people/:id', ctrl.deletePerson)
app.post('/api/people', ctrl.createPerson)
app.put('/api/people/:id', ctrl.editPerson)

app.listen(port, () => console.log(`Server running on Port:${port}`))