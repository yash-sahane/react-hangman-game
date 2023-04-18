import React from 'react'

const WrongLetters = ({ wrongLetters }) => {
    return (
        <div className='wrong-letter-container'>
            {wrongLetters.length > 0 && 'Wrong Letter : '}
            {wrongLetters.map((letter, i) => (
                <React.Fragment key={i}>
                    <span span > {letter}</span>
                    {i < wrongLetters.length - 1 && ','}
                </React.Fragment>
            ))}
        </div >
    )
}

export default WrongLetters