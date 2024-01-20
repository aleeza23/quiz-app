import React from "react";

const Main = ({children}) => {
  return (
    <>
      <div className='container  '>
        <div className='row'>
          <div className='col-12 col-lg-4  mx-auto border border-black rounded  shadow py-5' >{children}</div>
        </div>
      </div>
    </>
  );
};

export default Main;
