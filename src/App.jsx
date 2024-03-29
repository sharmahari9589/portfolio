import { useState,lazy } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import { Main } from './components/main'

function App() {

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Main/>} />
</Routes>
</BrowserRouter>

    
    </>
  )
}

export default App
