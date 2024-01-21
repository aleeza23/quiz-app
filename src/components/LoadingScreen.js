import React from "react";
import {Blocks} from "react-loader-spinner";

const LoadingScreen = () => {
  return (
    <>
      <div className='mx-auto spinner'>
        <Blocks
          height='80'
          width='80'
          color='#020035'
          ariaLabel='blocks-loading'
          wrapperStyle={{}}
          wrapperClass='blocks-wrapper'
          visible={true}
        />
      </div>
    </>
  );
};

export default LoadingScreen;
