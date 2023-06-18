const express = require('express');
const path = require('path');

const router = express.Router();

const userControler = require('../controllers/user');

router.get('/',userControler.getHome); //home page 

router.route('/login')
       .get(userControler.getLogin) // get request for login
       .post(userControler.postLogin)// post request for login

router.route('/createaccount') 
       .get(userControler.getCreateAccount)    //get request for create account   
       .post(userControler.postCreateAccount); //post request for create account   


router.route('/services')
    .get(userControler.authentication, userControler.getservices) //get request for Category  
    .post(userControler.postservices) //post request form the category
router.route('/boookingservice')
    .post(userControler.postBookingservice) //post booking data 

router.route('/statusservices')
    .post(userControler.poststatusservices);


router.route('/category')
       .get(userControler.authentication,userControler.getCategory) //get request for Category  
       .post(userControler.postCategory) //post request form the category
router.route('/boooking')
       .post(userControler.postBooking) //post booking data    
       
router.route('/status')
       .post(userControler.postStatus); 

router.route('/showStatus')
       .get(userControler.authentication,userControler.getShowStatus);// get show status

router.post('/deletereq', userControler.deleteBooking, userControler.getShowStatus);  

router.post('/deletereqservice', userControler.deleteservice, userControler.getShowStatus);    

       
router.get('/contact',userControler.getContact);       

router.get('/logout',userControler.logout); //logout   
router.route('/boysRooms') 
       .get(userControler.getBoysRoomsPage)      
router.route('/girlsRooms') 
       .get(userControler.getGirlRoomsPage)      

module.exports = router;