const { Country } = require('../db');

/*const countriesControllers = async () => {
    try {
      
      const countriesData = await Country.findAll();
  
      return countriesData;
    } catch (error) {
     
      console.error('Error al obtener los elementos:', error);
      throw new Error('Error al obtener los elementos');
    }
  };*/

const countriesControllers = async (req, res) => {
  try {
    const countriesData = await Country.findAll();
    res.status(200).json(countriesData)

  } catch (error) {
    res.status(404).send(error.message)

  }
}

module.exports = countriesControllers;