import React from 'react'


type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNum: number;
    totalQuestions: number;
}


export const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNum, totalQuestions }) => {
    return (
        <div>
            Question Card
            <p>
                Question {questionNum} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map((answer) => {
                    return <div>
                        <button
                        disabled={userAnswer}
                        onClick={callback}
                        >
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                })}
            </div>

        </div>
    )
}
