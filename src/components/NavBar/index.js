import { Link, NavLink } from 'react-router-dom';
import NavButton from '../NavButton';
import './index.scss';

const NavBar = () => {
    return (
    <div className='nav-bar'>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <NavButton page="about"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/projects">
                <NavButton page="projects"/>
            </NavLink>
            <a target="_blank" href="/Crystal_Huang_Resume.pdf">
                <NavButton page="resume"/>
            </a>
            <NavLink exact="true" activeclassname="active" to="/art">
                <NavButton page="art + design"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/journal">
                <NavButton page="journal"/>
            </NavLink>
        </nav>
    </div>
    );
}

export default NavBar;