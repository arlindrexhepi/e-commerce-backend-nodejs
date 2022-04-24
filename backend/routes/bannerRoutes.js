const express = require('express');
const router = express.Router();
const {
  getBanners,
  setBanner,
  updateBanner,
  deleteBanner,
} = require('../controllers/bannerControllers');

router.route('/').get(getBanners).post(setBanner);

router.route('/:id').put(updateBanner).delete(deleteBanner);

module.exports = router;
