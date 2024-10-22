import { useState } from 'react';
import './App.css';
import { motion } from "framer-motion"
import Dvc from './pages/Dvc'
import Testingpage from './pages/Testingpage';

function App() {
  const [isOpen, setOpen] = useState(false)
  console.log(isOpen)
 
  return (
    <>
    {/* <div className=' w-full items-center justify-center px-5 py-5'>
     <motion.h1 
      // animate={{
      //   scale: 5,
      // }}
      transition={{ duration: 3 }}
     className="text-6xl text-center  text-cyan-600 font-bold underline">
      Hello world!
    </motion.h1> <br /> <br />
    <motion.button
    layout
    style={{ height: isOpen ? "100px" : "500px" }}
    onClick={() => setOpen(!isOpen)}
    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' > Click magic</motion.button>
    </div> */}
    <div className='flex'></div>
    {/* <Dvc/> */}
    <Testingpage/>
    
    </>
  );
}

export default App;

