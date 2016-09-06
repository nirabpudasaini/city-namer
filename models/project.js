const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  founding_user_id: String,
  founding_user_osm_id: String,
  fromLanguages: [String],
  toLanguage: String,
  directions: String,
  saved: Date,
  lat: Number,
  lng: Number,
  zoom: Number
});

module.exports = mongoose.model('Project', projectSchema);
