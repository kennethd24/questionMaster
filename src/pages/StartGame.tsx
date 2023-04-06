import { Link } from 'react-router-dom';
import { useState } from 'react';

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

function StartGame() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const item = sampleQuestion[questionNumber];

  return (
    <>
      <div>
        <h1>Question {questionNumber + 1}</h1>
      </div>
      <div>{item.question}</div>
      <div>{item.correctAnswer}</div>
      <div>{item.incorrectAnswers[0]}</div>
      <div>{item.incorrectAnswers[1]}</div>
      <div>{item.incorrectAnswers[2]}</div>
      <div>
        <Link to="/">Go Back Home</Link>
      </div>
    </>
  );
}

export default StartGame;
