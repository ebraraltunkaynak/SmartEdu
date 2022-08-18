const express = require('express');
const courseController = require('../controllers/courseControllers');


const router = express.Router();

router.route('/').post(courseController.createCourse); //localhost/course
router.route('/').get(courseController.getAllCourses); //localhost/course
router.route('/:slug').get(courseController.getCourse);
module.exports = router;