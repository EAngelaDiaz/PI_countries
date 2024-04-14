const { Router } = require("express");
const activitiesRouter = Router();
const { 
    postActivities, 
    getActivities,
    deleteActivities,
    getIdActivities, 
    putActivities 
} = require('../handlers/activitiesHandlers');

activitiesRouter.get("/", getActivities);
activitiesRouter.get("/:id", getIdActivities)
activitiesRouter.post("/", postActivities);
activitiesRouter.put("/:id", putActivities);
activitiesRouter.delete("/:id", deleteActivities);

module.exports = activitiesRouter;
