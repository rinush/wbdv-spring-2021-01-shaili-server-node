const express = require('express')
const app = express()
const mongoose = require('mongoose');

const uri = "mongodb+srv://rinu:rinumongo6935@cluster0.seapw.mongodb.net/whiteboard?retryWrites=true&w=majority"

 mongoose.connect(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
 });



app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

const bodyParser = require('body-parser')
app.use(bodyParser.json())

require('./controllers/quiz-attempts-controller')(app)
require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
app.listen(3000);
