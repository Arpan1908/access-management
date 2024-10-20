// const mongoose = require('mongoose');

// // Define the Content schema
// const contentSchema = new mongoose.Schema({
//   title: { type: String, required: true }, // Title of the content
//   category: { type: String, required: true }, // Category of the content (e.g., Research Paper, Books)
//   documentLink: { type: String, required: true }, // Google Drive link or any document link
//   proofDocument: { type: String }, // Proof document field for additional verification links
//   status: {
//     type: String,
//     enum: ['pending', 'approved', 'rejected'],
//     default: 'pending'
//   }, // Approval status
//   createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // User who uploaded the content
//   assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // User assigned to approve/reject
//   approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // User who approved the content
//   createdAt: { type: Date, default: Date.now }, // Timestamp when content was created
//   updatedAt: { type: Date, default: Date.now } // Timestamp when content was last updated
// });

// // Middleware to set the updatedAt field before saving any document
// contentSchema.pre('save', function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

// module.exports = mongoose.model('Content', contentSchema);


const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // For generating unique content IDs

const contentSchema = new mongoose.Schema({
  contentId: {
    type: String,
    default: uuidv4, // Generate a unique content ID using UUID
    unique: true,
    required: true
  },
  title: { 
    type: String, 
    required: true 
  }, // Title of the content (e.g., Research Paper, Project Proposal)
  description: { 
    type: String 
  }, // Description or additional details of the content
   // Reference to the user who created the content
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
  
});

module.exports = mongoose.model('Content', contentSchema);
  


