const mongoose = require("mongoose");

const dbConn = mongoose
  .connect(process.env.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected"))
  .catch(() => console.log("Not connected"));


module.exports = dbConn;