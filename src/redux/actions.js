
export const START_QUIZ = 'START_QUIZ';
export const START_QUIZ_BY_QUESTION = 'START_QUIZ_BY_QUESTION';
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const SCORE = 'SCORE';
export const FINISH_QUIZ = 'FINISH_QUIZ';

export const startQuiz = (title) => ({
  type: START_QUIZ,
  payload: title,
});

export const startQuizByQuestion = (title, question) => ({
  type: START_QUIZ_BY_QUESTION,
  payload: {
    title, question
  }
});

export const correct = () => ({ type: SCORE });
export const nextQuestion = () => ({ type: NEXT_QUESTION });
export const finishQuiz = () => ({ type: FINISH_QUIZ });