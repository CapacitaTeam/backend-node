const typeQuestionQuiz = `
type QuestionQuiz {
    id: ID!
    name: String
    clue: String
    img: String
    video: String
    status: Boolean
  }
`;

const queriesDefQuestionQuiz = `
  questionsQuiz: [QuestionQuiz]
`;

module.exports = {
  typeQuestionQuiz,
  queriesDefQuestionQuiz
}