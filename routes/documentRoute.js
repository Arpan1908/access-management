const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const checkEditPermission = require('../middleware/checkEditPermission');
const updateController = require('../controllers/updateController');

// Route to update Content
router.put('/content/:documentId', authMiddleware,  updateController.updateContent);

// Route to update Workshop
router.put('/workshop/:documentId', authMiddleware,  updateController.updateWorkshop);
router.get('/workshop/:documentId', authMiddleware, updateController.updateWorkshop);

// Route to update Award
router.put('/award/:documentId', authMiddleware,  updateController.updateAward);

// Route to update Competition
router.put('/competition/:documentId', authMiddleware, updateController.updateCompetition);

// Add other routes for different schemas (like Conference, Consultancy, etc.)
router.put('/conference/:documentId', authMiddleware,  updateController.updateConference);
router.put('/consultancy/:documentId', authMiddleware,  updateController.updateConsultancy);
router.put('/fdp/:documentId', authMiddleware,  updateController.updateFDP);
router.put('/hackathon/:documentId', authMiddleware,  updateController.updateHackathon);
router.put('/industrialtour/:documentId', authMiddleware,  updateController.updateIndustrialTour);





const {
    insertContent,
    insertWorkshop,
    insertAward,
    insertCompetition,
    insertConference,
    insertConsultancy,
    insertFDP,
    insertHackathon,
    insertIndustrialTour
  } = require('../controllers/updateController'); // Adjust the path accordingly
  
  // Insert routes
  router.post('/content',authMiddleware, insertContent);
  router.post('/workshop', authMiddleware,insertWorkshop);
  router.post('/award',authMiddleware, insertAward);
  router.post('/competition',authMiddleware, insertCompetition);
  router.post('/conference',authMiddleware, insertConference);
  router.post('/consultancy',authMiddleware, insertConsultancy);
  router.post('/fdp',authMiddleware, insertFDP);
  router.post('/hackathon', authMiddleware,insertHackathon);
  router.post('/industrial-tour',authMiddleware, insertIndustrialTour);

module.exports = router;
