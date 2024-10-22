const {
    Content,
    Workshop,
    Award,
    Competition,
    Conference,
    Consultancy,
    FDP,
    Hackathon,
    IndustrialTour
  } = require('../models/Content');
// Import other models as needed

// Middleware to check if the user has edit permission
const checkEditPermission = async (req, res, next) => {
  const { schemaType, documentId } = req.params;
  const userId = req.user.id;

  try {
    let document;

    // Check the document type and find the corresponding record
    if (schemaType === 'content') {
      document = await Content.findById(documentId);
    } else if (schemaType === 'workshop') {
      document = await Workshop.findById(documentId);
    }else if (schemaType === 'award') {
        document = await Award.findById(documentId);
    }
    // Add other schemas here as necessary

    if (!document) {
      return res.status(404).json({ msg: 'Document not found' });
    }

    // Check if the user has permission to edit the document
    if (document.assignedTo.toString() !== userId && !req.user.role.permissions.includes('edit')) {
      return res.status(403).json({ msg: 'Access denied. You do not have permission to edit this document.' });
    }

    next();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = checkEditPermission;
