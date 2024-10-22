const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // Assuming the path is correct
const cotentController = require('../controllers/cotentController'); // Correct import for contentController

// Route to check content access
router.get('/access/:contentId/:permission', authMiddleware, cotentController.checkContentAccess);

// Route to get content accessible by users in the same department
router.get('/department-content', authMiddleware, cotentController.getDepartmentContent);

module.exports = router;
