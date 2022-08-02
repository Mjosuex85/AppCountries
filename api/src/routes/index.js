const { Router } = require('express');
const countries = require('./countries.js')
const activities = require('./activities.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use('/countries', countries)
router.use('/', activities)
// Configurar los routers   
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
