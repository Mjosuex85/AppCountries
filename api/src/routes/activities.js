const { Activities, Country} = require('../db')
const { Router } = require('express')
const router = Router()

router.post('/activities', async (req, res) => {
    const { name, difficulty, duration, season } = req.body
    const { countries } = req.body  // va a recibir un array con los paises

    try {const activity = {
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
    
    await add_countries.forEach((c) => {
        c.addActivities(db_activity)
    })

    res.send(activity)
    }

    catch(error) {
        console.log(error)
        res.status(404).json(error.parent.detail)
    }

});

router.get("/activities", async (req, res) => {
    try {
        
        const activities = await Activities.findAll({})
        res.send(activities)
    }

    catch(error){
        console.log(error)
    }
});


module.exports = router



