import React from "react";

const Main = ({children}) => {
  return (
    <>
      <div className='container  '>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-4  mx-auto rounded  shadow py-5' >{children}</div>
        </div>
      </div>
    </>
  );
};

export default Main;
