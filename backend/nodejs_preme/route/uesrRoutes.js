const express = require('express');
const userController = require('../control/userController'); 

const userRoute = express.Router();

userRoute.route('/allReview').get(userController.getAllReview);
userRoute.route('/Review/:idNovel').get(userController.getReviewByIdNovel);
// userRoute.route('/getRating/:idNovel').get(userController.getRating);
userRoute.route('/sellSecret/:id').get(userController.getsecret);
// basket
userRoute.route('/basket/:idUser').get(userController.getbasketByIdNovel);
userRoute.route('/basket/del/:idnovel').delete(userController.deletebasketById);
module.exports = userRoute;