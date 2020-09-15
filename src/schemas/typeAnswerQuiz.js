const typeAnswerQuiz = `
type AnswerQuiz {
    id: ID!
    description: String
    id_question_quiz: Int
	  status: Boolean
	  correct: Boolean
  }
`;

const queriesDefAnswerQuiz = `
  answersQuiz(id_question_quiz: Int): [AnswerQuiz]
`;

module.exports = {
  typeAnswerQuiz,
  queriesDefAnswerQuiz
}