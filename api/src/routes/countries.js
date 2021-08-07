const express = require('express');
const {Country, Activity} = require('../db');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const country = await Country.findAll({
            include: Activity
        })
        return res.json(country)
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    res.send('ingreso "country"')
    // var apiCountryPromise = axios.get('https://restcountries.eu/rest/v2/all');
    // var dbCountryPromise = Country.findAll({
    //     include: Activity
    // })
    // return Promise.all([
    //     apiCountryPromise,
    //     dbCountryPromise
    // ]).then(country => {
    //     console.log(country[0].data)
    //     var apiCountry = country[0].data;
    //     var dbCountry = 
    //     res.send('...')
    // })
    // try {
    //     const createCountry = await Country.create({
    //         alpha3Code, 
    //         name, 
    //         flag, 
    //         region, 
    //         capital, 
    //         subregion, 
    //         area, 
    //         population
    //     })
    //     res.json(createCountry)
    // } catch(error) {
    //     console.log(error);
    // }  
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
