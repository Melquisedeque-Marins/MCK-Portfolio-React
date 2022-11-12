import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <div id="navbar">
            <NavLink to="/" activeClassName="active" exact>
                      <h1>MCK Enterprises</h1>
                    </NavLink>
            <ul className="main-menu">
                <li>
                    <NavLink to="/" className="navLink" activeClassName="active" exact>
                      Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="navLink" activeClassName="active" exact>
                      about
                    </NavLink>
                </li> 
                <li>
                    <NavLink to="/skills" className="navLink" activeClassName="active" exact>
                      skills
                    </NavLink>
                </li> 
                <li>
                    <NavLink to="/projects" className="navLink" activeClassName="active" exact>
                      projects
                    </NavLink>
                </li> 
            </ul>
        </div>
    );
};
export default Navbar;