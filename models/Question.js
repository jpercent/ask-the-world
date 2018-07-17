var mongoose = require('mongoose');

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

mongoose.model('Question', QuestionSchema);
module.exports = mongoose.model('Question');
