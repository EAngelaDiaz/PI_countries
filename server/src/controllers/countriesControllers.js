const { Country, Activity } = require("../db");
const axios = require('axios');
const { Op } = require('sequelize');

const getCountriesDB = async () => {
  try {
    const infoApi = await axios.get('http://localhost:5000/countries');
    const countriesApi = infoApi.data

    for (const country of countriesApi) {

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
    }console.log('Países guardados exitosamente en la base de datos.');

  }catch (error) {
    console.error('Error al guardar países:', error);
  }
};




const getIdCountry = async (id) => {
  try {
      const registro = await Country.findOne({
         where: { id: id },
         include: { model: Activity }
      });
  
    if (registro) {
        return registro.toJSON();
    } else {
        throw new Error('No se encontró ningún registro con ese ID.');
      }
  } catch (error) {
      throw new Error('Error al buscar el registro.');
  }
};
  
  

const getNameCountry = async (name) => {
  try {
      if (!name) {
        return await Country.findAll({
           include: { model: Activity}
        });
      } else {
        return await Country.findAll({
          include: { model: Activity},
          where: {
            name: { [Op.iLike]: `%${name}%` }
        }
        });
      }
  } catch (error) {
      throw new Error('Error al obtener países por nombre.');
    }
  };
  

module.exports = { 
  getCountriesDB,
  getIdCountry,
  getNameCountry,
};