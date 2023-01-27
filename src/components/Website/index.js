import NavBar from '../NavBar';
import './index.scss';
import { Routes, Route } from 'react-router-dom';
import htmlIcon from '../../assets/images/html-icon.png';
import cssIcon from '../../assets/images/css-icon.png';
import jsIcon from '../../assets/images/js-icon.png';
import reactIcon from '../../assets/images/react-icon.png';
import PortfolioItem from '../PortfolioItem';
import ModalPopup from '../ModalPopup';
import tabsSS from '../../assets/images/tabsss.png';
import sportsSS from '../../assets/images/sports-ss.jpeg';
import planetSS from '../../assets/images/planet-ss.png';
import miraiSS from '../../assets/images/mirai2.gif';
import minionSS from '../../assets/images/minion-ss.png';
import iPortfolioSS from '../../assets/images/iportfolio-ss.gif';
import websiteSS from '../../assets/images/website-ss.png';

const Website = () => {

    var tabsProjectBlurb = "Tabs is a comprehensive household management cross-platform mobile app that enhances users' home lives by preventing disorganization, miscommunication, and avoidable situations with their roommates. Users are able to seamlessly manage inventory and finances, create and keep track of schedules and chores, and manage many other accommodations, saving them time and effort.";

    var sportsProjectBlurb = "Sports Venue Scheduler is an innovative and user-friendly android app that streamlines the process of scheduling and joining sports events. Customers can schedule games, join upcoming events and keep track of their scheduled activities all in one convenient location. Admins can manage venues and filter events by venue. It provides a secure login and account system for both customers and admins.";

    var planetProjectBlurb ="A planning & team management Discord bot programmed in C# using the Discord.NET library. Planet is a useful tool that utilizes the TrelloAPI to streamline Trello operations from your Discord team server. User is able to link their Trello account, easily set and change default Trello board to navigate/view, navigate/View Trello boards, lists, cards, and more.";

    var iPortfolioProjectBlurb = "An iPad themed interactive personal website with Angular routing and animations for visually appealing route transitions. Components/layout were designed in Figma with an iPad-inspired theme,  HTML/CSS was used to implement responsive frontend";

    var minionProjectBlurb = "This program uses Python scripts to capture the popular online game League of Legends in real-time and accurately recognize objects within the game. Through the use of OpenCV and machine learning techniques, I trained a cascade classifier to detect minions and their healthbars in the game! This was a fun and educational experience in the fields of computer vision, image processing, and machine learning.";

    var miraiProjectBlurb = "";

    var fantageProjectBlurb = "";

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
                            <text>the purpose of this website is to allow me to share my projects, hobbies, and interests, while practicing my web development skills by building a responsive, interactive, fun experience!</text>
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
                            <a href="/public/Crystal_Huang_Resume.pdf">BOB</a>
                            {/* <text className='header'>-welcome-</text> */}
                        </div>
                    }/>
                    <Route path="/projects" element={
                        <>
                        <div className='website-content'>
                            <div className="title">
                                <text className="header">p</text>
                                <text className="header">r</text>
                                <text className="header">o</text>
                                <text className="header">j</text>
                                <text className="header">e</text>
                                <text className="header">c</text>
                                <text className="header">t</text>
                                <text className="header">s</text>
                                <text className="header">!</text>
                            </div>
                            <text>here's a portfolio showcasing a few of the projects i've worked on in the past. it's constantly evolving, so feel free to head over to <a href="https://github.com/cdecry" target="_blank">my GitHub</a> for even more updates!</text><br/>
                            <div className="grid">
                                <PortfolioItem title={"Tabs Household Management"} description={tabsProjectBlurb} image={tabsSS}/>
                                <PortfolioItem title={"Sports Venue Scheduler"} description={sportsProjectBlurb} image={sportsSS}/>
                                <PortfolioItem title={"Planet Bot"} description={planetProjectBlurb} image={planetSS}/>
                                
                                <PortfolioItem title={"LoL Minion Detector"} description={minionProjectBlurb} image={minionSS}/>
                                <PortfolioItem title={"iPortfolio (old portfolio)"} description={iPortfolioProjectBlurb} image={iPortfolioSS}/>
                                <PortfolioItem title={"Personal Website (this!)"} description={miraiProjectBlurb} image={websiteSS}/>
                                <PortfolioItem title={"Mirai Game"} description={miraiProjectBlurb} image={miraiSS}/>
                                <PortfolioItem title={"Fantage Emulator"} description={fantageProjectBlurb} image={htmlIcon}/>
                                
                            </div>
                        </div>
                        </>
                    }/>
                </Routes>
        </div>
    )
}

export default Website;