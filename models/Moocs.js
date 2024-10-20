const mongoose = require('mongoose');

const moocSchema = new mongoose.Schema({
  facultyName: { type: String, required: true },
  moduleName: { type: String, required: true },
  platform: { type: String, required: true },
  launchDate: { type: Date, required: true },
  documentLink: { type: String, required: true }
});

module.exports = mongoose.model('MOOC', moocSchema);
