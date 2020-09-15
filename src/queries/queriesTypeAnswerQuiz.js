import { answerQuizFunctions } from '../controllers/controller.answerQuiz';
const { getAllAnswersQuiz } = answerQuizFunctions;

const queriesTypeAnswerQuiz = {
    answersQuiz: async (_, args, ctx) => {
        const { id_question_quiz } = args;
        return await getAllAnswersQuiz(id_question_quiz);
    }
}

module.exports = {
    queriesTypeAnswerQuiz
}