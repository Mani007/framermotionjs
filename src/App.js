
import './App.css';
import { motion } from "framer-motion"

function App() {
  return (
    <>
    <div className=' w-full items-center justify-center px-5 py-5'>
     <motion.h1 
      animate={{
        x: 100,
        
      }}
      transition={{ delay: 3 }}
     className="text-6xl text-center  text-cyan-600 font-bold underline">
      Hello world!
    </motion.h1>
    </div>
    </>
  );
}

export default App;
