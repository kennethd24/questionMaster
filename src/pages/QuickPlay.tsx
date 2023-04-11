import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function QuickPlay() {
  const [currentName, setCurrentName] = useState('');
  const [currentDifficulty, setCurrentDifficulty] =
    useState('');
  const [currentCategories, setCurrentCategories] = useState('');
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
    try {
      // setloading/loading parameter?
      // const url = 'https://the-trivia-api.com/api/questions?limit=10';
      const url = `https://the-trivia-api.com/api/questions?&limit=10${currentCategories}${currentDifficulty}`;
      const response = await fetch(url);
      const questions = await response.json();

      navigate(`/StartGame/${name}`, { state: questions });
    } catch (error: unknown) {
      navigate('/NotFound', { state: error });
    }
  }

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
                onClick={() =>
                  setCurrentCategories(`&categories==${item.value}`)
                }
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
                onClick={() =>
                  setCurrentDifficulty(`&difficulty=${item.value}`)
                }
              >
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit" onClick={handleClick}>
            Start Game
          </button>
        </div>
      </div>
    </>
  );
}
