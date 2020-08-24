export const fetchQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    console.log(data)
};

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'meduim',
    HARD = 'hard'
};

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
};


export type QuestionState = Question & { answers: string[] };