const express = require('express');
const router = express.Router();
const { createStudent } = require('../controllers/studentController');

// Define the POST route for creating a student
router.post('/students', createStudent);

module.exports = router;
