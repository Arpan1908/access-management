// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const roleController = require('../controllers/roleController');
const authMiddleware = require('../middleware/authMiddleware');
// Super Admin login route
router.post('/superadmin/login', authController.superAdminLogin);

router.post('/users/add',userController.addUser);

router.post('/change-password', authMiddleware, userController.changePassword);

router.post('/login', authController.loginUser);


module.exports = router;
