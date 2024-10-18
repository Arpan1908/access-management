const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  contact: { type: String, required: true },
  department: String,
  college: String,
  password: { type: String, required: true },
  role: { type: String, required: true }, // Change to a string
  contentAccess: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Content' }]
});
module.exports = mongoose.model('User', userSchema);
