import React, { useEffect, useState } from 'react'
import './App.css';
import { WrongLetters, Header, Word, Popup, Figure } from './components/index';

const words = ['hello', 'geeksforgeeks', 'sunny', 'welcome', 'world', 'tablet', 'laptop'];
const selectedWord = words[Math.floor(Math.random() * words.length)];

const App = () => {
  const [isPlayable, setIsPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setwrongLetters] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key, keyCode } = event;

      if (isPlayable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(prevLetters => [...prevLetters, letter]);
          } else {
            // show not
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setwrongLetters(prevLetters => [...prevLetters, letter]);
          } else {
            // show not
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);  // cleanup function
  }, [])
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