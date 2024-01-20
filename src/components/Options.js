import React from "react";

const Options = ({option, index, dispatch,answer, correctOpt}) => {
   
  return (
    <>
      <button
        onClick={() => dispatch({type: "answer", payload: index})}
        className={`w-100 my-2 border-0 shadow py-2 rounded ${index === answer && index !== correctOpt ? 'bg-danger' : '' }`}
        style={{backgroundColor : `${answer !== null && index === correctOpt ? '#02ccfe' : '#fff'}`}} //conditionally adding styles
        disabled={answer !== null} //answer !== null
      >
      
        {option}
      </button>
    </>
  );
};

export default Options;
