const express = require('express');
const userController = require('./userController'); 

const userRoute = express.Router();

userRoute.route('/allReview').get(userController.getAllReview);
userRoute.route('/sellSecret/:id').get(userController.getsecret);
module.exports = userRoute;