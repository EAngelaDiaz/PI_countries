const axios = require('axios');
const { Country } = require('../db');


async function getCountriesData( ) {
      try {
        const response = await axios.get('http://localhost:5000/countries');
        const countries = response.data; 

        for (const country of countries) {

        //for (let i = 0 ; i < countries.length; i++) {
        //const countryData = countries[i];
         await Country.create({
            id: country.cca3,
            name: country.name.common,
            image: country.flags.png,
            continent: country.continents[0],
            capital:  country.capital != null ? country.capital[0] : 'No se encontro dato',
            subregion: country.subregion,
            area: country.area,
            population: country.population,
         
         });
      ;
    }
    
      
        
        

        

        
        /*for (const countryData of countries) {
            
          const newCountry = await Country.create({
            where: {
           
            id: countryData.cca3,
            name: countryData.name.common,
            image: countryData.flags.png,
            continent: countryData.continents,
            capital: countryData.capital,
            subregion: countryData.subregion,
            area: countryData.area,
            population: countryData.population,        
            }
            
          });*/
        
        
    
        console.log('Países guardados exitosamente en la base de datos.');
      } catch (error) {
        console.error('Error al guardar países:', error);
      }
    }
    
    
     module.exports = getCountriesData;
