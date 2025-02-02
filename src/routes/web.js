const express = require("express");
const homeController = require("../controller/homeController");

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", homeController.handleHello);
  router.get("/user", homeController.handleUserPage);
  router.post("/create-user", homeController.handleCreateUser);

  return app.use("/", router);
};

module.exports = initWebRoutes;
