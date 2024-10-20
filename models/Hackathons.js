const mongoose = require('mongoose');

const hackathonSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventDate: { type: Date, required: true },
  participantsCount: { type: Number, required: true }
});

module.exports = mongoose.model('Hackathon', hackathonSchema);
