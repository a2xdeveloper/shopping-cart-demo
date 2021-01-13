"use strict";
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cart = require("./routes/cart");

app.use(bodyParser.json())
app.use("/v1", cart);

module.exports = app;