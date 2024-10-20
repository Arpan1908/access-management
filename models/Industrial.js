const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  organizedBy: { type: String, required: true },
  date: { type: Date, required: true },
  industryName: { type: String, required: true },
  attendedBy: { type: String, required: true }
});

module.exports = mongoose.model('IndustrialTour', tourSchema);
