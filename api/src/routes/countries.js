const { Router } = require('express')
const router = Router()
const { Country, Activities } = require('../db')
const { getCountries, byId, countriesDB, include_activities, eliminateActivityCountry } = require('../controllers/countries')
const { Op } = require('sequelize')


router.get('/', async (req, res, next) => {
     const { name } = req.query
    try { 
        const api_countries = await getCountries()
        const x = await Country.findAll()
        x.length === 0 
        ? await Country.bulkCreate(api_countries)
        : await Country.findAll({})

        const countries = name ? await countriesDB(name)
        : await Country.findAll(include_activities)

        countries.length === 0 ? 
        res.send("NO SE ENCUENTRA EL PAIS") :
        res.status(200).send(countries)
    }

    catch(error) {
        console.log(error)
        next()
        res.status(404).send("ERROR")
    }
});


router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const coutry_id = await byId(id)
        res.send(coutry_id)
    }
    catch(error) {
        console.log(error)
        res.send("NO SE ENCUENTRA EL ID")
    }
});

router.delete('/hola', async (req, res) => {
    try {const delete_activity = await eliminateActivityCountry()
    res.send(delete_activity)}

    catch(error) {
        console.log(error)
    }
    
});

module.exports = router