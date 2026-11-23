// Database config file (Week 9 & 10 - MongoDB Atlas + Mongoose)
var mongoose = require('mongoose');

function connectDB() {
  mongoose.connect(process.env.MONGO_URI)
    .then(function() {
      console.log('Connected to MongoDB');
    })
    .catch(function(err) {
      console.log('MongoDB connection error: ' + err);
    });
}

module.exports = connectDB;
