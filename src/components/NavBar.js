import React, {useState} from "react";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from './SidebarData';
import { Navbar } from "react-bootstrap";
// import './navbar.css';


export function NavBar() {
    const [sidebar, setSidebar] = useState(false);
    
    const showSidebar = () => setSidebar(!sidebar);
    return(

    <>
      <div className = "navbar">
          <Link to = "#" className = "menu-bars">
            <FaIcons.FaBars onClick = {showSidebar}/>
          </Link>
     
      </div>

      <nav className = {sidebar? 'nav-menu active': 'nav-menu'}>
          <ul className = 'nav-menu-items'>
              <li className = 'navbar-toggle'>
                  <Link to = "#" className = "menu-bars">
                    <AiIcons.AiOutlineClose />
                  </Link>

              </li>
                {SidebarData.map((items, index) => {
                    return (
                        <li key = {index} className = {items.cName}>
                            <Link to = {items.path}>
                                {items.icon}
                                <span>{items.title}</span>
                            </Link>
                        </li>
                    )
                })}
          </ul>
      </nav>
      </>
  );
}

export default NavBar;
