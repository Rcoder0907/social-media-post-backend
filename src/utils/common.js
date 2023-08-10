const { customAlphabet } = require('nanoid');

const generateNanoIdWithPrefix = (prefix = 'other') => {
  const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 10);
  const generateId = nanoid();
  return `${prefix}_${generateId}`;
};

module.exports = {
  generateNanoIdWithPrefix,
};
