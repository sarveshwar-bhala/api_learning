const userModel = require("../model/model");


// home controller
exports.homePage = (req, res) => {
  //to find data
  userModel
    .find()
    .then((user) =>
      res.render("index", {
        user: user,
      })
    )
    .catch(() => res.send("unable to find data"));
};

exports.addPage = (req, res) => {
  res.render("adduser");
};

exports.addData = (req, res) => {
  let body = req.body;

  const user = new userModel(body);

  user
    .save()
    .then(() => console.log(user))
    .catch(() => console.log("unable to insert data"));
  //after success which page to return
  res.render("adduser");
};

//edit controller
exports.editPageFind = (req, res) => {
  let id = req.params.id;
  userModel
    .findById(id)
    .then((user) => res.render("editusers", { user: user }))
    .catch(() => console.log("unable to find data"));
};

exports.editPageUpdate = (req, res) => {
  let id = req.params.id;
  userModel
    .findByIdAndUpdate(id, {
      name: req.body.name,
      email: req.body.email,
    })
    .then((user) => res.redirect("/home"))
    .catch(() => console.log("unable to update data"));
};

exports.deletePage = (req, res) => {
  let id = req.params.id;
  userModel
    .findByIdAndRemove(id)
    .then(() => res.redirect("/home"))
    .catch(() => console.log("unable to update data"));
};