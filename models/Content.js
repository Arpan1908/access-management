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


// const mongoose = require('mongoose');
// const { v4: uuidv4 } = require('uuid'); // For generating unique content IDs

// const contentSchema = new mongoose.Schema({
//   contentId: {
//     type: String,
//     default: uuidv4, // Generate a unique content ID using UUID
//     unique: true,
//     required: true
//   },
//   title: { 
//     type: String, 
//     required: true 
//   }, // Title of the content (e.g., Research Paper, Project Proposal)
//   description: { 
//     type: String 
//   }, // Description or additional details of the content
//    // Reference to the user who created the content
//   createdAt: { 
//     type: Date, 
//     default: Date.now 
//   }
  
// });

// module.exports = mongoose.model('Content', contentSchema);
  


const mongoose = require('mongoose');

// Content Schema
const contentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  documentLink: { type: String, required: true },
  proofDocument: { type: String },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // The user who is assigned the content
  department: { type: String, required: true } // Add department field for easy filtering
});
const Content = mongoose.model('Content', contentSchema);

// Workshop Schema
const workshopSchema = new mongoose.Schema({
  organizingInstitute: { type: String,  },
  name: { type: String,  }, // Name of the workshop
  date: { type: Date,  },
  attendedBy: { type: String,  },
  department: { type: String, required: true },
  documentLink: { type: String, },
});
const Workshop = mongoose.model('Workshop', workshopSchema);

// Award Schema
const awardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  department: { type: String, required: true },
  documentLink: { type: String, },
});
const Award = mongoose.model('Award', awardSchema);

// Competition Schema
const competitionSchema = new mongoose.Schema({
  eventDate: { type: Date, required: true },
  competitionType: { type: String, required: true },
  competitionName: { type: String, required: true },
  department: { type: String, required: true },
  documentLink: { type: String, },
});
const Competition = mongoose.model('Competition', competitionSchema);

// Conference Schema
const conferenceSchema = new mongoose.Schema({
  organizingInstitute: { type: String, required: true },
  topic: { type: String, required: true },
  date: { type: Date, required: true },
  attendedBy: { type: String, required: true },
  department: { type: String, required: true },
  documentLink: { type: String, },
});
const Conference = mongoose.model('Conference', conferenceSchema);

// Consultancy Schema
const consultancySchema = new mongoose.Schema({
  orderNo: { type: String, required: true },
  facultyName: { type: String, required: true },
  companyName: { type: String, required: true },
  orderAmount: { type: Number, required: true },
  orderDate: { type: Date, required: true },
  department: { type: String, required: true },
  status: { type: String, enum: ['Ongoing', 'Completed'], required: true },
  documentLink: { type: String, },
});
const Consultancy = mongoose.model('Consultancy', consultancySchema);

// FDP Schema
const fdpSchema = new mongoose.Schema({
  organizedBy: { type: String, required: true },
  date: { type: Date, required: true },
  topic: { type: String, required: true },
  attendedBy: { type: String, required: true }, // Name of the person who attended
  department: { type: String, required: true },
  
  documentLink: { type: String, }, // Department of the attendee,
});
const FDP = mongoose.model('FDP', fdpSchema);

// Hackathon Schema
const hackathonSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventDate: { type: Date, required: true },
  department: { type: String, required: true },
  participantsCount: { type: Number, required: true },
  documentLink: { type: String, },
});
const Hackathon = mongoose.model('Hackathon', hackathonSchema);

// Industrial Tour Schema
const tourSchema = new mongoose.Schema({
  organizedBy: { type: String, required: true },
  date: { type: Date, required: true },
  industryName: { type: String, required: true },
  department: { type: String, required: true },
  attendedBy: { type: String, required: true },
  documentLink: { type: String, },
});
const IndustrialTour = mongoose.model('IndustrialTour', tourSchema);

// Export all models
module.exports = {
  Content,
  Workshop,
  Award,
  Competition,
  Conference,
  Consultancy,
  FDP,
  Hackathon,
  IndustrialTour
};

