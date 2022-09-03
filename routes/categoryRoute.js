const express = require('express');
const categoryController = require('../controllers/categoryControllers');


const router = express.Router();

router.route('/').post(categoryController.createCategory); //localhost/categories
router.route('/:id').delete(categoryController.deleteCategory); //delete category

module.exports = router;