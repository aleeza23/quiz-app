import React from "react";
import quizImg from "../images/startscreen.png";
import Button from "./Button";

const StartScreen = ({dispatch}) => {
  return (
    <>
      <div className='start_screen'>
        <h1 className="heading fs-1">Quizard</h1>
        <p>Start the quiz to test your knowledge.</p>
        <img src={quizImg} alt='q-img' className='img-fluid hero_img' />
        <Button className={'w-50'} onClick={() => dispatch({type: "start"})}>Start Playing</Button>
      </div>
    </>
  );
};

export default StartScreen;
