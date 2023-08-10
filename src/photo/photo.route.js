const fs = require('fs');
const express = require('express');
const multer = require('multer');
const validate = require('../middlewares/validate');
const photoValidation = require('./photo.validation');
const photoController = require('./photo.controller');

const router = express.Router();

const uploadDirectory = './uploads'; // Specify the correct path
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

router.route('/').get(photoController.getPhotos);

router.route('/').post(upload.single('photo'), photoController.addPhoto);

router
  .route('/:photoId/comments')
  .patch(validate(photoValidation.addComment), photoController.addComment);

module.exports = router;
