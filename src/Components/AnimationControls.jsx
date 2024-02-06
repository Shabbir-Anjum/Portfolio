import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
const AnimationControls = () => {
    const controls = useAnimation();
    const ref = useRef();
  
    useEffect(() => {
      const handleScroll = () => {
        // Get the distance of the element from the top of the viewport
        const distanceFromTop = ref.current.getBoundingClientRect().top;
        // Trigger animation when the element comes into view
        if (distanceFromTop < window.innerHeight) {
          controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
        }
      };
  
      // Add event listener for scroll
      window.addEventListener('scroll', handleScroll);
      
      // Remove event listener when component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [controls]);
  
    return (
      <div style={{ height: '100vh' }}>
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
          >
            <h1>This will animate on scroll</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </motion.div>
        </div>
      </div>
    );
  };
  

export default AnimationControls;