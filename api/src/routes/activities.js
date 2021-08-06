const express = require('express');
const {Activity} = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
    // res.send('entro activities')
    return Activity.findAll()
    .then((activity) => {
        return res.json(activity)
    })
});
// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)

router.post('/', async (req, res) => {
    // res.send('ingreso actividad')
    const {name, difficulty, duration, season, id} = req.body;
    try {
        const createdActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
            id
        })
        res.json(createdActivity)
    } catch(error) {
        console.log(error);
    }
    
});

module.exports = router;

// [ ] POST /activity:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos