const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//import routes
const questions = require('./routes/api/questions');

const app = express();
const PORT = 5000;
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
	.then(() => console.log('DB connect...'))
	.catch(err => console.log(err));

app.use('/api/questions', questions);

app.listen(PORT, () => console.log('Connect at ' + PORT + ' port.'));