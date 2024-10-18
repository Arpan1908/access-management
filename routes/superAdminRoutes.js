// routes/superAdminRoutes.js
const express = require('express');
const router = express.Router();
const superAdminController = require('../controllers/superAdminController');
const superAdminMiddleware = require('../middleware/superAdminMiddleware');
const roleController = require('../controllers/roleController');
// Get all users (Super Admin only)
router.get('/users', superAdminMiddleware, superAdminController.getAllUsers);

// Get all roles (Super Admin only)
router.get('/roles', superAdminMiddleware, superAdminController.getAllRoles);

// Get all content (Super Admin only)
router.get('/content', superAdminMiddleware, superAdminController.getAllContent);

// Assign role to user (Super Admin only)
router.post('/assign-role', superAdminMiddleware, superAdminController.assignRole);

// Assign content access to user (Super Admin only)
router.post('/assign-content', superAdminMiddleware, superAdminController.assignContentAccess);

router.post('/addRole',roleController.addRole);



module.exports = router;
