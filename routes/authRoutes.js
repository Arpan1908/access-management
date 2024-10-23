// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const roleController = require('../controllers/roleController');
const authMiddleware = require('../middleware/authMiddleware');
const getUserController = require('../controllers/getUserController');
// Super Admin login route
router.post('/superadmin/login', authController.superAdminLogin);

router.post('/users/add',userController.addUser);

router.post('/change-password', authMiddleware, userController.changePassword);

router.post('/login', authController.loginUser);


router.get('/user/permissions', authMiddleware, getUserController.getUserPermissions);

// View other users' documents in the same department (based on shared department)
router.get('/user/documents', authMiddleware, getUserController.getDocumentsByDepartment);




module.exports = router;
