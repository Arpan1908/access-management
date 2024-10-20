const mongoose = require('mongoose');

const projectProposalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  principalInvestigator: { type: String, required: true },
  coPrincipalInvestigator: { type: String },
  grantAmount: { type: Number },
  submissionDate: { type: Date },
  grantingDate: { type: Date },
  status: { type: String, enum: ['Applied', 'Under Review', 'Granted'] }
});

module.exports = mongoose.model('ProjectProposal', projectProposalSchema);
