import { questionQuizFunctions } from '../controllers/controller.questionQuiz';
const { createQuestionQuiz } = questionQuizFunctions;

const mutationsTypeQuestionQuiz = {
    createQuestionQuiz: (_, args, ctx) => {
        return createQuestionQuiz(args);
    }
}

module.exports = {
    mutationsTypeQuestionQuiz
}