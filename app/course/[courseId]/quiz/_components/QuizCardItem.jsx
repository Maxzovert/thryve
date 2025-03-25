import React, { useState } from "react";

function QuizCardItem({ quiz , userSelectedOption }) {
    const [selectedOption , setSelectedOption] = useState();
  if (!quiz) {
    return <p className="text-center text-red-500">Loading...</p>;
  }

  return (
    <div className="mt-10 text-center p-5">
      <h2 className="font-medium text-3xl">{quiz.question}</h2>
      
      <div className="grid grid-cols-2 gap-5 mt-10">
      {quiz.options?.map((option, index) => (
          <h1
            onClick={()=>{setSelectedOption(option)
                userSelectedOption(option);
            }}
            key={index}
            className={`w-full border rounded-full p-3 px-4 text-lg cursor-pointer ${selectedOption == option && 'bg-primary text-white hover:bg-primary'} hover:bg-gray-200 `}
          >
            {option.replace(/`/g, "")}
          </h1>
        ))}
      </div>
    </div>
  );
}

export default QuizCardItem;
