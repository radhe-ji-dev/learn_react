// server.js
const express = require('express');
const app = express();

// GET Routes
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/about', (req, res) => {
	res.json({ name: 'My App', version: '1.0' });
});

// URL Parameter
app.get('/user/:id', (req, res) => {
	res.json({ userId: req.params.id });
});

// Query String  (?name=Ravi)
app.get('/search', (req, res) => {
	res.json({ query: req.query.name });
});

// Server Start
app.listen(3000, () => {
	console.log('Server running on http://localhost:3000');
});
