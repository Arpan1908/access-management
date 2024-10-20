const mongoose = require('mongoose');

const competitionSchema = new mongoose.Schema({
  eventDate: { type: Date, required: true },
  competitionType: { type: String, required: true },
  competitionName: { type: String, required: true }
});

module.exports = mongoose.model('Competition', competitionSchema);
