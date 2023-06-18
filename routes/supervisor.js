const express = require('express');
const path = require('path');


const router = express.Router();

const supervisorControler = require('../controllers/supervisor');


router.route('/')
   .get(supervisorControler.getLogin) //get request
   .post(supervisorControler.postLogin) // post request

router.get('/logout',supervisorControler.logout) //get request   

router.post('/chnagestatus',supervisorControler.postChnageStatus)// post change status

router.route('/addhotel')
      .get(supervisorControler.getAddHotel) // get request for hotel add page
      .post(supervisorControler.postAddHotel) // post request for hotel add to db

router.route('/search')
      .get(supervisorControler.getSearch)   // get request   
      .post(supervisorControler.postSearch) // post request

router.route('/update')
      .post(supervisorControler.getUpdate) //get update page for post request
      
router.route('/updateData')
      .post(supervisorControler.updatePrevData) // update prev data      


module.exports = router;