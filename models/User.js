const mongoose = require('mongoose');

// Schema to handle content access for users
const contentAccessSchema = new mongoose.Schema({
  contentType: { 
    type: String, 
    required: true 
  }, // E.g., 'ProjectProposal', 'Publication', 'Patent', etc.
  contentId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Content', // Reference to Content model
    required: true 
  }, // The actual reference to the specific content
  permissions: { 
    type: String, 
    enum: ['view', 'edit'], 
    required: true 
  } // Permissions: 'view' or 'edit'
});

// User schema
const userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  contact: { 
    type: String, 
    required: true 
  },
  department: String,
  college: String,
  password: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    required: true 
  }, // Role of the user (e.g., viewer, editor, etc.)
  contentAccess: [contentAccessSchema] // Array of content access objects with references
});

module.exports = mongoose.model('User', userSchema);
