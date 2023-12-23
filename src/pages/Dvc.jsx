import React from 'react'
import Box from '../components/Box'
import Verticalline from '../components/Verticalline'
import Dot from '../components/Dot';

function Dvc() {
  return (
    <>
    
      <div className='h-screen  grid  content-end items-center justify-center'>
      <div className="container  relative  mx-[155px]">
          <Dot color='bg-green-500'/>
        </div>
        <div className="container  relative  mx-40">
          <Verticalline height='h-[70px]' width='w-[5px]' rotate='rotate-0' />
        </div>
        
        <div className="container  relative   mx-20">
          <Box text="Your Data" />
        </div>
      </div>
    
    </>
  );
}

export default Dvc