const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['Book', 'Journal', 'Conference', 'Book Chapter'], required: true }, // Can be 'Book', 'Journal', etc.
  paperName: { type: String },
  publisherOrConference: { type: String }, // Name of the Journal/Conference/Publisher
  isbnOrIssn: { type: String }, // ISBN/ISSN for books, optional for papers
  volIssuePages: { type: String }, // Volume No., Issue No., Pages, DOI
  monthYear: { type: String }, // Month and year of publication
  grade: { type: String, enum: ['A', 'B', 'C'] } // Grade A, B, or C
});

module.exports = mongoose.model('Publication', publicationSchema);
