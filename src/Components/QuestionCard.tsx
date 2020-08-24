import React from 'react'


type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNum: Number;
    totalQuestions: Number;
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
                    <div>
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
