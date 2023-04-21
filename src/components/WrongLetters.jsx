import React from 'react'

const WrongLetters = ({ wrongLetters }) => {
    return (
        <div className='wrong-letters-container'>
            {wrongLetters.length > 0 && 'Wrong Letters : '}
            <div className="wrong-letters-div">
                {wrongLetters.map((letter, i) => (
                    <React.Fragment key={i}>
                        <span>{letter}</span>
                        {i < wrongLetters.length - 1 && ' , '}
                    </React.Fragment>
                ))}
            </div>
        </div >
    )
}

export default WrongLetters