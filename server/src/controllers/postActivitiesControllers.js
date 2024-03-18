const { DataTypes } = require("sequelize");
const { Activity, Country } = require("../db");


const postActivitiesControllers = async (req, res) => {
    try {
        const { id, name, difficulty, duration, season, countries  } = req.body;

        if (!name || !difficulty || !season) return res.status(400).send("Faltan datos");

        const activity = await Activity.create({
           id,
           name,
           difficulty,
           duration,
           season,
        })
         
        const countriesData = await Country.findAll({
            where: { name : countries}
        })
        activity.addCountry(countriesData);

        return res.status(200).json(activity);

    } catch (error) {
        return res.status(500).json(error.message);
    }

};


module.exports = postActivitiesControllers;