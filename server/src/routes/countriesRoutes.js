const { Router } = require("express");
const countriesRouter = Router();
const  { 
    getIdCountries,
    getNameCountries,
} = require('../handlers/countriesHandlers');


countriesRouter.get("/", getNameCountries);


countriesRouter.get("/:idPais", getIdCountries);


module.exports = countriesRouter;