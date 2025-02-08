import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaXmark, FaBars } from 'react-icons/fa6'
import logo from "../assets/images/logo.png"
import { useDarkMode } from './DarkModeContext'
import { FaPhoneAlt, FaUserCircle } from 'react-icons/fa'


const Header = () => {

  const {darkMode, toggleDarkmode} = useDarkMode();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () =>{
    setIsMenuOpen(isMenuOpen)
  }

  const closeMenu = () =>{
    setIsMenuOpen(false)
  }

  return (
    <div>
      header
    </div>
  )
}

export default Header
