const mongoose = require('mongoose');

const consultancySchema = new mongoose.Schema({
  orderNo: { type: String, required: true },
  facultyName: { type: String, required: true },
  companyName: { type: String, required: true },
  orderAmount: { type: Number, required: true },
  orderDate: { type: Date, required: true },
  status: { type: String, enum: ['Ongoing', 'Completed'], required: true }
});

module.exports = mongoose.model('Consultancy', consultancySchema);
