const mongoose = require('mongoose');

const BannerSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a Banner title!'],
  },
  id: {
    type: String,
    required: [true, 'Please add a Banner id!'],
  },
  path: {
    type: String,
    required: [true, 'Please add a Banner path!'],
  },
});

module.exports = mongoose.model('Banner', BannerSchema);
