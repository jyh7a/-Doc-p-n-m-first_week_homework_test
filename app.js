const express = require("express");
const app = express();

// env setting
require("dotenv").config();

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log("Server don start for port: " + PORT));