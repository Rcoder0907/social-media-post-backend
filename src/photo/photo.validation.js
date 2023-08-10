const Joi = require('joi');

const addComment = {
  comment: Joi.object().keys({
    text: Joi.string().required(),
  }),
};

module.exports = {
  addComment,
};
