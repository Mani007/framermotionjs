
import './App.css';
import { motion } from "framer-motion"

function App() {
  return (
    <>
    <div className='container items-center justify-center px-5 py-20'>
     <motion.h1 
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
     className="text-6xl text-center  text-cyan-600 font-bold underline">
      Hello world!
    </motion.h1>
    </div>
    </>
  );
}

export default App;
