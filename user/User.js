var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
  email: {
    type:String,
    required:true,
    index:true,
    unique:true
  },
  password: {
    type:String,
    required:true
  }
});

var QuestionSchema = new mongoose.Schema({
  question: {
    type:String,
    required:true
  },
  yes_meta: {
    type:String
  },
  no_meta: {
    type:String
  },
  scores: {
    dimensions: { type: [Number]},
    updates: {type: [Date], default: Date.now}
  },
  views: {
    keys: {type: [String]},
    values: {type: [Number]},
    updates: {type: Date, default: Date.now}
  }
});


mongoose.model('User', UserSchema);
mongoose.model('Question', QuestionSchema);
module.exports.User = mongoose.model('User');
module.exports.Question = mongoose.model('Question');
