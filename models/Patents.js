const mongoose = require('mongoose');

const patentSchema = new mongoose.Schema({
  department: { type: String, required: true },
  name: { type: String, required: true }, // Name of the person
  designation: { type: String, required: true },
  topic: { type: String, required: true }, // Patent topic
  filingDate: { type: Date, required: true },
  type: { type: String, enum: ['National', 'International'], required: true } // National or International
});

module.exports = mongoose.model('Patent', patentSchema);
