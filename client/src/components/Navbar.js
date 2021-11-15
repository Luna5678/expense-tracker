import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import { NavbarData } from './NavbarData';

import { IconContext } from 'react-icons';
import * as BsIcons from 'react-icons/bs';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <>
      <IconContext.Provider value={{color: "#f4f5f6"}}>
        <div className="navbar">
          <Link to="#" className="menu-arrow">
            <BsIcons.BsArrowRightCircle onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <BsIcons.BsArrowLeftCircle onClick={showSidebar} />
              </Link>
            </li>
            {NavbarData.map((item, idx) => {
              return(
                <li key={idx} className={item.className} onClick={showSidebar}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="nav-title">{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;