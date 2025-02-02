const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "jwt",
});

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

  // A simple SELECT query

  connection.query(
    "INSERT INTO users (email, password, username) VALUES (?, ?, ?)",
    [email, password, username],
    function (err, results, fields) {
      if (err) {
        console.error(err);
        return res.status(500).send("Error querying the database");
      }

      return res.send("Create user successfully");
    }
  );
};

module.exports = {
  handleHello,
  handleUserPage,
  handleCreateUser,
};
