// Controller for workouts -CRUD logic
var Workout = require('../models/workout');

// READ - show all workouts in a table
async function showList(req, res, next) {
  try {
    var workouts = await Workout.find().sort({ date: -1 });  // newest first
    // message is used to show "Workout deleted" etc. after an action
    res.render('workouts/list', { title: 'My Workouts', workouts: workouts, message: req.query.message });
  } catch (err) {
    console.log(err);
    res.render('workouts/list', { title: 'My Workouts', workouts: [], message: 'Could not load workouts.' });
  }
}

// CREATE
function showAddForm(req, res, next) {
  res.render('workouts/add', { title: 'Add Workout' });
}

// CREATE
async function addWorkout(req, res, next) {
  try {
    await Workout.create({
      exercise: req.body.exercise,
      category: req.body.category,
      sets:     req.body.sets,
      reps:     req.body.reps,
      duration: req.body.duration,
      date:     req.body.date,
      notes:    req.body.notes
    });
    res.redirect('/workouts?message=Workout added');
  } catch (err) {
    console.log(err);
    res.redirect('/workouts/add');
  }
}

// UPDATE - show the form filled in with the workout
async function showEditForm(req, res, next) {
  try {
    var workout = await Workout.findById(req.params.id);
    res.render('workouts/edit', { title: 'Edit Workout', workout: workout });
  } catch (err) {
    console.log(err);
    res.redirect('/workouts');
  }
}

// UPDATE - save the changes
async function editWorkout(req, res, next) {
  try {
    await Workout.findByIdAndUpdate(req.params.id, {
      exercise: req.body.exercise,
      category: req.body.category,
      sets:     req.body.sets,
      reps:     req.body.reps,
      duration: req.body.duration,
      date:     req.body.date,
      notes:    req.body.notes
    });
    res.redirect('/workouts?message=Workout updated');
  } catch (err) {
    console.log(err);
    res.redirect('/workouts');
  }
}

// DELETE - show the "Are you sure?" confirmation page
async function showDeletePage(req, res, next) {
  try {
    var workout = await Workout.findById(req.params.id);
    res.render('workouts/delete', { title: 'Delete Workout', workout: workout });
  } catch (err) {
    console.log(err);
    res.redirect('/workouts');
  }
}

// DELETE - remove the workout after the user clicks "Yes, delete"
async function deleteWorkout(req, res, next) {
  try {
    await Workout.findByIdAndDelete(req.params.id);
    res.redirect('/workouts?message=Workout deleted');
  } catch (err) {
    console.log(err);
    res.redirect('/workouts');
  }
}

module.exports = {
  showList: showList,
  showAddForm: showAddForm,
  addWorkout: addWorkout,
  showEditForm: showEditForm,
  editWorkout: editWorkout,
  showDeletePage: showDeletePage,
  deleteWorkout: deleteWorkout
};
