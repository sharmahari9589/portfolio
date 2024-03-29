import React from 'react'
import style from "../styles/project.module.css";
import { FaPlusCircle } from "react-icons/fa";
import { TiPlusOutline } from "react-icons/ti";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
  hidden: {
    transform: 'translateY(100px)',
    opacity: 0,
  },
  visible: {
    transform: 'translateY(0px)',
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const variant = {
  hidden: {
    transform: 'translateX(-100px)',
    opacity: 0,
  },
  visible: {
    transform: 'translateX(0px)',
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};


const varian = {
  hidden: {
    transform: 'translateX(100px)',
    opacity: 0,
  },
  visible: {
    transform: 'translateX(0px)',
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};


export const Project = () => {

 
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0, // Adjust this value as needed
  });

  return (
    <div className={style.mainDiv}>

      <motion.div className={style.title} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
        <h1>Projects</h1>
      </motion.div>
      <motion.div className={style.upperTitile} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
        <h1>Projects</h1>
        <hr />
      </motion.div>
      <div className={style.parentDiv}>
       <motion.div className={style.subDiv} variants={variant} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
        <div>
          <div className={style.myDiv}>
            
             <p>
             <TiPlusOutline />
          </p>
         <h1>Name</h1>
          </div>
        </div>
        <div>
        
        <div className={style.myDiv}>
           <p>
           <TiPlusOutline />
        </p>
        <h1>Name</h1>
        </div>
      </div>
      <div>
        
          <div className={style.myDiv}>
             <p>
             <TiPlusOutline />
          </p>
          <h1>Name</h1>
          </div>
        </div> 
       </motion.div>
       <motion.div className={style.subDiv} variants={varian} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
       <div>
        
          <div className={style.myDiv}>
             <p>
             <TiPlusOutline />
          </p>
          <h1>Name</h1>
          </div>
        </div>
        <div>
        
          <div className={style.myDiv}>
             <p>
             <TiPlusOutline />
          </p>
          <h1>Name</h1>
          </div>
        </div>
        <div>
        
          <div className={style.myDiv}>
             <p>
             <TiPlusOutline />
          </p>
          <h1>Name</h1>
          </div>
        </div>
       </motion.div>
      </div>
      </div>
  )
}
