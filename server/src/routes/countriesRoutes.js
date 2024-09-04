const { Router } = require("express");
const countriesRouter = Router();
const  { 
    getIdCountries,
    getNameCountries,
    postCountry,
} = require('../handlers/countriesHandlers');


countriesRouter.get("/", getNameCountries);
countriesRouter.get("/:idPais", getIdCountries);
countriesRouter.post("/" , postCountry )

module.exports = countriesRouter;