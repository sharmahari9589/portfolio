import React from 'react'
import style from '../styles/services.module.css';
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
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

export const Services = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0, // Adjust this value as needed
  });

  return (
    <div className={style.mainDiv}>

    <motion.div className={style.title} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
      <h1>Service</h1>
    </motion.div>
    <motion.div className={style.upperTitile} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
      <h1>Service</h1>
      <hr />
    </motion.div>

    <div className={style.serviceDiv}>
        <div >
        <motion.div variants={variant} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
            <span>
            <SiHtml5 />
            </span>
      
            <h1>HTML</h1>
            <p>
            Provide all html5 related services. Html5 is used to create structural building block of a web application. 
            </p>
        </motion.div>
        <motion.div variants={varian} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
        <span>
        <SiCss3 />
            </span>
            <h1>CSS</h1>
            <p>
            Provide all html5 related services. CSS3 is used to implement designing and animation effects in css.
            </p>
        </motion.div>
        <motion.div variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
        <span>
        <RiJavascriptFill />
            </span>
            <h1>Javascript</h1>
            <p>
            Provide all javascript related services. Javascript is used to apply function working of web application. 
            </p>
        </motion.div>
        </div>
        <div>
        <motion.div variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
        <span>
        <FaNodeJs />
            </span>
            <h1>Node Js</h1>
            <p>
            Provide all backend related services with node js. Node js is used for writing server side applications.
            </p>
        </motion.div>
        <motion.div variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
        <span>
        <IoLogoReact />
            </span>
            <h1>React Js</h1>
            <p>
            Provide all frontend related services with react js. Node js is used for writing frontend  applications.
            </p>
        </motion.div>
        <motion.div variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
        <span>
        <SiMongodb />
            </span>
            <h1>Mongodb</h1>
            <p>
            Provide database related service with mongodb.Mongodb is used to stored data and managed. 
            </p>
        </motion.div>
        </div>
      
    </div>
    </div>
  )
}
