const express = require("express");
const route = express.Router();
const controller = require("../controller/controller");

// get the page or render
route.get("/add", controller.addPage);
route.get("/home", controller.homePage);
//to post data
route.post("/add", controller.addData);
//edit file render
route.get("/edit/:id", controller.editPageFind);
route.post("/update/:id", controller.editPageUpdate);
route.get("/delete/:id", controller.deletePage);

module.exports = route;
