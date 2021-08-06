const express = require('express');
const {Country} = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
    return Country.findAll()
    .then((country) => {
        return res.json(country)
    })
    // res.send('entro countries')
});

router.get('/:idPais', (req, res) => {
    const {idPais} = req.params;

    res.send('Obtener el detalle de un país en particular ' + idPais)
})

module.exports = router;



// [ ] GET /countries:
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
// Obtener un listado de los paises.
// [ ] GET /countries/{idPais}:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes
// [ ] GET /countries?name="...":
// Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
// Si no existe ningún país mostrar un mensaje adecuado
