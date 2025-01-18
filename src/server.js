import express from "express";

import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
// import initApiRoutes from "./routes/api";

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// Config view engine
configViewEngine(app);

// Init all web routes
initWebRoutes(app);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
