import { questionQuizFunctions } from '../controllers/controller.questionQuiz';
const { getAllQuestionsQuiz } = questionQuizFunctions;

const queriesTypeQuestionQuiz = {
    questionsQuiz: async () => {
        return await getAllQuestionsQuiz();
    }
}

module.exports = {
    queriesTypeQuestionQuiz
}