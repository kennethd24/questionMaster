import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function QuickPlay() {
  const [currentName, setCurrentName] = useState('');
  const [currentDifficulty, setCurrentDifficulty] = useState('');
  const [currentCategories, setCurrentCategories] = useState('');
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  let name = '';

  if (!currentName) {
    name = 'Guest';
  } else {
    name = currentName;
  }

  const categories = [
    { label: 'Arts & Literature', value: 'arts_and_literature' },
    { label: 'Film & TV', value: 'film_and_tv' },
    { label: 'Food & Drink', value: 'food_and_drink' },
    { label: 'General Knowledge', value: 'general_knowledge' },
    { label: 'Geography', value: 'geography' },
    { label: 'History', value: 'history' },
    { label: 'Music', value: 'music' },
    { label: 'Science', value: 'science' },
    { label: 'Society & Culture', value: 'society_and_culture' },
    { label: 'Sport & Leisure', value: 'sport_and_leisure' },
  ];

  const difficulty = [
    { label: 'Easy', value: 'easy' },
    { label: 'Medium', value: 'medium' },
    { label: 'Hard', value: 'hard' },
  ];

  async function handleClick() {
    // fetch questions from api
    try {
      setLoading(true);
      const url = 'https://the-trivia-api.com/api/questions?limit=10';
      const response = await fetch(url);
      const questions = await response.json();

      setCurrentQuestions(questions);
      setLoading(false);
      navigate(`/StartGame/${name}`, { state: questions });
      // navigate to start game with new set of questions/names/etc.
    } catch (error: unknown) {
      // navigate to home page with error message
      console.error(`Unable to fetch questions: ${error.message}`);
    }
  }

  /*
  https://the-trivia-api.com/api/questions?categories=arts_and_literature,film_and_tv,food_and_drink,general_knowledge,geography,history,music,science,society_and_culture,sport_and_leisure&limit=10&difficulty=medium
  default 10 question api
  https://the-trivia-api.com/api/questions?limit=10

  arts
  https://the-trivia-api.com/api/questions?categories=arts_and_literature&limit=10

  arts, film, and food
  https://the-trivia-api.com/api/questions?categories=arts_and_literature,film_and_tv,food_and_drink&limit=10

  arts, film, food, and general
  https://the-trivia-api.com/api/questions?categories=arts_and_literature,film_and_tv,food_and_drink,general_knowledge&limit=10

  arrts
  https://the-trivia-api.com/api/questions?categories=arts_and_literature,film_and_tv,food_and_drink,general_knowledge&limit=10&difficulty=medium
  */

  return (
    <>
      <div className="container">
        <h1>Quick Play</h1>
      </div>
      <div className="container">
        <div>
          <Link to="/">Go Back Home</Link>
        </div>
        <div>
          <input
            value={currentName}
            onChange={(e) => setCurrentName(e.target.value)}
            placeholder="Enter Name"
          />
        </div>
        <div>
          <select name="categories">
            <option value="">Categories</option>
            {categories.map((item) => (
              <option
                value={item.label}
                key={item.label}
                onClick={() => setCurrentCategories(item.value)}
              >
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select name="difficulty">
            <option value="">Difficulty</option>
            {difficulty.map((item) => (
              <option
                value={item.label}
                key={item.label}
                onClick={() => setCurrentDifficulty(item.value)}
              >
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Link to={`/StartGame/${name}`}>Start Game</Link>
          <button type="submit" onClick={handleClick}>
            Start Game
          </button>
        </div>
        <div>
          <Link to={`/StartGame/${name}`}>Start Game</Link>
        </div>
      </div>
    </>
  );
}
