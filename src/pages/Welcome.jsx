import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 p-4 text-center">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">Hey Dimpy 💖</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        It's been more than 7 years since we first met at Infosys. Now, seeing you as a beautiful mom-to-be,
        I just want to say how thankful I am for all the love, support, and kindness you've shown me over the years.
        As you step into this precious new phase of our lives, I wanted to say thank you with just a small surprise gift for you.
      </p>
      <button
        className="bg-pink-500 text-white px-6 py-2 rounded shadow hover:bg-pink-600 transition"
        onClick={() => navigate('/step1')}
      >
        Start the Journey →
      </button>
    </div>
  );
}
