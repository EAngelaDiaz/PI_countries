
const { Country, Activity } = require('../db');
const { Op } = require('sequelize');


const nameCountriesControllers = async ( req, res) => {
    try {
        const { name } = req.query;

        if(!name) {
            const countries = await Country.findAll();
            res.status(200).json(countries)
        }
        else {const countriesName = await Country.findAll({
            where: {
                name: {[Op.iLike]: `%${name}%`}
            }
        })
        res.status(200).send(countriesName);
    }
        
    } catch (error) {
        res.status(404).send(error.message)
    }  
} 





module.exports = nameCountriesControllers;
//{[Op.iLike]: `%${name}%`}