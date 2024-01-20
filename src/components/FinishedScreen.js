import React from "react";
import Button from "./Button";

const FinishedScreen = ({maxPoints, points, dispatch}) => {
  return <>
  <p>You have scored <strong>{points} out of {maxPoints}</strong></p>  
  <Button onClick={() => dispatch({type : 'reStart'})} className={'ms-auto'}>Restart</Button>
  </>;
};

export default FinishedScreen;
