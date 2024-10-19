const express = require('express');
const cors = require('cors');

// Initialize the app
const app = express();

// Middleware
app.use(cors());

// Define a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});