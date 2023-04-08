import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function StartGame() {
  const sampleQuestion = [
    {
      category: 'Film & TV',
      id: '622a1c377cc59eab6f950701',
      correctAnswer: 'Sandra Bullock',
      incorrectAnswers: ['Charlize Theron', 'Emma Thompson', 'Maggie Smith'],
      question: 'Which actress has featured in films including Crash and Speed?',
      tags: ['film_and_tv'],
      type: 'Multiple Choice',
      difficulty: 'hard',
      regions: [],
      isNiche: false,
    },
    {
      category: 'Geography',
      id: '622a1c377cc59eab6f9507ed',
      correctAnswer: 'North America',
      incorrectAnswers: ['South America', 'Oceania', 'Europe'],
      question: 'The country of Grenada is on which continent?',
      tags: ['geography'],
      type: 'Multiple Choice',
      difficulty: 'medium',
      regions: [],
      isNiche: false,
    },
    {
      category: 'Arts & Literature',
      id: '622a1c347cc59eab6f94f970',
      correctAnswer: 'On the Road',
      incorrectAnswers: [
        'The Member of the Wedding',
        '1984',
        "Breakfast at Tiffany's",
      ],
      question: "Which book contains the character 'Dean Moriarty'?",
      tags: [
        'literature',
        'classic_novels',
        'fictitious_characters',
        'arts_and_literature',
      ],
      type: 'Multiple Choice',
      difficulty: 'hard',
      regions: [],
      isNiche: false,
    },
    {
      category: 'Music',
      id: '625063f9e12f6dec240bdf90',
      correctAnswer: 'It Takes Two',
      incorrectAnswers: ['I Touch Myself', 'How Bizarre', 'Whip It'],
      question: 'What song did Rob Base & DJ E-Z Rock have a hit with in 1988?',
      tags: ['songs', 'one_hit_wonders', 'music'],
      type: 'Multiple Choice',
      difficulty: 'hard',
      regions: [],
      isNiche: false,
    },
    {
      category: 'Sport & Leisure',
      id: '622a1c377cc59eab6f95045b',
      correctAnswer: 'Pong',
      incorrectAnswers: ['Space Invaders', 'Pacman', 'Tetris'],
      question: 'What arcade game became a hit in 1973?',
      tags: ['technology', 'video_games', 'sport'],
      type: 'Multiple Choice',
      difficulty: 'hard',
      regions: [],
      isNiche: false,
    },
    {
      category: 'Arts & Literature',
      id: '622a1c3a7cc59eab6f951387',
      correctAnswer: 'Harry Potter',
      incorrectAnswers: [
        'Voyages Extraordinaires',
        'Percy Jackson & the Olympians',
        'Twilight',
      ],
      question: "In which book series does 'Cedric Diggory' appear?",
      tags: ['arts_and_literature'],
      type: 'Multiple Choice',
      difficulty: 'medium',
      regions: [],
      isNiche: false,
    },
    {
      category: 'Food & Drink',
      id: '624c60e050d1a5e051325a79',
      correctAnswer: 'Central America',
      incorrectAnswers: ['Brunei', 'Chile', 'The Middle East'],
      question:
        'Where in the world would you most expect to be served Gallo Pinto?',
      tags: ['food', 'food_and_drink'],
      type: 'Multiple Choice',
      difficulty: 'hard',
      regions: [],
      isNiche: false,
    },
    {
      category: 'History',
      id: '622a1c3c7cc59eab6f9517ac',
      correctAnswer: 'Davy Crockett',
      incorrectAnswers: ['Davy Jones', 'Davy Barrow', 'Davy Dylan'],
      question: 'Which frontiersman died at the Alamo?',
      tags: ['usa', 'history'],
      type: 'Multiple Choice',
      difficulty: 'medium',
      regions: [],
      isNiche: false,
    },
    {
      category: 'Music',
      id: '622a1c357cc59eab6f94feac',
      correctAnswer: 'Elton John',
      incorrectAnswers: ['Mika', 'Madonna', 'Eric Clapton'],
      question: "Which musician released 'Your Song'?",
      tags: ['songs', 'musicians', 'general_knowledge', 'music'],
      type: 'Multiple Choice',
      difficulty: 'medium',
      regions: [],
      isNiche: false,
    },
    {
      category: 'Sport & Leisure',
      id: '622a1c367cc59eab6f950027',
      correctAnswer: 'Golf',
      incorrectAnswers: ['Tennis', 'Cricket', 'Rugby'],
      question: 'With what sport is Jack Nicklaus associated?',
      tags: ['people', 'general_knowledge', 'sport'],
      type: 'Multiple Choice',
      difficulty: 'easy',
      regions: [],
      isNiche: false,
    },
  ];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);
  const { question, correctAnswer, incorrectAnswers } =
    sampleQuestion[questionIndex];

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

    if (questionIndex === sampleQuestion.length - 1) {
      navigate(`/Results/${rightAnswers}`);
    }
  }

  return (
    <>
      <div>
        <div className="banner">
          <h6>
            <Link to="/">Home</Link>
          </h6>
          <h6>
            {questionIndex + 1}/{sampleQuestion.length}
          </h6>
          <h6>Countdown Timer</h6>
          <h6>Score: {rightAnswers}</h6>
        </div>
        <h3>{question}</h3>
      </div>
      {randomOrder.map((answer) => (
        <button type="submit" key={answer} onClick={() => verifyAnswer(answer)}>
          {answer}
        </button>
      ))}
    </>
  );
}
