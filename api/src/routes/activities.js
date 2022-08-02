const { Activities, Countries } = require('../db')
const { Router } = require('express')
const router = Router()

router.post('/activities', (req, res) => {
    const { name, difficulty, duration, season } = req.body
    const { countries } = req.body    
   
    const activity = {      
        name,
        difficulty,
        duration, 
        season
    }

    Activities.create(activity)
    
    res.send(activity)

})


module.exports = router



