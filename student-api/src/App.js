const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Use the student routes
app.use('/', studentRoutes); // Or you can use '/api' as the prefix

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
