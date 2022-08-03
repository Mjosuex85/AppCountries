const { Activities, Country} = require('../db')
const { Router } = require('express')
const router = Router()

router.post('/activities', async (req, res) => {
    const { name, difficulty, duration, season } = req.body
    const { countries } = req.body  // va a recibir un array con los paises

    const activity = {   
        name,
        difficulty,
        duration, 
        season,
    }
    
    const db_activity = await Activities.create(activity)
    
    const add_countries = await Country.findAll({
        where: {
            name: countries
        }
    })
    
    const postActivity = await add_countries.forEach((c) => {
        c.addActivities(db_activity)
    })

    res.send(postActivity)

})


module.exports = router



