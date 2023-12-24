import React from 'react'
import Box from '../components/Box'
import Verticalline from '../components/Verticalline'
import Dot from '../components/Dot';

function Dvc() {
  return (
    <>
    
      <div className='relative h-screen  grid  content-end pb-5 items-center justify-center'>
      <div className="container  relative  mx-[155px]">
         <span className='inline-flex items-baseline'>
          <Dot color='bg-green-500'/>
          <span className='px-5 '>
          <Box text="Your Data Now" color="bg-yellow-600"/>
          </span>
          
          </span>
        </div>
        <div className="container  relative  mx-40">
          <Verticalline height='h-[70px]' width='w-[5px]' rotate='rotate-0' />
        </div>
        
        <div className="container  relative   mx-20">
          <Box text="Your Data" color="bg-blue-700"/>
        </div>
      </div>
    
    </>
  );
}

export default Dvc