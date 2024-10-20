const mongoose = require('mongoose');

const triMentoringSchema = new mongoose.Schema({
  organizedBy: { type: String, required: true },
  date: { type: Date, required: true },
  takenBy: { type: String, required: true }, // Person who conducted it
  attendedBy: { type: String, required: true } // Name of the attendee
});

module.exports = mongoose.model('TriMentoring', triMentoringSchema);
