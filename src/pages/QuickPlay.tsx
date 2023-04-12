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
  const [currentCategoriesQuery, setCurrentCategoriesQuery] = useState('');

  const [showDifficulty, setShowDifficulty] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

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
      const url = `https://the-trivia-api.com/api/questions?&limit=10${currentCategoriesQuery}${difficultyQuery}`;
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
      setDifficultyQuery(`&difficulty=${difficultyLevel.toLowerCase()}`);
    }
    setCurrentDifficulty(difficultyLevel);
    setShowDifficulty(!showDifficulty);
  }

  function handleCategories(category: string, categoryQuery: string) {
    setCurrentCategoriesQuery(categoryQuery);
    setCurrentCategories(category);
    setShowCategories(!showCategories);
  }

  return (
    <div className="container">
      <h1>Quick Play</h1>
      <div>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button type="button" tabIndex={0}>
            Home
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
        <div className={`dropdown ${showCategories ? 'active' : ''}`}>
          <input
            className="text-box"
            type="text"
            placeholder="Select Category"
            value={currentCategories}
            readOnly
            onClick={() => {
              setShowCategories(!showCategories);
              setShowDifficulty(false);
            }}
          />
          <div className="options" id="category">
            {categories.map((category, index) => (
              <div
                key={category.label}
                onClick={() =>
                  handleCategories(
                    category.label,
                    `&categories=${category.value}`
                  )
                }
                onKeyDown={() =>
                  handleCategories(category.label, category.value)
                }
                role="button"
                tabIndex={index}
              >
                {category.label}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className={`dropdown ${showDifficulty ? 'active' : ''}`}>
          <input
            className="text-box"
            type="text"
            placeholder="Select Difficulty"
            value={currentDifficulty}
            readOnly
            onClick={() => {
              setShowDifficulty(!showDifficulty);
              setShowCategories(false);
            }}
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
