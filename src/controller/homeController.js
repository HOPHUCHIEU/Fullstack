const userServices = require("../service/userService");

const handleHello = (req, res) => {
  return res.render("home");
};

const handleUserPage = (req, res) => {
  return res.render("user");
};

const handleCreateUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  // userServices.creatNewUser(email, password, username);
  userServices.getUserList();

  return res.send("Create user successfully");
};

module.exports = {
  handleHello,
  handleUserPage,
  handleCreateUser,
};
