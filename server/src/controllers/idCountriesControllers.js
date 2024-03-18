const { Country, Activity } = require("../db")

const idCountriesControllers = async (req, res) => {

    try {

        const { idPais } = req.params
        const registro = await Country.findOne(
            { where: { id: idPais}, 
              include: { model: Activity }, });
              
        console.log('id recibido:', idPais);
        // Verifica si se encontró el registro
        if (registro) {
          console.log('Registro encontrado:', registro.toJSON());
          return res.status(200).json(registro);
        } else {
          console.log('No se encontró ningún registro con ese ID.');
          return res.status(404).json(error.message)
        }
      } catch (error) {
        console.error('Error al buscar el registro:', error);
        return res.status(500).json(error.message)
      }
      
    }

    
 
      
 
   

  module.exports = idCountriesControllers;