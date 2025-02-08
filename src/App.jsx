import React from 'react'
import { DarkModeProvider } from './components/DarkModeContext'
import Header from './components/Header'
import Hero from './section/Hero'
import About from './section/About'
import PopularArea from './section/PopularArea'
import Properties from './section/Properties'
import Services from "./section/Services"
import Clients from "./section/Clients"
import Contact from "./section/Contact"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <DarkModeProvider>
        <Header/>
        <Hero/>
        <About/>
        <PopularArea/>
        <Properties/>
        <Services/>
        <Clients/>
        <Contact/>
        <Footer/>
      </DarkModeProvider>
    </div>
  )
}

export default App
