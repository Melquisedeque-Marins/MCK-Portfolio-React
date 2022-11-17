import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState("");

  const handleMenu  = () => {
    document.querySelector(".main-menu")?.classList.toggle("active");
    document.querySelector(".mobile-menu")?.classList.toggle("active");
  }

  const handleMenuDesable  = () => {
    document.querySelector(".main-menu")?.classList.remove("active");
    document.querySelector(".mobile-menu")?.classList.remove("active");
  }
  
    return (
        <div id="navbar">
            <NavLink to="/" activeClassName="active" className="logo-link" exact>
                      <h1>MCK <span className="logo-complete">Enterprises</span></h1>
                    </NavLink>
            <ul className="main-menu">
                <li>
                    <NavLink to="/" className="navLink" onClick={handleMenuDesable} activeClassName="active" exact>
                      Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="navLink" onClick={handleMenuDesable} activeClassName="active" exact>
                      about
                    </NavLink>
                </li> 
                <li>
                    <NavLink to="/skills" className="navLink" onClick={handleMenuDesable} activeClassName="active" exact>
                      skills
                    </NavLink>
                </li> 
                <li>
                    <NavLink to="/projects" className="navLink" onClick={handleMenuDesable} activeClassName="active" exact>
                      projects
                    </NavLink>
                </li> 
            </ul>
            <div className="mobile-menu" onClick={handleMenu}>
              <div className="mobile-menu-bar line-1"></div>
              <div className="mobile-menu-bar line-2"></div>
              <div className="mobile-menu-bar line-3"></div>
            </div>
        </div>
    );
};
export default Navbar;