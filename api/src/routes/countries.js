const express = require('express');
const {Country, Activity} = require('../db');
const axios = require('axios');


const router = express.Router();

router.get('/', async (_req, res, next) => {
    try {
        const country = await Country.findAll({
            include: Activity
        })
        return res.json(country)
    } catch (error) {
        next(error);
    }
});

router.get('/:idPais', async (req, res, next) => {
    const idPais = req.params.idPais;
    if(!idPais){
        return next({msg: 'Id Pais incorrecto', status: 500});
    }
    // var country;
    try {
        if(typeof idPais === 'string' && idPais.length === 3){
            let country = await Country.findByPk(idPais, {
                include: Activity
            });
            if(country === null){
                return next(error);
            }
            return res.json(country);
        }
    } catch (error){
        return next(error);
    }
})

router.get('/:name', async (req, res, next) => {
    const {nameF} = req.params;
    if(!nameF){
        return next({msg: 'Name Pais incorrecto', status: 500});
    }
    try {
        if(typeof nameF === 'string'){
            let country = await Country.findOne({
                where: {
                    name: nameF
                }
            });
            if(country === null){
                return next(error);
            }
            return res.json({country});
        }
    } catch (error){
        return next(error);
    }
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
