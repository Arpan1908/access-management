const mongoose = require('mongoose');

const awardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true }
});

module.exports = mongoose.model('Award', awardSchema);
