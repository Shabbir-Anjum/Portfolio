import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
const AnimationControls = ({children, width='fit-content'}) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInview= useInView(ref,{once: true})
  
    useEffect(() => {
      if(isInview){
        controls.start('visible')
      }
    }, [isInview]);
  
    return (
      <span ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
       
          <motion.div
          variants={{
            hidden:{opacity: 0, y: 75},
            visible:{opacity: 1, y: 0},
          }}
            initial="hidden"
            animate={controls}
            transition={{duration: 0.5, delay: 0.35}}
          >
            {children}
          </motion.div>
       
      </span>
    );
  };
  

export default AnimationControls;