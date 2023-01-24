import NavBar from '../NavBar';
import './index.scss';
import { Routes, Route } from 'react-router-dom';
import htmlIcon from '../../assets/images/html-icon.png';
import cssIcon from '../../assets/images/css-icon.png';
import jsIcon from '../../assets/images/js-icon.png';
import reactIcon from '../../assets/images/react-icon.png';

const Website = () => {
    return (
        <div className='website-card'>
            <NavBar/>
            
                <Routes>
                    <Route path="/" element={
                        <div className='website-content'>
                            <div className="title">
                                {/* <text className="header">-</text> */}
                                <text className="header">a</text>
                                <text className="header">b</text>
                                <text className="header">o</text>
                                <text className="header">u</text>
                                <text className="header">t</text>
                                <text className="header">!</text>
                                {/* <text className="header">-</text> */}
                            </div>
                            <text>i am a third-year computer science co-op student @ the University of Toronto, passionate about software development, game development, and continous learning.</text>
                            <br/><br/>
                            <text>the purpose of this website is to allow me to share my projects, hobbies, and interests, while practicing my web development skills by building a responsive, interactive, fun webpage!</text>
                            <br/><br/>
                            <div className="title">
                                {/* <text className="header">-</text> */}
                                <text className="header-tech">m</text>
                                <text className="header-tech">a</text>
                                <text className="header-tech">d</text>
                                <text className="header-tech">e</text>
                                <text className="header-tech">-</text>
                                <text className="header-tech">w</text>
                                <text className="header-tech">i</text>
                                <text className="header-tech">t</text>
                                <text className="header-tech">h</text>
                                <text className="header-tech">:</text>
                                {/* <text className="header">-</text> */}
                            </div>
                            {/* <text>ReactJS, JavaScript, HTML, CSS</text> */}
                            <div className="tech-row">
                                <a target="_blank" href="https://reactjs.org/"><img className="tech-icon" src={reactIcon}/></a>
                                <img className="tech-icon" src={jsIcon}/>
                                <img className="tech-icon" src={htmlIcon}/>
                                <img className="tech-icon" src={cssIcon}/>
                            </div>
                            {/* <text className='header'>-welcome-</text> */}
                        </div>
                    }/>
                </Routes>
        </div>
    )
}

export default Website;