const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
  linkedinId: String,
  name: String,
  email: String,
  skills: [String],
  experience: String,
  location: String,
  preferredJobRoles: [String],
});

module.exports = mongoose.model('Candidate', CandidateSchema);