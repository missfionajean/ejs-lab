// setting up usable express variable
const express = require("express");
const app = express();

// allows express to find external static folders
app.use(express.static(__dirname + "/css"));

// setting up morgan for better HTTP logging
/* remember this is middleware that must be installed */
const morgan = require("morgan");
app.use(morgan("dev"));

// setting up validator dependency to use later
/* Source: https://expressjs.com/en/starter/static-files.html */
const validator = require("validator");

// creating variable for port (for easier testing)
const port = 3000;

// defining object to be parsed by EJS
const RESTAURANT = {
	name: "The Green Byte Bistro",
	isOpen: true,
	address: "742 Evergreen Rd, Mapleview, OS 45502",
	phone: "555-321-9876",
	menu: [
		{
			id: 1,
			name: "Quantum Quinoa Mushroom Burger",
			price: 13.0,
			rating: 4,
			category: "mains",
			details:
				"A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.",
		},
		{
			id: 2,
			name: "Binary Berry Cheesecake",
			price: 10.11,
			rating: 3,
			category: "desserts",
			details:
				"A creamy cheesecake bursting with flavor. A mix of berries in every byte.",
		},
		{
			id: 3,
			name: "Recursive Rigatoni",
			price: 17.0,
			rating: 5,
			category: "mains",
			details:
				"A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You'll keep coming back for more.",
		},
		{
			id: 4,
			name: "Pumpkin Pi Squared",
			price: 3.14,
			rating: 5,
			category: "desserts",
			details:
				"A delightful pumpkin dessert, squared and spiced to perfection.",
		},
		{
			id: 5,
			name: "Fibonacci String Bean Fries",
			price: 11.23,
			rating: 5,
			category: "sides",
			details:
				"Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.",
		},
	],
};

// root path HTTP request (connects to EJS template via render)
app.get("/", (req, res) => {
	res.render("home.ejs", RESTAURANT);
});

// menu path HTTP request (allows navigation to menu page)
app.get("/menu", (req, res) => {
	res.render("menu.ejs", RESTAURANT);
});

// category path HTTP request (more specific version of menu)
app.get("/menu/:category", (req, res) => {
	const categoryPath = req.params.category;
	const menuItems = {
		items: RESTAURANT.menu.filter((item) => item.category === categoryPath),
		categoryName: categoryPath,
	};
	res.render("category.ejs", menuItems);
});

// creates listener for HTTP requests (goes at bottom)
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
