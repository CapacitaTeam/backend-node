import { psql } from '../psqlAdapter';

const questionQuizFunctions = {

    getAllQuestionsQuiz: () => {
        const questionsData = 'select id, question, a, b, c, d, correct_answer, clue, img, video, status from question_quiz';
        return psql.manyOrNone(questionsData);
    }
    ,
    createQuestionQuiz: async (question) => {

        //console.log(question);

        const createQuestion = `INSERT INTO public.question_quiz (question, a, b, c, d, correct_answer, clue, img, video, status) values ('${question.question}', '${question.a}',
            '${question.b}',
            '${question.c}',
            '${question.d}',
            '${question.correct_answer}',
            '${question.clue}', 
            '${question.img}', 
            '${question.video}', 
            ${question.status})`;

        const resultado = await psql.any(createQuestion)
            .then((result) => {
                console.log(question);
                return question;
            })
            .catch((err) => {
                console.log(err)
                return err;
            });

        return resultado;
    }
}

module.exports = {
    questionQuizFunctions
}