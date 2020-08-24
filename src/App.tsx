import React, { useState } from 'react';
import './App.css';
import { QuestionCard } from './Components/QuestionCard';
import { fetchQuestions, Difficulty, QuestionState } from './API';

const TOTAL_QUESTIONS = 10;

type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: String
}

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);


  console.log(questions)

  const startQuiz = async () => {
    setLoading(true)
    setGameOver(false)
    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
  }


  const nextQuestion = async () => { }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => { }

  return (
    <div className="App">

      <h1>Quiz</h1>

      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button
          className='startQuiz'
          onClick={startQuiz}
        >
          Start Quiz
        </button>) : null}

      {!gameOver ? (
        <p className='score'>
          Score
        </p>) : null}

      {loading ? (
        <p>
          Loading...
        </p>) : null}

      {!loading && !gameOver ? (
        <QuestionCard
          questionNum={number}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />) : null}

      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS -1 ? (
        <button
          className='nextQuestion'
          onClick={nextQuestion}
        >
          Next
        </button>) : null}
    </div>
  );
}

export default App;
