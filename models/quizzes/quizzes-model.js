const mongoose = require('mongoose')
const quizSchema = require('./quizzes-schema')
const quizModel = mongoose.model(
   'QuizzesModel',
   quizSchema
)
module.exports = quizModel