const {
   getCountriesDB,
   getIdCountry,
   getNameCountry, 
} = require('../controllers/countriesControllers');



const getDataApi = async (req, res) => {
  try {
    return await getCountriesDB();
  } catch (error) {
    console.error('Error al guardar países:', error);
  }
};




  
const getIdCountries = async (req, res) => {
  try {
    const { idPais } = req.params;
    const registro = await getIdCountry(idPais);
    
    res.status(200).json(registro);
  } catch (error) {
    console.error('Error al buscar el registro:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


const getNameCountries = async (req, res) => {
  try {
    const { name } = req.query;
    
    const countries = await getNameCountry(name);
    res.status(200).json(countries);
  } catch (error) {
    console.error('Error al obtener países:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};    

    
module.exports = { 
  getDataApi,
  getIdCountries,
  getNameCountries,
};