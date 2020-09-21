const typeQuestionQuiz = `
type QuestionQuiz {
    id: ID
    question: String!
    a: String!
    b: String!
    c: String!
    d: String!
    correct_answer: String!
    clue: String
    img: String
    video: String
    status: Boolean
  }
`;

const queriesDefQuestionQuiz = `
  questionsQuiz: [QuestionQuiz]
`;

const mutationsDefQuestionQuiz = `  
  createQuestionQuiz(id: Int, question: String!, a: String!, b: String!, c: String!, d: String!, correct_answer: String!, clue: String, img: String, video: String, status: Boolean): QuestionQuiz
`;

module.exports = {
  typeQuestionQuiz,
  queriesDefQuestionQuiz,
  mutationsDefQuestionQuiz
}