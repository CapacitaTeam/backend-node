import { questionQuizFunctions } from '../controllers/controller.questionQuiz';
const { createQuestionQuiz, updateQuestionQuiz } = questionQuizFunctions;

const mutationsTypeQuestionQuiz = {
    createQuestionQuiz: (_, args, ctx) => {
        return createQuestionQuiz(args);
    },
    updateQuestionQuiz: (_, args, ctx) => {
        return updateQuestionQuiz(args);
    }
}

module.exports = {
    mutationsTypeQuestionQuiz
}