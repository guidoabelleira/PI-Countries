//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const axios = require('axios');
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ 
  force: true 
}).then( () => {
  console.log('Base conectada')
  server.listen(3001, async () => {
    const apiCountryResponse = await axios.get('https://restcountries.eu/rest/v2/all');
  // let apiCountry = apiCountryResponse.data;
  // console.log(apiCountry);
  // apiCountryResponse.data.forEach(async (country) => {
  //   return {
  //     alpha3Code: country.alpha3Code,
  //     name: country.name,
  //     flag: country.flag,
  //     region: country.region,
  //     capital: country.capital,
  //     subregion: country.subregion,
  //     area: country.area,
  //     population: country.population
  //   }
  // })
  // await Country.bulkCreate(apiCountryResponse)
    apiCountryResponse.data.forEach(async (country) => {
      try {
        await Country.create({
          alpha3Code: country.alpha3Code,
          name: country.name,
          flag: country.flag,
          region: country.region,
          capital: country.capital,
          subregion: country.subregion,
          population: country.population,
        });
      } catch (error) {
        console.log(error);
      }
    });
    console.log('Listening at 3001'); // eslint-disable-line no-console
  });
});
