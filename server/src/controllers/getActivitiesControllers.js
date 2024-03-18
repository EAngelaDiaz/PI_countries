const { Activity } = require('../db');


/*const getActivitiesControllers = async () => {
    try {
      
      const activityData = await Activity.findAll();
  
      return activityData;
    } catch (error) {
     
      console.error('Error al obtener los elementos:', error);
      throw new Error('Error al obtener los elementos');
    }
  };*/

  const getActivitiesControllers = async (req, res) => {
    try {
      const activityData = await Activity.findAll();
      res.status(200).json(activityData)
  
    } catch (error) {
      res.status(404).send(error.message)
  
    }
  }

module.exports = getActivitiesControllers;