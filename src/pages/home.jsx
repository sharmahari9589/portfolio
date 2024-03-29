
import React, { useEffect } from 'react';
import style from '../styles/home.module.css';
import "../App.css"
import img from '../assets/develop.png'
import { FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa6';
import { CiLinkedin } from "react-icons/ci";
import { Typewriter } from 'react-simple-typewriter'
export const Home = () => {



  useEffect(() => {
    // Initialize jQuery Ripples
    $('.ripplediv').ripples({
      // options here
    });
  }, []);
  return (
    <div className='ripplediv'>
      <div className={style.mainDiv}>
      <div>
        <img src={img}/>
      </div>
      <div className={style.contentDiv}>
         <h1>Hi, I am   <span style={{color:'#fec544'}}><Typewriter  words={[ 'Harishankar Sharma','NodeJs Developer', 'ReactJs Developer', 'MERN-Stack Developer']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
           /></span></h1>
         <p>I am a mern stack web developer. I can provide clean code and good design.
I also make website more & more interactive with javascript combinations.</p>
   <div className={style.svg}>
    <p><FaFacebookF /></p>
    <p><CiLinkedin /></p>
    <p><FaInstagram /></p>
    <p><FaGithub /></p>
   </div>
      </div>
      </div>
    </div>
  )
}
