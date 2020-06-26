const express = require('express');
const mongoose = require('mongoose');

//import routes
const questions = require('./routes/api/questions');

const CONNECTION_KEY = require('./config/keys');

const app = express();
const PORT = 5000;
app.use(express.json());

mongoose.connect(CONNECTION_KEY.URL)
	.then(() => console.log('DB connect...'))
	.catch(err => console.log(err));

app.use('/api/questions', questions);

app.listen(PORT, () => console.log('Connect at ' + PORT + ' port.'));