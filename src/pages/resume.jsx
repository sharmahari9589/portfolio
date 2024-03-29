import React from 'react'
import style from "../styles/resume.module.css";
import { FaGraduationCap } from "react-icons/fa";
import { PiOfficeChairFill } from "react-icons/pi";
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

export const Resume = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0, // Adjust this value as needed
  });

  return (
    <div className={style.mainDiv}>

    <motion.div className={style.title} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
      <h1>Resume</h1>
    </motion.div>
    <motion.div className={style.upperTitile} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
      <h1>Resume</h1>
      <hr />
    </motion.div>
    <div className={style.parentDiv}>
    <motion.div className={style.sonDiv1} variants={variant} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
      <div className={style.headingDiv}>
      <FaGraduationCap />
      <h1>Education</h1>
      </div>
      <div id={style.content} className={style.contentDiv1}>
      <p></p>
      <h1>Certification in MERN</h1>
      <h3>2022 - 23</h3>
      <h2>Universal Informatics Indore</h2>
      <article>Sussefully completed MERN Stack development course.</article>
      </div>
      <div className={style.contentDiv1}>
      <p></p>
      <h1>Bachelor of Science</h1>
      <h3>2014 - 17</h3>
      <h2>Vikram University Ujjain</h2>
      <article>Sussefully completed my graduation in bachelor on science with 60%.</article>
      </div>
      <div className={style.contentDiv1}>
      <p></p>
      <h1>Higher Secondary Education</h1>
      <h3>2013 - 14</h3>
      <h2>Jawahar Navodaya Vidhyalaya Ratlam</h2>
      <article>Sussefully completed my education in science with 84%.</article>
      </div>
    </motion.div>
    <motion.div className={style.sonDiv2} variants={varian} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
      
    <div className={style.headingDiv}>
    <PiOfficeChairFill />
    <h1>Experience</h1>
</div>
<div id={style.content2} className={style.contentDiv2}>
<p></p>
<h1>It Spark Technology</h1>
      <h3>2023-24</h3>
      <h2>MERN stack developer</h2>
      <article>Handle all thed backend related development responsiblity and also integrate ith with fronend.</article>
</div>


    </motion.div>
    </div>
    </div>
  )
}
