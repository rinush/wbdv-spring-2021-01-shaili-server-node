module.exports = (app) => {
    const questionsService = require('../services/questions-service')

    const findAllQuestions = (req, res) => {
        questionsService.findAllQuestions()
            .then((questions) => {
                res.send(questions)
            })
    }

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params.qzid;
        questionsService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                res.send(questions)
            })
    }

    const findQuestionById = (req, res) => {
        const quid = req.params.qid;
        questionsService.findQuestionById(quid)
            .then((questions) => {
                res.send(questions)
            })
    }

    app.get("/api/questions", findAllQuestions);
    app.get("/api/quizzes/:qzid/questions", findQuestionsForQuiz);
    app.get('/api/questions/:qid', findQuestionById);
}