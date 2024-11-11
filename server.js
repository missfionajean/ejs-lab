// setting up usable express variable
const express = require("express");
const app = express();

// setting up morgan for better HTTP logging
/* remember this is middleware that must be installed */
const morgan = require("morgan");
app.use(morgan("dev"));

// setting up validator dependency to use later
const validator = require("validator");

// creating variable for port (for easier testing)
const port = 3000;

// root path HTTP request
app.get("/", (req, res) => {
	res.send("Hello There!");
});

// creates listener for HTTP requests (goes at bottom)
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
