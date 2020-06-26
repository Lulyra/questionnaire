const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema(
  {
	question: {
	    type: String,
	    required: true
	},
	correctAns: {
	    type: String,
	    required: true
	},
	ans: {
	    type: [String],
	    required: true
	}
  }
);

module.exports = Question = mongoose.model('questions', QuestionSchema);