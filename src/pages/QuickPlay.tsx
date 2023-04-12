import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

import './quickPlay.css';

export default function QuickPlay() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentName, setCurrentName] = useState(location?.state || '');
  const [difficultyQuery, setDifficultyQuery] = useState('');
  const [currentDifficulty, setCurrentDifficulty] =
    useState('Select Difficulty');
  const [currentCategories, setCurrentCategories] = useState('');
  const [active, setActive] = useState(false);

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
      const url = `https://the-trivia-api.com/api/questions?&limit=10${currentCategories}${difficultyQuery}`;
      const response = await fetch(url);
      const questions = await response.json();

      navigate(`/StartGame/${name}`, { state: questions });
    } catch (error: unknown) {
      navigate('/NotFound', { state: error });
    }
  }

  function handleDifficulty(difficultyLevel: string) {
    if (difficultyLevel === 'Random') {
      setDifficultyQuery('');
    } else {
      setDifficultyQuery(`&difficulty=${difficultyLevel}`);
    }
    setCurrentDifficulty(difficultyLevel);
    setActive(!active);
  }

  return (
    <div className="container">
      <h1>Quick Play</h1>
      <div>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button type="button" tabIndex={0}>
            Go Back Home
          </button>
        </Link>
      </div>
      <div className="omrs-input-group">
        <div className="omrs-input-underlined">
          <input
            required
            value={currentName}
            onChange={(e) => setCurrentName(e.target.value)}
            style={{
              height: '45px',
            }}
          />
          <span className="omrs-input-label">Enter Name</span>
        </div>
      </div>

      <div>
        <select name="categories">
          <option value="">Categories</option>
          {categories.map((category) => (
            <option
              value={category.label}
              key={category.label}
              onClick={() =>
                setCurrentCategories(`&categories=${category.value}`)
              }
            >
              {category.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div className={`dropdown ${active ? 'active' : ''}`}>
          <input
            className="text-box"
            type="text"
            placeholder="Select Difficulty"
            value={currentDifficulty}
            readOnly
            onClick={() => setActive(!active)}
          />
          <div className="options ">
            <div
              onClick={() => handleDifficulty('Random')}
              onKeyDown={() => handleDifficulty('Random')}
              role="button"
              tabIndex={0}
            >
              Random
            </div>
            {difficulty.map((item, index) => (
              <div
                key={item.label}
                onClick={() => handleDifficulty(item.label)}
                onKeyDown={() => handleDifficulty(item.label)}
                role="button"
                tabIndex={index}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <button type="submit" onClick={handleClick}>
          Start Game
        </button>
      </div>
    </div>
  );
}
