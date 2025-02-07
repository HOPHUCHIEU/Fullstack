import bcrypt from "bcryptjs";
import mysql from "mysql2";

const salt = bcrypt.genSaltSync(10);

// Create connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "jwt",
});

const hashPassword = (userpassword) => {
  return bcrypt.hashSync(userpassword, salt);
};

const creatNewUser = (email, password, username) => {
  let hashPass = hashPassword(password);

  connection.query(
    "INSERT INTO users (email, password, username) VALUES (?, ?, ?)",
    [email, hashPass, username],
    function (err, results, fields) {
      if (err) {
        console.error(err);
        return;
      }
      console.log("User created successfully");
    }
  );
};

const getUserList = () => {
    let user = []
  connection.query("Select * from  users ", function (err, results, fields) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(results);
  });
};

module.exports = {
  creatNewUser,
  getUserList,
};
