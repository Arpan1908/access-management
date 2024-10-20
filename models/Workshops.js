const mongoose = require('mongoose');

const workshopSchema = new mongoose.Schema({
  organizingInstitute: { type: String, required: true },
  name: { type: String, required: true }, // Name of the workshop
  date: { type: Date, required: true },
  attendedBy: { type: String, required: true }
});

module.exports = mongoose.model('Workshop', workshopSchema);
