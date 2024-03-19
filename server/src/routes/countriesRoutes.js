const { Router } = require("express");
const countriesRouter = Router();
const  { 
    getCountries,
    getIdCountries,
    getNameCountries,
} = require('../handlers/countriesHandlers');


countriesRouter.get("/", getNameCountries);
countriesRouter.get("/", getCountries );
countriesRouter.get("/:idPais", getIdCountries);


module.exports = countriesRouter;