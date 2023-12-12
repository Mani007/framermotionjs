
import './App.css';
import { motion } from "framer-motion"

function App() {
  return (
    <>
    <div className='container items-center justify-center px-5 py-20'>
     <motion.h1 
      animate={{
        x: 200,
        y: 500
      }}
     className="text-6xl text-center  text-cyan-600 font-bold underline">
      Hello world!
    </motion.h1>
    </div>
    </>
  );
}

export default App;
