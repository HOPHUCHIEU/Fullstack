const handleHello = (req, res) => {
  return res.render("home");
};

const handleUserPage = (req, res) => {
  return res.render("user");
};

module.exports = {
  handleHello,
  handleUserPage,
};
