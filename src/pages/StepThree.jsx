// StepThree.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StepThree() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showRetryPage, setShowRetryPage] = useState(false);

  const handleAnswer = (answer) => {
    setSelectedOption(answer);

    // Check if the answer is correct or not
    if (answer === "Valentine") {
      setTimeout(() => navigate("/reveal"), 1000); // Navigate to Final Reveal if correct
    } else {
      setShowRetryPage(true); // Show retry page on wrong answer
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 p-4 text-center">
      {!showRetryPage ? (
        <>
          {/* Updated Header Text */}
          <h1 className="text-3xl font-bold text-pink-600 mb-4">Almost There! 🧐</h1>

          <img src="/images/photo2.jpg" alt="Photo 2" className="w-64 h-64 mb-4 rounded-lg shadow" />

          <p className="text-lg text-gray-700 mb-6">
            What was the occasion when I gave you the gift? 🎁
          </p>

          <div className="mb-6">
            <button
              className="bg-pink-500 text-white px-6 py-2 rounded mb-2 mr-2"
              onClick={() => handleAnswer("Birthday")}
            >
              Birthday
            </button>
            <button
              className="bg-pink-500 text-white px-6 py-2 rounded mb-2 mr-2"
              onClick={() => handleAnswer("Valentine")}
            >
              Valentine
            </button>
            <button
              className="bg-pink-500 text-white px-6 py-2 rounded mb-2 mr-2"
              onClick={() => handleAnswer("Anniversary")}
            >
              Anniversary
            </button>
            <button
              className="bg-pink-500 text-white px-6 py-2 rounded mb-2 mr-2"
              onClick={() => handleAnswer("Random day")}
            >
              Random Day
            </button>
          </div>
        </>
      ) : (
        // Show Retry Page Content if answer is wrong
        <div>
          <h2 className="text-2xl text-red-600 font-bold mb-4">Oops! Wrong Answer! 😅</h2>
          <p className="text-lg text-gray-700 mb-6">
            Don't worry, I could understand memory loss is common during pregnancy. Give it one more try! 😊
          </p>
          <button
            className="bg-pink-500 text-white px-6 py-2 rounded"
            onClick={() => setShowRetryPage(false)} // Reset the state and show the original question again
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
