import React from 'react'
import style from "../styles/contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa6';
import { CiLinkedin } from "react-icons/ci";
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

export const Contact = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <div className={style.mainDiv}>

    <motion.div className={style.title} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
      <h1>Contact</h1>
    </motion.div>
    <motion.div className={style.upperTitile} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
      <h1>Contact</h1>
      <hr />
      </motion.div>
      <div className={style.ContactDiv}>
        <motion.div className={style.subDiv1} variants={variant} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
       <h1>Just say Hello</h1>
       <input type='text' placeholder='Your name'/>
       <input type='email' placeholder='Your email'/>
       <input type='text' placeholder='your subject'/>
       <textarea  placeholder='Your message'></textarea>
       <button>Send Message</button>
        </motion.div>
        <motion.div className={style.subDiv2} variants={varian} initial="hidden" animate={inView ? 'visible' : 'hidden'} ref={ref}>
       <h1>Contact Info</h1>
       <p>Feel free to contact me any time.</p>
       <div className={style.myDiv}>
        
       <p><MdOutlineEmail /></p>
      <div>
      <h2>Email</h2>
       <p>sharmahari9589@gmail.com</p>
      </div>
       </div>

       <div className={style.myDiv}>
       <p><FaPhoneAlt /></p>
       <div>
       <h2>phone</h2>
       <p>+91 9589517945</p>
       </div>
      
       </div>
       <div className={style.myDiv}>
       <p><FaLocationDot /></p>
       <div>
       <h2>Address</h2>

       <p>Vill.-Sarsi dist-Ratlam 
        Madhya-Pradesh
       </p>
       </div>
       
       </div>

       <h2>Visit my social profile and get connected</h2>
       <div className={style.svg}>
       <p><FaFacebookF /> </p>
    <p><CiLinkedin /> </p>
    <p><FaInstagram /> </p>
</div>
        </motion.div>
      </div>
      </div>
  )
}
