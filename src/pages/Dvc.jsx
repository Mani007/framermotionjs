import React from 'react'
import Box from '../components/Box'
import Verticalline from '../components/Verticalline'
import Dot from '../components/Dot';

function Dvc() {
  return (
    <>
      <div className='h-screen  grid content-center place-content-center items-center justify-center'>
      <div className="container  relative  mx-40">
          <Dot/>
        </div>
        <div className="container  relative  mx-40">
          <Verticalline />
        </div>
        <br />
        <div className="container  relative  mx-20">
          <Box text="Your Data" />
        </div>
      </div>
    </>
  );
}

export default Dvc