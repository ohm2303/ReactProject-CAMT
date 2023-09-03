const express = require('express');
const userController = require('./userController'); 

const userRoute = express.Router();

userRoute.route('/').post(userController.checkUser);
userRoute.route('/checkcookie').post(userController.checkCokkie);

userRoute.route('/allReview').get(userController.getAllReview);
userRoute.route('/Review/:idNovel').get(userController.getReviewByIdNovel);
userRoute.route('/Review').post(userController.passReviewByIdNovel);
// userRoute.route('/getRating/:idNovel').get(userController.getRating);
userRoute.route('/sellSecret/:id').get(userController.getsecret);
// basket
userRoute.route('/basket/:idUser').get(userController.getbasketByIdNovel);
userRoute.route('/basket/del/:idnovel').delete(userController.deletebasketById);
//buy
userRoute.route('/myCollection/buy/:idUser').get(userController.pullidnovel);
module.exports = userRoute;