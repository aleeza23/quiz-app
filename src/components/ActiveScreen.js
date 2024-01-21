import React from "react";
import Options from "./Options";
import Button from "./Button";
import Progress from "./Progress";
import Timer from "./Timer";

const ActiveScreen = ({
  questions,
  dispatch,
  answer,
  numQuestions,
  currentQuestion,
  points,
  maxPoints,
  remainingTime
}) => {
    // console.log(questions);
  return (
    <div>
    <Timer remainingTime={remainingTime} dispatch={dispatch} /> 
    <Progress maxPoints={maxPoints} points={points} currentQuestion={currentQuestion} numQuestions={numQuestions} />
      
      <h5 className='mb-4'>{questions.question}</h5>
      {questions.options.map((option, index) => (
        <Options
          answer={answer}
          correctOpt={questions.correctOption}
          key={index}
          index={index}
          option={option}
          dispatch={dispatch}
        />
      ))}

      {answer !== null && currentQuestion < numQuestions - 1 && (
        <Button
          onClick={() => dispatch({type: "nextQuestion"})}
          className={"float-end px-5 mt-4"}
        >
          Next
        </Button>
      )}

      {currentQuestion === numQuestions - 1 && (
        <Button
          onClick={() => dispatch({type: "finish"})}
          className={"float-end px-5 mt-4"}
        >
          Finish
        </Button>
      )}
    </div>
  );
};

export default ActiveScreen;
