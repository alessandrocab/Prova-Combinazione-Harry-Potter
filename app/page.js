'use client';

import { useState, useEffect } from 'react';

export default function SecretReveal() {
  const [input, setInput] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleCheck = () => {
    if (input.trim() === 'segreto123') {
      setRevealed(true);
    } else {
      alert('Combinazione errata. Riprova.');
    }
  };

  const handleReset = () => {
    setInput('');
    setRevealed(false);
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${revealed ? '/images/revealed.jpg' : '/images/background.jpg'})`,
      }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-xl w-full max-w-md text-center">
        {!revealed ? (
          <>
            <h1 className="text-lg sm:text-xl font-bold mb-6">
              Per svelare il segreto del luogo nascosto, inserisci la combinazione corretta
            </h1>

            <div className="relative mb-4">
              <input
                type={showPassword ? 'text' : 'password'}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Inserisci combinazione"
                className="w-full text-base px-4 py-2 border border-gray-300 rounded pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? '🙈' : '👁'}
              </button>
            </div>

            <button
              onClick={handleCheck}
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-base"
            >
              Svela il segreto
            </button>
          </>
        ) : (
          <>
            <p className="text-xl font-semibold text-black mb-6">
              Hai svelato il luogo nascosto!
            </p>
            <button
              onClick={handleReset}
              className="text-base px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              ⬅ Torna indietro
            </button>
          </>
        )}
      </div>
    </div>
  );
}
