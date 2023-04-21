import React from 'react'

const Popup = ({ selectedWord, correctLetters, playHandler, finalMsg, uniqueLetters }) => {
    const isWin = uniqueLetters.size === correctLetters.length;

    return (
        <div className='popup-container'>
            <div className='popup'>
                <h2>{`${finalMsg} ${isWin ? '🥳' : '🥺'}`}</h2>
                <h4>{isWin ? '' : `The correct letter was ${selectedWord}`}</h4>
                <button onClick={playHandler}>Play Again</button>
            </div>
        </div>
    )
}

export default Popup