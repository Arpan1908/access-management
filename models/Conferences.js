const mongoose = require('mongoose');

const conferenceSchema = new mongoose.Schema({
  organizingInstitute: { type: String, required: true },
  topic: { type: String, required: true },
  date: { type: Date, required: true },
  attendedBy: { type: String, required: true }
});

module.exports = mongoose.model('Conference', conferenceSchema);
