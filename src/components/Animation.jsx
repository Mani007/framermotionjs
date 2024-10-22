import React from 'react'
// React
import { motion } from "framer-motion"

// React Server Components
//import * as motion from "framer-motion/client"
function Animation() {
  return (
    <>
    <motion.div animate={{ x: 100 }}>
        <p>The animation with x moved to 100px</p>
    </motion.div>
    </>
  )
}

export default Animation