import React, { useState, useEffect } from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom'

function Nav() {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
          <div className='nav_contents'>
            <img
                onClick={() => navigate('/')}
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt="Nav Logo"
            />
            <img
                onClick={() => navigate('/profile')}
                className="nav_avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="Nav Avatar"
            />
          </div>
      </div>
    )
}

export default Nav
