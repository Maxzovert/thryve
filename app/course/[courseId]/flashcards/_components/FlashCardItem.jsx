import React from 'react';
import ReactCardFlip from 'react-card-flip';

function FlashCardItem({isFlipped, handleClick, question, answer }) {
  return (
    <div className="flex items-center justify-center">
       <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="p-4 bg-primary text-white flex items-center justify-center rounded-lg cursor-pointer shadow-lg h-[250px] w-[200px] 
        md:h-[350px] md:w-[300px]"
        onClick={handleClick}>
          <h2>{question}</h2>
        </div>

        <div className="p-4 bg-white shadow-lg text-primary flex items-center justify-center rounded-lg cursor-pointer h-[250px] w-[200px] 
        md:h-[350px] md:w-[300px]"
        onClick={handleClick}>
          <h2>{answer}</h2>
        </div>
      </ReactCardFlip>
    </div>
  )
}

export default FlashCardItem
