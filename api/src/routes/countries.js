const { Router } = require('express')
const router = Router()
const { Country, Activities } = require('../db')
const { getCountries, byName, byCode } = require('../controllers/countries')


router.get('/countries', async (req, res) => {
    const { name } = req.query
    try {
        const api_countries = await getCountries()
        await Country.bulkCreate(api_countries)
        const allCountries = await Country.findAll()
    
        name ? res.send(byName(name)) : res.status(200).send(allCountries)
    }

    catch(error) {
        console.log(error)
        res.status(404).send("ERROR")
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const coutry_id = await Country.findByPk(id)

        res.send(coutry_id)
    }


    catch(error) {
        console.log(error)
        res.send("error")
    }

})



module.exports = router