import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function StartGame() {
  const { name } = useParams();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);
  const { state } = useLocation();
  const questions = state;

  const { question, correctAnswer, incorrectAnswers } =
    questions[questionIndex];

  const allAnswers: string[] = [correctAnswer].concat(incorrectAnswers);
  const randomOrder: string[] = allAnswers.sort(() => 0.5 - Math.random());

  const navigate = useNavigate();

  function verifyAnswer(answer: string) {
    if (correctAnswer === answer) {
      // add delay?
      // highlight green/fade into green?
      // add thumbs up, gold coins, jump
      // add tally of right answers
      setRightAnswers(rightAnswers + 1);
    }
    setQuestionIndex(questionIndex + 1);

    if (questionIndex === questions.length - 1) {
      navigate(`/Results`, {
        state: { rightAnswers, name },
      });
    }
  }

  return (
    <>
      <div className="container">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div className="banner">
          <h6>
            {questionIndex + 1}/{questions.length}
          </h6>
          <h6>Countdown Timer</h6>
          <h6>Score: {rightAnswers}</h6>
        </div>
        <div>
          <h3>{question}</h3>
        </div>
      </div>
      {randomOrder.map((answer) => (
        <button type="submit" key={answer} onClick={() => verifyAnswer(answer)}>
          {answer}
        </button>
      ))}
    </>
  );
}
