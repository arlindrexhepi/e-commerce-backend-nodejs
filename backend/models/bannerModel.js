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

const BannersSchema = mongoose.Schema({
  desktop: {
    type: Array,
    of: BannerSchema,
    required: true,
  },
  mobile: {
    type: Array,
    of: BannerSchema,
    required: true,
  },
});

module.exports = mongoose.model('Banner', BannersSchema);
