import React from 'react'

import { motion } from "framer-motion"
import HocXmove from '../HOC/HocXmove'

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
    </>
  )
}

export default Animation