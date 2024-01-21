import React from "react";
import Button from "./Button";

const FinishedScreen = ({maxPoints, points, dispatch}) => {
  const scorePercentage = (points / maxPoints) * 100;

  let emoji;

  if (scorePercentage === 100) emoji = "🥇";
  if (scorePercentage >= 80 && scorePercentage < 100) emoji = "🎉";
  if (scorePercentage >= 50 && scorePercentage < 80) emoji = "🎉";
  if (scorePercentage >= 0 && scorePercentage < 50) emoji = "🤨";
  if (scorePercentage === 0) emoji = "🤦‍♂️";

  return (
    <>
    <div className="finish p-4 rounded">
      <h4>
        <h1 className="d-inline ">{emoji}</h1> You have scored{" "}
        <strong>
          {points} out of {maxPoints}
        </strong>
      </h4>
      {(scorePercentage === 100 || scorePercentage >= 50) ? 
        <small className="my-3">Congratulation on completing the quiz 🎉</small> : <p className="my-3">You lost this quiz but It's okay try again ✌🏻</p> 
      }
      <Button onClick={() => dispatch({type: "reStart"})} className={"ms-auto"}>
        Restart
      </Button>
    </div>
      
    </>
  );
};

export default FinishedScreen;
