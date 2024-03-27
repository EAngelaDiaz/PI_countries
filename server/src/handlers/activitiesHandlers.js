const { createActivity, getAllActivities } =require("../controllers/activitiesControllers");



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



module.exports = {
  postActivities,
  getActivities,
};