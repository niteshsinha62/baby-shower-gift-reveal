import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StepOne() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showRetryPage, setShowRetryPage] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);

  const handleAnswer = (answer) => {
    setSelectedOption(answer);

    // Check if the answer is correct or not
    if (answer === "right") {
      setShowSuccessPage(true); // Show success page on correct answer
    } else {
      setShowRetryPage(true); // Show retry page on wrong answer
    }
  };

  const handleContinue = () => {
    navigate("/step2");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 p-4 text-center">
      {showSuccessPage ? (
        // Show Success Page Content if answer is correct
        <div className="animate-fadeIn">
          <h2 className="text-2xl text-green-600 font-bold mb-4">Amazing! Your memory is so sharp! 🎯</h2>
          <p className="text-lg text-gray-700 mb-6">
            Those almonds are working really well during pregnancy! 😊
          </p>
          <img src="/images/celebration.jpg" alt="Celebration" className="w-64 h-64 mb-4 mx-auto rounded-lg shadow" />
          <button
            className="bg-pink-500 text-white px-6 py-2 rounded"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      ) : !showRetryPage ? (
        <>
          {/* Updated Header Text */}
          <h1 className="text-3xl font-bold text-pink-600 mb-4">Let's Have Some Memory Refresher! 💭</h1>

          <img src="/images/photo1.jpg" alt="Photo 1" className="w-64 h-64 mb-4 rounded-lg shadow" />

          <p className="text-lg text-gray-700 mb-6">
            What was the very first gift I gave you, after which we had a great cafe date night? 💕
          </p>

          <div className="mb-6">
            <button
              className="bg-pink-500 text-white px-6 py-2 rounded mb-2 mr-2"
              onClick={() => handleAnswer("wrong")}
            >
              Ring
            </button>
            <button
              className="bg-pink-500 text-white px-6 py-2 rounded mb-2 mr-2"
              onClick={() => handleAnswer("right")}
            >
              Soft Toy
            </button>
            <button
              className="bg-pink-500 text-white px-6 py-2 rounded mb-2 mr-2"
              onClick={() => handleAnswer("wrong")}
            >
              Flowers
            </button>
            <button
              className="bg-pink-500 text-white px-6 py-2 rounded mb-2 mr-2"
              onClick={() => handleAnswer("wrong")}
            >
              Earrings
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
