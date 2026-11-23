// Model for one workout
var mongoose = require('mongoose');

var workoutSchema = new mongoose.Schema({
  exercise: { type: String, required: true },  
  category: { type: String, required: true },  
  sets:     { type: Number },                  
  reps:     { type: Number },                  
  duration: { type: Number },                  
  date:     { type: Date, required: true },    
  notes:    { type: String }                   
});

module.exports = mongoose.model('Workout', workoutSchema);
