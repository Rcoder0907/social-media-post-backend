const PhotoModel = require('./photo.model');
const ApiError = require('../utils/ApiError');
const { httpStatus } = require('../utils/const');

/**
 * add photo
 * @param {Object} photoBody
 * @returns {Promise<PhotoModel>}
 */
const addPhoto = async (photoBody) => {
  return PhotoModel.create(photoBody);
};


/**
 * add comment
 * @param {ID} photoId
 * @param {Object} updateBody
 * @returns {Promise<PhotoModel>}
 */
const addCommentToPhoto = async (photoId, updateBody) => {
  await PhotoModel.findOneAndUpdate({ _id: photoId }, updateBody, {
    new: true,
  });
};

/**
 * getPhotoById
 * @param {ID} photoId
 * @returns {Promise<PhotoModel>}
 */
const getPhotoById = async (id) => {
  return await PhotoModel.findById(id);
};

/**
 * getPhotos
 * @returns {Promise<PhotoModel>}
 */
const getPhotos = async () => {
  return await PhotoModel.find({}).sort('-createdAt');
};

module.exports = {
  addPhoto,
  getPhotoById,
  addCommentToPhoto,
  getPhotos
};
