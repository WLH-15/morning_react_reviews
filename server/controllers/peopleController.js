const people = require('../data.json')
let id = 21

module.exports = {
    getPeople: (req, res) => {
        res.status(200).send(people)
    },

    deletePerson: (req, res) => {
        const {id} = req.params
        const indexToDelete = people.findIndex(element => element.id === +id)
        people.splice(indexToDelete, 1)
        res.status(200).send(people)
    },

    createPerson: (req, res) => {
        const {first_name, last_name, email, gender, ip_address} = req.body
        const person = {
            id,
            first_name,
            last_name,
            email,
            gender,
            ip_address
        }
        people.push(person)
        id++
        res.status(200).send(people)
    },
    
    editPerson: (req, res) => {
        const {id} = req.params
        const {first_name, last_name, email, gender, ip_address} = req.body
        const indexToUpdate = people.findIndex(element => element.id === +id);
        const person = {
            id,
            first_name,
            last_name,
            email,
            gender,
            ip_address
        };
        people.splice(indexToUpdate, 1, person)
        res.status(200).send(people)
    }
}