import { psql } from '../psqlAdapter';

const questionQuizFunctions = {

    getAllQuestionsQuiz: () => {
        const usersData = 'select id, name, clue, img, video, status from question_quiz';
        return psql.manyOrNone(usersData);
    }
}

module.exports = {
    questionQuizFunctions
}