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
  

const deleteIdActivities = async ({id}) => {
  try {
    await Activity.destroy({ where: { id: id } });
    return await Activity.findAll();

  } catch (error) {
    throw new Error('Error al borrar actividad');
  }
};

const getIdActivity = async (id) => {
  try {
      const registro = await Activity.findOne({
         where: { id: id },
         include: { model: Country, 
          attributes: ['name']
        }
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

const putIdActivity = async (activityData) => {
  const { 
    id,
    name, 
    difficulty, 
    duration, 
    season, 
 } = activityData;
  
  try {
    const newDate = {};
    if (id) newDate.id = id;
    if (name) newDate.name = name;
    if (difficulty) newDate.difficulty = difficulty;
    if (duration) newDate.duration = duration;
    if (season) newDate.season = season;
   

    await Activity.update(
      newDate,
      { where: {id: id}})
    
      return await Activity.findAll();

  } catch (error) {
    throw new Error('Error al modificar datos');
  }
}

module.exports = {
  createActivity,
  getAllActivities,
  deleteIdActivities,
  getIdActivity,
  putIdActivity
}