import React from "react";

const Progress = ({currentQuestion, numQuestions, points, maxPoints}) => {
  return (
    <>
      <progress
        className='progress w-100'
        max={numQuestions}
        value={currentQuestion}
      />
      
      <div className='progress_points my-3'>
        <p>
          Question <strong>{currentQuestion + 1}</strong> / {numQuestions}
        </p>

        <p>
          <strong>{points}</strong> / {maxPoints}{" "}
        </p>
      </div>
    </>
  );
};

export default Progress;
