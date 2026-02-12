import React from 'react'
import img1 from '../../public/layoutImg/UIC logo-1.svg'

export default function Navbar() {
  return (
    <div>
      <nav>
        <div>
            <img src={img1} alt="" />
        </div>
        <ul>
            <li>About us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Career</li>
            <li>Blog</li>
        </ul>
      </nav>
    </div>
  )
}
