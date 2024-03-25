const { Country, Activity } = require("../db");

const createActivity = async (activityData) => {
  const { 
     id,
     name, 
     difficulty, 
     duration, 
     season, 
     countries, 
  } = activityData;
  
  if (!name || !difficulty || !season) {
      throw new Error('Faltan datos');
  }
  
  try {
      const activity = await Activity.create({
        id,
        name,
        difficulty,
        duration,
        season,
        countries,
      });
  
      const countriesData = await Country.findAll({
        where: { name: countries }
      });
  
      await activity.addCountry(countriesData);
  
      return activity;
  } catch (error) {
      throw new Error('Error al crear la actividad');
  }
};



const getAllActivities = async () => {
    try {
      return await Activity.findAll();
    } catch (error) {
      throw new Error('Error al obtener actividades');
    }
};
  

module.exports = {
  createActivity,
  getAllActivities,
}