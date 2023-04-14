import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { createRecord, getCurrentUserId } from 'thin-backend';
import image1 from '../images/bookTree.png';

export default function StartGame() {
  const { name } = useParams();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [counter, setCounter] = useState(10);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);

  const { state } = useLocation();
  const { questions, currentDifficulty, currentCategory } = state;
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
      let defaultDifficulty: string = currentDifficulty;
      let defaultCategory: string = currentCategory;

      if (questionIndex === questions.length - 1) {
        // last question, add final score to data base

        if (currentDifficulty === 'Select Difficulty') {
          defaultDifficulty = 'Random';
        }
        if (currentCategory === 'Select Category') {
          defaultCategory = 'Random';
        }

        createRecord('scores', {
          score,
          difficulty: defaultDifficulty,
          category: defaultCategory,
          userId: getCurrentUserId(),
          name,
        });
        setTimeout(
          () =>
            navigate(`/Results`, {
              state: {
                rightAnswers,
                name,
                score,
                defaultCategory,
                defaultDifficulty,
              },
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
      currentDifficulty,
      currentCategory,
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
        <Link to="/">
        <img
            src={image1}
            alt="logo"
            style={{
              maxHeight: '75px',
              padding: '20px',
              marginTop: '25px',
              marginRight: '10px',
            }}
          />
        </Link>
      </div>
      <div className="banner">
        <h6>
          {questionIndex + 1}/{questions.length}
        </h6>
        <h6>Timer : {counter}</h6>
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
