import { psql } from '../psqlAdapter';

const answerQuizFunctions = {

    getAllAnswersQuiz: (id_question_quiz = 0) => {
        const usersData = `select id, description, id_question_quiz, status, correct from answer_quiz where id_question_quiz = ${id_question_quiz}`;
        return psql.manyOrNone(usersData);
    }
}

module.exports = {
    answerQuizFunctions
}