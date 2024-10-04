import React, { useState } from 'react';
import { Word } from '../types';
import { RotateCw } from 'lucide-react';

interface FlashcardProps {
  word: Word;
}

const Flashcard: React.FC<FlashcardProps> = ({ word }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-64 h-40 bg-white rounded-lg shadow-lg cursor-pointer perspective-1000 transition-transform duration-500 ease-in-out transform hover:scale-105"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-4">
          <h2 className="text-2xl font-bold text-gray-800">{word.term}</h2>
          <RotateCw className="mt-4 text-gray-500" />
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center p-4 bg-blue-500 text-white rounded-lg">
          <p className="text-center">{word.definition}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;