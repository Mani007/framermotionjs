import React from 'react'

import { motion } from "framer-motion"
import HocXmove from '../HOC/HocXmove'
import { zoomIn } from '../motions/motion'

// React Server Components
//import * as motion from "framer-motion/client"
function Animation() {
  return (
    <>
    <HocXmove>
    <div >
        <p>The animation with x moved to 100px</p>
    </div>
    </HocXmove>
    <motion.div variants={zoomIn(2,1)} 
    initial="hidden"
    whileInView="show"
    >
        <p>The animation with zoom in</p>
    </motion.div>
    </>
  )
}

export default Animation