const express = require('express');
const photoRoute = require('../photo/photo.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/photos',
    route: photoRoute,
  },
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
