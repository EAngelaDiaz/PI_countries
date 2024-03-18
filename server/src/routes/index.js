const { Router } = require("express");

const router = Router();
//const express = require('express');
//const router = express.Router();



const countriesControllers = require('../controllers/countriesControllers');
const idCountriesControllers = require('../controllers/idCountriesControllers');
const nameCountriesControllers = require('../controllers/nameCountriesControllers');
const postActivitiesControllers = require('../controllers/postActivitiesControllers');
const getActivitiesControllers = require('../controllers/getActivitiesControllers');

//router.get("/", nameCountriesControllers);
router.get("/", [ nameCountriesControllers, countriesControllers ]);
router.get("/id/:idPais", idCountriesControllers);
router.post("/activities", postActivitiesControllers);
router.get("/activities", getActivitiesControllers);



module.exports = router;
