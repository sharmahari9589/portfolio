import React, { useEffect, useState } from 'react'
import style from "../styles/navBar.module.css";
import img from "../assets/logo.png"
import { FaPhone } from "react-icons/fa6";
import "../App.css";
import { GiHamburgerMenu } from "react-icons/gi";
export const NavBar = () => {
  const [visible,setvisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const homeLink = document.getElementById("home");
      const servicesLink = document.getElementById("about");
      const aboutLink = document.getElementById("skills");
      const pricielink = document.getElementById("resume");
      const news = document.getElementById("project");
      const contact = document.getElementById("contact");
      const yOffset = window.pageYOffset;
      if (yOffset > -10 && yOffset <= 520) {
        homeLink.classList.add("activeLink");
        servicesLink.classList.remove("activeLink");
        aboutLink.classList.remove("activeLink");
        pricielink.classList.remove("activeLink");
        news.classList.remove('activeLink');
  
      } else if (yOffset > 520 && yOffset <= 2200) {
        servicesLink.classList.add("activeLink");
        homeLink.classList.remove("activeLink");
        aboutLink.classList.remove("activeLink");
        pricielink.classList.remove("activeLink");
        news.classList.remove('activeLink');
  
      } else if (yOffset > 2200 && yOffset <= 2800) {
        aboutLink.classList.add("activeLink");
        homeLink.classList.remove("activeLink");
        servicesLink.classList.remove("activeLink");
        pricielink.classList.remove("activeLink");
        news.classList.remove('activeLink');
  
      } else if (yOffset > 2800 && yOffset <= 3800) {
        pricielink.classList.add('activeLink');
        homeLink.classList.remove('activeLink');
        servicesLink.classList.remove('activeLink');
        aboutLink.classList.remove('activeLink');
        news.classList.remove('activeLink');
  
      }

      else if (yOffset > 3800 && yOffset <= 4750) {
        news.classList.add('activeLink');
        homeLink.classList.remove('activeLink');
        servicesLink.classList.remove('activeLink');
        aboutLink.classList.remove('activeLink');
        pricielink.classList.remove('activeLink');
        contact.classList.remove('activeLink');
      }
      
      else if (yOffset > 4750) {
        contact.classList.add('activeLink');
        homeLink.classList.remove('activeLink');
        servicesLink.classList.remove('activeLink');
        aboutLink.classList.remove('activeLink');
        pricielink.classList.remove('activeLink');
        news.classList.remove('activeLink');
      }
      else {
        // Handle the default case when scroll position doesn't match any condition
        homeLink.classList.remove('activeLink');
        servicesLink.classList.remove('activeLink');
        aboutLink.classList.remove('activeLink');
        pricielink.classList.remove('activeLink');
      }
    };
  
    // Add event listener to window scroll
    window.addEventListener("scroll", handleScroll);
  
    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOnScroll = (targetId) => {
    if (targetId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  
    if (targetId === "about") {
      window.scrollTo({
        top: 530,
        behavior: "smooth"
      });
    }
  
    if (targetId === "skills") {
      window.scrollTo({
        top: 2240,
        behavior: "smooth"
      });
    }
  
  
    
    
    if (targetId === "resume") {
      window.scrollTo({
        top: 2830,
        behavior: "smooth"
      });
    }
  
    if (targetId === "project") {
      window.scrollTo({
        top: 3820,
        behavior: "smooth"
      });
    }


    if (targetId === "contact") {
      window.scrollTo({
        top: 4760,
        behavior: "smooth"
      });
    }
  };

  const handleMenu = () =>{
    console.log("hii");
  setvisible(!visible)
  }

  
  return (
    <>    
    <div className={style.mainDiv}>
        <div className={style.subDiv}>
        <div className={style.imgDiv}>
            <img src={img} />
        </div>

        <div className={style.contentDiv} >
          <span style={{display:"none"}} onClick={()=>handleMenu()}><GiHamburgerMenu /></span>
            <p id='home' onClick={() => handleOnScroll("home")}>HOME</p>
            <p id='about' onClick={() => handleOnScroll("about")}>ABOUT</p>
            <p id='skills' onClick={() => handleOnScroll("skills")}>SKILLS</p>
            <p id='resume' onClick={() => handleOnScroll("resume")}>RESUME</p>
            <p id='project' onClick={() => handleOnScroll("project")}>PROJECTS</p>
            <p id='contact' onClick={() => handleOnScroll("contact")}>CONTACT</p>

            

            <p style={{cursor:"none"}}>|</p>
            <p><FaPhone /> &nbsp; <span style={{color:'#fec544',cursor:"none"}}>+91 9589517945</span></p>
        </div>
        </div>


        {visible&& <div  className={style.sideBar}>
           <a id='home' onClick={() => handleOnScroll("home")}>HOME</a>
            <a id='about' onClick={() => handleOnScroll("about")}>ABOUT</a>
            <a id='skills' onClick={() => handleOnScroll("skills")}>SKILLS</a>
            <a id='resume' onClick={() => handleOnScroll("resume")}>RESUME</a>
            <a id='project' onClick={() => handleOnScroll("project")}>PROJECTS</a>
            <a id='contact' onClick={() => handleOnScroll("contact")}>CONTACT</a>
</div>}
    </div>
    </>

  )
}
