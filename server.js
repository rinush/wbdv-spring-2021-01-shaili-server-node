
const express = require('express')
const app = express()

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


const quizzesController = require('./controllers/quizzes-controller')
quizzesController(app)

const questionsController = require('./controllers/question-controller')
questionsController(app)

app.listen(3000)