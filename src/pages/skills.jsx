import React from 'react'
import style from '../styles/skill.module.css';
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
export const Skills = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <div className={style.mainDiv}>
    <motion.div className={style.title} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
      <h1>Skills</h1>
    </motion.div >
    <motion.div  className={style.upperTitile} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
      <h1>Skills</h1>
      <hr />
    </motion.div >
    <div className={style.mainBox}>
   <motion.div className={style.subDiv} variants={variant} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
    <h1>All the skills that I have in that field of work are mentioned.</h1>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
   </motion.div>
   <motion.div className={style.subDiv2} variants={varian} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
    <div>
    <h2>HTML</h2>
     <p>95%</p>
    </div>
    <div>
    <h2>CSS</h2>
     <p>95%</p>
    </div>
    <div>
    <h2>JAVASCRIPT</h2>
     <p>95%</p>
    </div>
    <div>
    <h2>NODE JS</h2>
     <p>95%</p>
    </div>
    <div>
    <h2>REACT JS</h2>
     <p>95%</p>
    </div>
    <div>
    <h2>MONGODB</h2>
     <p>95%</p>
    </div>
   </motion.div>
    </div>
    </div>

  )
}
  