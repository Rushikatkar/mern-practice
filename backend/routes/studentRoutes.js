const {StudentInfo, StudentgetInfo} = require('../controllers/studentController');

const express = require('express');
const router= express.Router();


router.post('/student', StudentInfo);
router.get('/student', StudentgetInfo);
module.exports= router;


