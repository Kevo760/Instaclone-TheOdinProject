import React from 'react'
import { BottomBar } from '../Styled Components/Navbars'
import {FaSearch, FaHome, FaPlusSquare, FaUserCircle} from 'react-icons/fa'

function BottomNav() {
  return (
    <BottomBar>
        <FaHome/>
        <FaSearch/>
        <FaPlusSquare />
        <FaUserCircle />
    </BottomBar>
  )
}

export default BottomNav