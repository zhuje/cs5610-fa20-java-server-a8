// module.exports = (app) => {
//   const questions = [
//     {_id: "123", question: "What's your favorite color", quizId: "123"},
//     {_id: "234", question: "What's your favorite pet", quizId: "123"},
//     {_id: "345", question: "What's your favorite car", quizId: "123"},
//     {_id: "456", question: "What's your favorite food", quizId: "234"},
//     {_id: "567", question: "What's your favorite beach", quizId: "234"},
//     {_id: "678", question: "What's your favorite season", quizId: "345"},
//   ]
//
//   app.get("/quizzes/:qid/questions", (req, res) => {
//     const quizId = req.params["qid"]
//     const questionsForQuiz = questions.filter(question => question.quizId === quizId)
//     res.send(questionsForQuiz)
//   })
//
// }
//
// let quizzes = require('./quizzes.json') ;
// const findAllQuizzes = () => quizzes;
//
// const findQuizById = (quizId) =>
//     quizzes.find(quiz => quiz._id === quizId)
//
// module.exports = {
//   findAllQuizzes,
//   findQuizById
// }

let questions = require('./questions.json')

findQuestionsForQuiz = (quizId) =>
    questions.filter(question => question.quizId === quizId)

findAllQuestions = () =>
    questions

module.exports = {
    findQuestionsForQuiz,
    findAllQuestions
}
