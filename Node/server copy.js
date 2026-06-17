// server.js
const express = require('express');
const app = express();

// GET Routes
app.get('/', async (req, res) => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users/');
		const user = await response.json();
		console.log(user);
		res.json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Server Start
app.listen(3000, () => {
	console.log('Server running on http://localhost:3000');
});
