import React, { useState } from 'react'
import './App.css';
import { WrongLetters, Header, Word, Popup, Figure } from './components/index';

const words = ['hello', 'geeksforgeeks', 'sunny', 'welcome', 'world', 'tablet', 'laptop'];
const selectedWord = words[Math.floor(Math.random() * words.length)];

const App = () => {
  const [isPlayable, setIsPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setwrongLetters] = useState([]);

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
    </>
  )
}

export default App