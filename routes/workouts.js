// Routes for workouts - each route calls a function in the controller
var express = require('express');
var router = express.Router();
var workoutController = require('../controllers/workoutController');

// READ - list of all workouts
router.get('/', workoutController.showList);

// CREATE
router.get('/add', workoutController.showAddForm);
router.post('/add', workoutController.addWorkout);

// UPDATE
router.get('/edit/:id', workoutController.showEditForm);
router.post('/edit/:id', workoutController.editWorkout);

// DELETE (first a confirmation page, then the real delete)
router.get('/delete/:id', workoutController.showDeletePage);
router.post('/delete/:id', workoutController.deleteWorkout);

module.exports = router;
