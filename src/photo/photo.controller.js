const catchAsync = require('../utils/catchAsync');
const { httpStatus } = require('../utils/const');
const photoService = require('./photo.service');
const { okResponse } = require('../utils/httpResponse');

const addPhoto = catchAsync(async (req, res) => {
  const requestBody = { fileName: req.file.filename };
  const photo = await photoService.addPhoto(requestBody);
  const result = okResponse(httpStatus.CREATED, photo, 'photo added successfully');
  return res.status(result.statusCode).json(result);
});

const getPhotos = catchAsync(async (req, res) => {
  let photos = await photoService.getPhotos();
  photos = photos.map(photo => photo.toUserJson());
  const result = okResponse(httpStatus.OK, photos, 'photos fetched successfully');
  return res.status(result.statusCode).json(result);
});

const addComment = catchAsync(async (req, res) => {
  req.body.comments.createdAt = new Date();
  const photo = await photoService.getPhotoById(req.params.photoId);
  const comments = [...photo.comments, { ...req.body.comments }];
  const comment = await photoService.addCommentToPhoto(req.params.photoId, {comments});
  const result = okResponse(httpStatus.OK, comment, 'comment added successfully');
  return res.status(result.statusCode).json(result);
});

module.exports = {
  addPhoto,
  addComment,
  getPhotos
};
