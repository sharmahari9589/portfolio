import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import style from "../styles/about.module.css";
import img from '../assets/latest.png'

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
    transform: 'translatex(100px)',
    opacity: 0,
  },
  visible: {
    transform: 'translatex(0px)',
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const varian = {
  hidden: {
    transform: 'translate(-100px)',
    opacity: 0,
  },
  visible: {
    transform: 'translatex(0px)',
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <div className={style.mainDiv}>
      <motion.div className={style.title} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
        <h1>About Me</h1>
      </motion.div>
      <motion.div className={style.upperTitile} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
        <h1>About Me</h1>
        <hr />
      </motion.div>
      <div className={style.gridContainer}>
        <motion.div className={style.img} variants={varian} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
          <img src={img} style={{objectFit: "contain"}}  />
        </motion.div>
        <motion.div className={style.contentDiv} variants={variant} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
          <h1>Hi There! I'm Hari Sharma</h1>
          <h3>MERN Stack Developer</h3>
          <article>I am a MERN-stack developer with 1+ year of experience in Node.js and React.js. I am able to build interactive web applications with Node.js and React.js and their respective frameworks and tools.</article>
          <p>Birthday: November 18, 1997</p>
          <p>Phone: +91 9589517945</p>
          <p>Email: Sharmahari9589@gmail.com</p>
          <p>From: Ratlam</p>
          <p>Language: English, Hindi</p>
          <p>Freelance: Available</p>
          <button className={style.btn}>Download CV</button>
        </motion.div>
      </div>
    </div>
  );
};
