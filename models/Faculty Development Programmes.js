const mongoose = require('mongoose');

const fdpSchema = new mongoose.Schema({
  organizedBy: { type: String, required: true },
  date: { type: Date, required: true },
  topic: { type: String, required: true },
  attendedBy: { type: String, required: true }, // Name of the person who attended
  department: { type: String, required: true } // Department of the attendee
});

module.exports = mongoose.model('FDP', fdpSchema);
