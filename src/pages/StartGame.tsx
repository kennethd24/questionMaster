import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

export default function StartGame() {
  const { name } = useParams();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [counter, setCounter] = useState(10);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);

  const { state } = useLocation();
  const questions = state;
  const { question, correctAnswer, incorrectAnswers } =
    questions[questionIndex];

  const [randomAnswers, setRandomAnswers] = useState<string[]>([]);

  const navigate = useNavigate();

  const verifyAnswer = useCallback(
    (answer: string) => {
      setLoading(true);
      const selectedAnswer = document.getElementById(answer);

      if (correctAnswer === answer) {
        // add thumbs up, gold coins, jump
        selectedAnswer?.classList.add('correct');
        setRightAnswers(rightAnswers + 1);
        setScore(score + 100 + 100 * (Math.min(counter + 3, 10) / 10));
      } else {
        selectedAnswer?.classList.add('wrong');
      }
      if (questionIndex === questions.length - 1) {
        setTimeout(
          () =>
            navigate(`/Results`, {
              state: { rightAnswers, name, score },
            }),
          750
        );
      }
      setTimeout(() => {
        setLoading(false);
        setQuestionIndex(questionIndex + 1);
      }, 1000);
    },
    [
      correctAnswer,
      name,
      questionIndex,
      questions,
      rightAnswers,
      navigate,
      score,
      counter,
    ]
  );

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (counter === 0) {
      verifyAnswer('null');
      setCounter(10);
    }
    if (counter > 0) {
      const timer1 = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer1);
    }
  }, [counter, verifyAnswer]);

  useEffect(() => {
    const allAnswers: string[] = [correctAnswer].concat(incorrectAnswers);
    setCounter(10);
    setRandomAnswers(allAnswers.sort(() => 0.5 - Math.random()));
  }, [questionIndex, correctAnswer, incorrectAnswers]);

  return (
    <div className="container">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div className="banner">
        <h6>
          {questionIndex + 1}/{questions.length}
        </h6>
        <h6>Countdown Timer : {counter}</h6>
        <h6>Score: {score}</h6>
      </div>
      <div>
        <h3>{question}</h3>
      </div>
      <div className="answers">
        {randomAnswers.map((answer) => (
          <button
            type="button"
            id={answer}
            key={answer}
            disabled={loading}
            style={{
              minWidth: '300px',
            }}
            onClick={() => verifyAnswer(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}
