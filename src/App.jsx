import React, { useEffect, useState } from 'react'
import './App.css';
import { WrongLetters, Header, Word, Popup, Figure, Notification } from './components/index';
import { notification } from './helper';

const words = ['hello', 'geeksforgeeks', 'sunny', 'welcome', 'world', 'tablet', 'laptop'];

const App = () => {
  const [isPlayable, setIsPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setwrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [finalMsg, setFinalMsg] = useState('');
  const [selectedWord, setSelectedWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const uniqueLetters = new Set(selectedWord);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key, keyCode } = event;

      if (isPlayable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(prevLetters => [...prevLetters, letter]);
          } else {
            notification(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setwrongLetters(prevLetters => [...prevLetters, letter]);
          } else {
            notification(setShowNotification);
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);  // cleanup function
  }, [correctLetters, wrongLetters, isPlayable])

  useEffect(() => {
    console.log('correct letters : ' + correctLetters.length);
    console.log(selectedWord.length);
    console.log('wrong letters : ' + wrongLetters.length);
    if (correctLetters.length === uniqueLetters.size) {
      setFinalMsg('You won');
      setIsPlayable(false);
      setShowPopup(true);
    } else if (wrongLetters.length >= 6) {
      setFinalMsg('You lose');
      setIsPlayable(false);
      setShowPopup(true);
    }
  }, [correctLetters, wrongLetters, isPlayable])

  const playHandler = () => {
    setIsPlayable(true);
    setFinalMsg('');
    setShowPopup(false);
    setCorrectLetters([]);
    setwrongLetters([]);
    const newWord = words[Math.floor(Math.random() * words.length)];
    setSelectedWord(newWord);
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      {showPopup && <Popup selectedWord={selectedWord} correctLetters={correctLetters} playHandler={playHandler} finalMsg={finalMsg} uniqueLetters={uniqueLetters} />}
      {notification && <Notification showNotification={showNotification} />}
    </>
  )
}

export default App