import React, { useState } from 'react';
import './App.css';
import { QuestionCard } from './Components/QuestionCard';
import { fetchQuestions, Difficulty } from './API';

const TOTAL_QUESTIONS = 10;

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY ));
  

  const startQuiz = async () => { }
  const nextQuestion = async () => { }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => { }

  return (
    <div className="App">

      <h1>Quiz</h1>
      <button
        className='startQuiz'
        onClick={startQuiz}
      >
        Start Quiz
      </button>

      <p className='score'>
        Score
      </p>

      {/* <QuestionCard
        questionNum={number}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={ userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}

      <button
        className='nextQuestion'
        onClick={nextQuestion}
      >
        Next
      </button>
    </div>
  );
}

export default App;
