import { psql } from '../psqlAdapter';

const questionQuizFunctions = {

    getAllQuestionsQuiz: () => {
        const questionsData = 'select id, question, a, b, c, d, correct_answer, clue, img, video, status from question_quiz ORDER BY id ASC';
        return psql.manyOrNone(questionsData);
    }
    ,
    createQuestionQuiz: async (question) => {

        const createQuestion = `INSERT INTO public.question_quiz (question, a, b, c, d, correct_answer, clue, img, video, status) values ('${question.question}', '${question.a}',
            '${question.b}','${question.c}','${question.d}','${question.correct_answer}','${question.clue}', 
            '${question.img}','${question.video}',${question.status})`;

        const resultado = await psql.any(createQuestion)
            .then((result) => {
                //console.log(question);
                return question;
            })
            .catch((err) => {
                //console.log(err)
                return err;
            });

        return resultado;
    }
    ,
    updateQuestionQuiz: async (question) => {

        const updateQuestion = `UPDATE public.question_quiz SET
        question = '${question.question}',a = '${question.a}',b = '${question.b}',c = '${question.c}', 
        d = '${question.d}',correct_answer = '${question.correct_answer}',clue = '${question.clue}', 
        img = '${question.img}',video = '${question.video}',status = ${question.status} WHERE ID = ${question.id}`;

        const resultado = await psql.any(updateQuestion)
            .then((result) => {
                //console.log(question);
                return question;
            })
            .catch((err) => {
                //console.log(err)
                return err;
            });

        return resultado;
    }
}

module.exports = {
    questionQuizFunctions
}