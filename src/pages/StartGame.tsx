import { Link } from 'react-router-dom';

const sampleQuestion = [
    {
        category: 'Film & TV',
        id: '622a1c377cc59eab6f950701',
        correctAnswer: 'Sandra Bæ Hovedr',
        incorrectAnswers: ['Charlize Theron', 'Emma Thompson', 'Maggie Smith'],
        question:
            'Which actress has featured in films including Crash and Speed?',
        tags: ['film_and_tv'],
        type: 'Multiple Choice',
        difficulty: 'hard',
        regions: [],
        isNiche: false,
    },
];

function StartGame() {
    return (
        <>
            <div>
                <h1>Question 1</h1>
            </div>
            {sampleQuestion.map((question) => (
                <>
                    <div>{question.question}</div>
                    <div>{question.correctAnswer}</div>
                    <div>{question.incorrectAnswers[0]}</div>
                    <div>{question.incorrectAnswers[1]}</div>
                    <div>{question.incorrectAnswers[2]}</div>
                </>
            ))}
            <div>
                <Link to="/">Go Back Home</Link>
            </div>
        </>
    );
}

export default StartGame;
