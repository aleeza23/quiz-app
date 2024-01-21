import React, {useEffect} from "react";

const Timer = ({remainingTime, dispatch}) => {

    const min =Math.floor(remainingTime / 60);
    const sec = remainingTime % 60

  //start timer
  useEffect(() => {
    const intervalID = setInterval(() => dispatch({type: "timer"}), 1000);
    return () => clearInterval(intervalID);
  }, [dispatch]);

  return (
    <>
      <p>⌛ {min < 10 ? `${'0'+ min}` : min} : {sec < 10 ? `${'0'+ sec}` : sec} </p>
    </>
  );
};

export default Timer;
