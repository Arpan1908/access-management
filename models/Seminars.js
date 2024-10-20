const mongoose = require('mongoose');

const seminarSchema = new mongoose.Schema({
  organizingInstitute: { type: String, required: true },
  topic: { type: String, required: true },
  date: { type: Date, required: true },
  attendedBy: { type: String, required: true } // Name of the attendee
});

module.exports = mongoose.model('Seminar', seminarSchema);
