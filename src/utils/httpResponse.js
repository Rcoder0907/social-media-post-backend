const okResponse = (statusCode, data, message) => {
  return {
    statusCode: statusCode,
    message: message,
    error: false,
    data: data || null,
  };
};

const errorResponse = (statusCode, err, message, reason, redirectTo) => {
  if (err && err.name === 'ValidationError') {
    statusCode = 400;
    for (const field in err.errors) {
      message = `Error : ${err.errors[field].message}`;
      break;
    }
  } else if (err && err.name === 'CastError') {
    err = null;
    message = 'Invalid input';
    statusCode = 400;
  }
  const error = process.env.NODE_ENV === 'production' ? true : err;
  return {
    statusCode,
    message,
    error,
    data: null,
    redirectTo,
  };
};

module.exports = {
  okResponse,
  errorResponse,
};
