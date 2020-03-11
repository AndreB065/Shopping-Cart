const express = require("express");
const theRoutes = express.Router();
const theControllerFunctions = require("../controllers/controllerFunctions");

theRoutes
  .route("/")
  .get(theControllerFunctions.getEmAll)
  .post(theControllerFunctions.addOne);

  theRoutes
  .route("/:id")
  .get(theControllerFunctions.getOne)
  .delete(theControllerFunctions.deleteOne)
  .put(theControllerFunctions.updateOne);

module.exports = theRoutes;
