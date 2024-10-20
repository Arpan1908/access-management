const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
  personality: { type: String, required: true },
  organization: { type: String, required: true },
  date: { type: Date, required: true },
  topic: { type: String, required: true },
  attendedBy: { type: String, required: true }
});

module.exports = mongoose.model('Lecture', lectureSchema);
