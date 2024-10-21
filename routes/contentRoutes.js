const express =  require('express')
const router = express.Router();
const authMiddleware =  require('../middleware/authMiddleware')
const {checkContentAccess} = require('../controllers/cotentController.js')


router.get('/access/:contentId/:permission',authMiddleware,checkContentAccess);

module.exports = router;