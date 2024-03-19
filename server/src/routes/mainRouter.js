const { Router } = require("express");
const countriesRouter = require("./countriesRoutes");
const activitiesRouter = require("./activitiesRoutes");

const mainRouter = Router();

mainRouter.use("/countries", countriesRouter);
mainRouter.use("/activities", activitiesRouter);


module.exports = mainRouter;
