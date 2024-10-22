import React from 'react'
import { motion } from "framer-motion"
function HocXmove({children}) {
  return (
    <>
    <motion.div animate={{ x: 100, y:200 }}>
    {children}
    </motion.div>
    </>
  )
}

export default HocXmove