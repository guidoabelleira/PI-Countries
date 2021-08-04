const { Router } = require('express');
// Importar todos los routers;
const countriesRoutes = require('./countries');
const activitiesRoutes = require('./activities');

const router = Router();

// Configurar los routers
router.use('/countries', countriesRoutes);
router.use('/activities', activitiesRoutes);

module.exports = router;
