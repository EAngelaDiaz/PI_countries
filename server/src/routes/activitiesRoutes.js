const { Router } = require("express");
const activitiesRouter = Router();
const { 
    postActivities, 
    getActivities 
} = require('../handlers/activitiesHandlers');


activitiesRouter.post("/", postActivities);
activitiesRouter.get("/", getActivities);


module.exports = activitiesRouter;
