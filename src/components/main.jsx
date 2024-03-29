import React, { lazy } from 'react'

import { NavBar } from '../components/navBar'
import { Home } from '../pages/home'
import { About } from '../pages/about'
import { Services } from '../pages/services'
import { Skills } from '../pages/skills'
import { Resume } from '../pages/resume'
import { Project } from '../pages/project'
import { Contact } from '../pages/contact'
import { Footer } from '../pages/footer'
export const Main
 = () => {
  return (
  <>
      <NavBar/>
      <Home/>
      <About/>
      <Services/>
      <Skills/>
      <Resume/>
      <Project/>
      <Contact/>
      <Footer/>
  </>
  )
}
