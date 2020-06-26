const express = require('express');
const Question = require('../../models/Questions');

const router = express.Router();

router.get('/test', (req, res) => {
	res.json({
		  msg: 'The questions router is working.'
	})
});
router.get('/add', (req, res) => {
	Question.findOne({question: req.body.question})
	    .then(question => {
	        if(question) {
			return res.status(400).json({error: 'This question is already in the DB.'})
		  } else {
			const newQuestion = new Question({
			    question: req.body.question,
			    correctAns: req.body.correctAns,
			    ans: req.body.ans
			});
			newQuestion.save()
			    .then( () => res.json({reponse: 'The question was added.'}))
			    .catch( err => console.log(err));

		  }
	    })
});

module.exports = router;
