const express = require('express');
const imageRouter = express.Router();
const bodyParser = require('body-parser')
const cors = require('cors');


const { sortedImages, paginateCall } = require('../controllers/imageController');



imageRouter.use(cors());
imageRouter.use(bodyParser.json());
imageRouter.use(bodyParser.urlencoded({ extended: true }));

// all routes
imageRouter.get('/images/:category', sortedImages);
imageRouter.get('/images/:category/:page', paginateCall);

module.exports = imageRouter;