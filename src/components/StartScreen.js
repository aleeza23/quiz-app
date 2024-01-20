import React from "react";
import quizImg from "../images/startscreen.png";
import Button from "./Button";

const StartScreen = ({dispatch}) => {
  return (
    <>
      <div className='start_screen'>
        <h1>Quizard</h1>
        <p>Hellow world</p>
        <img src={quizImg} alt='q-img' className='img-fluid' />
        <Button className={'w-50'} onClick={() => dispatch({type: "start"})}>Start Playing</Button>
      </div>
    </>
  );
};

export default StartScreen;
