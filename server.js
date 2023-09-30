const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const body = require("body-parser");

//body-parser to insert data
app.use(body.urlencoded({ extended: true }));

//db import
require("./services/database/db");

//set ejs
app.set("view engine", "ejs");

//import routes
app.use("", require("./services/router/routes"));

app.listen(port, () => console.log(`server running on ${port}`));
