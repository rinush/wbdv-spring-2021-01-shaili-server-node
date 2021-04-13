let questions = require('./questions.json')

findQuestionsForQuiz = (qid) =>
    questions.filter(question => question.quizId === qid)

module.exports = {
    findQuestionsForQuiz
}