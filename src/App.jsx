import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {

  return (
    <>
      <BrowserRouter> 
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}  ></Route>
          <Route path="/Menu" element={<Menu />}  ></Route>
          <Route path="/About" element={<About />}  ></Route>
          <Route path="/Contact" element={<Contact />}  ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App