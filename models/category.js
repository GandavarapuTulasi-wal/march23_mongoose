var mongoose = require('mongoose');
var CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, maxLength: 100 },
  description: { type: String, required: true, maxLength: 500 },
});
module.exports = mongoose.model('Category', CategorySchema);
