var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var routes = require("./routes/route");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1", routes);

// Configure the API port
var port = 4400;

// Start the web server
app.listen(port);
console.log("App Running on port " + port);
