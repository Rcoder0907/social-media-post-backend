const mongoose = require('mongoose');

const photoSchema = mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
      trim: true,
    },
    comments: [{
      text: String,
      createdAt: Date,
    }],
  },
  {
    timestamps: true,
  }
);

photoSchema.methods.toUserJson = function() {
  const data = {
    ...this.toJSON(),
  };
  return data;
};


const PhotoModel = mongoose.model('photo', photoSchema);

module.exports = PhotoModel;
