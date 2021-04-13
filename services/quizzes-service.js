let quizzes = require('./quizzes.json')

const findAllQuizzes = () => quizzes

const findQuizById = (qid) =>
    quizzes.find(quiz => quiz._id === qid)

module.exports  = {
    findAllQuizzes,
    findQuizById
}