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
const User = require('../models/User');

// Middleware to check if the user has edit permission
const checkEditPermission = async (req, res, next) => {
  const {  documentId } = req.params;  // Ensure schemaType is defined
  const userId = req.user.id;

  try {
    // Validate schemaType and documentId
    if ( !documentId) {
      return res.status(400).json({ msg: 'Invalid request. Schema type or document ID missing.' });
    }

    let document;
    const user = await User.findById(userId);  // Fetch the user with their contentAccess

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Check if the user has content access for the given documentId in contentAccess array
    const accessEntry = user.contentAccess.find(
      (access) =>
        access.contentId.toString() === documentId &&
        access.contentType   // Check if contentType is defined
    );

    if (!accessEntry) {
      return res.status(403).json({ msg: 'Access denied. No permission for this document.' });
    }

    // Check if the user has 'edit' permission
    if (accessEntry.permissions !== 'edit') {
      return res.status(403).json({ msg: 'Access denied. You do not have permission to edit this document.' });
    }

    // Fetch the document based on schema type and documentId (contentId)
    if (schemaType === 'projectproposal') {
      document = await Content.findById(documentId);  // Assuming ProjectProposal is part of Content schema
    } else if (schemaType === 'workshop') {
      document = await Workshop.findById(documentId);
    } else if (schemaType === 'award') {
      document = await Award.findById(documentId);
    } else if (schemaType === 'competition') {
      document = await Competition.findById(documentId);
    } else if (schemaType === 'conference') {
      document = await Conference.findById(documentId);
    } else if (schemaType === 'consultancy') {
      document = await Consultancy.findById(documentId);
    } else if (schemaType === 'fdp') {
      document = await FDP.findById(documentId);
    } else if (schemaType === 'hackathon') {
      document = await Hackathon.findById(documentId);
    } else if (schemaType === 'industrial-tour') {
      document = await IndustrialTour.findById(documentId);
    }

    if (!document) {
      return res.status(404).json({ msg: 'Document not found' });
    }

    console.log(`User ${user.email} has permission to edit ${schemaType}: ${documentId}`);
    next();  // Allow the user to proceed if everything is valid
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = checkEditPermission;
