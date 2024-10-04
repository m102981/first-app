import React from 'react';
import { Word } from '../types';

interface WordListProps {
  words: Word[];
  onSelectWord: (word: Word) => void;
}

const WordList: React.FC<WordListProps> = ({ words, onSelectWord }) => {
  return (
    <div className="w-64 bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4">Word List</h2>
      <ul>
        {words.map((word) => (
          <li
            key={word.id}
            className="cursor-pointer hover:bg-gray-100 p-2 rounded"
            onClick={() => onSelectWord(word)}
          >
            {word.term}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordList;