const express = require('express');
const userController = require('./userController'); 

const userRoute = express.Router();

userRoute.route('/').get(userController.getAllNovels);

module.exports = userRoute;