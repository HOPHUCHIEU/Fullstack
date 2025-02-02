const express = require("express");
const configViewEngine = require("./configs/viewEngine");
const initWebRoutes = require("./routes/web");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Config view engine
configViewEngine(app);

// Use body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Init all web routes
initWebRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});