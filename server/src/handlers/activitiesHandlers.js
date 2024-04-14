const { createActivity, getAllActivities, deleteIdActivities, getIdActivity, putIdActivity } =require("../controllers/activitiesControllers");



const postActivities = async (req, res) => {
  try {
    const activityData = req.body;
    const activity = await createActivity(activityData);
    res.status(200).json(activity);
  } catch (error) {
    console.error('Error al crear actividad:', error);
    res.status(500).json({ error: error.message });
  }
};

const getActivities = async (req, res) => {
  try {
    const activityData = await getAllActivities();
    res.status(200).json(activityData);
  } catch (error) {
    console.error('Error al obtener actividades:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const getIdActivities = async (req, res) => {
  try {
    const { id } = req.params;
    const registro = await getIdActivity(id);
    
    res.status(200).json(registro);
  } catch (error) {
    console.error('Error al buscar el registro:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const deleteActivities = async (req, res) => {
  try {
      const { id } = req.params;

      const allActivities = await deleteIdActivities({id});
      return res.json(allActivities);
  } catch (error) {
      return res.status(500).json({error: 'Error del servidor'});
  }
};

const putActivities = async (req, res) => {
  try {
    const { 
      id,
      name, 
      difficulty, 
      duration, 
      season, 
    } = req.body;
    const activity = await putIdActivity({ 
      id,
      name, 
      difficulty, 
      duration, 
      season,
    });
    res.status(200).json(activity);
  } catch (error) {
    console.error('Error al modificar datos:', error);
    res.status(500).json({ error: error.message });
  }
}



module.exports = {
  postActivities,
  getActivities,
  deleteActivities,
  getIdActivities,
  putActivities
};