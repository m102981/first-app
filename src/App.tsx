import React, { useState } from 'react';
import Flashcard from './components/Flashcard';
import WordList from './components/WordList';
import { words } from './data/words';
import { GraduationCap } from 'lucide-react';

function App() {
  const [currentWord, setCurrentWord] = useState(words[0]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="mb-8 flex items-center">
        <GraduationCap className="text-blue-500 mr-2" size={32} />
        <h1 className="text-3xl font-bold text-gray-800">English Word Flashcards</h1>
      </header>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        <Flashcard word={currentWord} />
        <WordList words={words} onSelectWord={setCurrentWord} />
      </div>
    </div>
  );
}

export default App;