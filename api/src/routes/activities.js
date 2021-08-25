const express = require('express');
const {Activity, Country} = require('../db');

const router = express.Router();

router.get('/', async (req, res, next) => {
    // res.send('entro activities')
    try {
        const activity = await Activity.findAll()
        return res.json(activity)
    } catch (error){
        next(error);
    }
    
});
// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)

router.post('/activity', async (req, res, next) => {
    // res.send('ingreso actividad')
    const {name, difficulty, duration, season, id, alpha3Code} = req.body;
    try {
        const createdActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
            id
        })
        var country = await Country.findByPk(alpha3Code);
        var activityCountry = await country.addActivity(createdActivity)
        res.status(201).json(createdActivity)
    } catch(error) {
        next(error);
    }  
});

module.exports = router;

// [ ] POST /activity:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos