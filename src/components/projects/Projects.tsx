import { Text } from "@mantine/core";
import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useAnimation, useInView } from "framer-motion";
import classes from './projects.module.css';

const Projects = () => {

    useEffect(() => {
        const content = document.querySelector('.content');
        
        if (content) {
            setTimeout(() => {
              content.classList.add('fade-in');
            }, 50);
        }
    }, []);
    
    const miraiBanner = require(`../../assets/projects/mirai-banner.png`);
    const tabsBanner = require(`../../assets/projects/tabs-banner.gif`);
    const planetBanner = require(`../../assets/projects/planet-banner.png`);
    const venueBanner = require(`../../assets/projects/venue-banner.png`);
    const snakeBanner = require(`../../assets/projects/snake-banner.gif`);
    const miniwebBanner = require(`../../assets/projects/miniweb-banner.png`);
    const iportfolioBanner = require(`../../assets/projects/iportfolio-banner.gif`);

    const ghUser = "cdecry";
    const ghUserIcon = "https://avatars.githubusercontent.com/u/35664551"
    const defaultBannerUrl = "https://github.blog/wp-content/uploads/2020/12/102393310-07478b80-3f8d-11eb-84eb-392d555ebd29.png?resize=1200%2C630"
    const projectList = [
        { 
            name: '🔮 Mirai', 
            description: `
            An MMORPG virtual world for making and chatting with 
            friends, customizing your avatar, and exploring new places.
            `,
            bannerUrl: miraiBanner,
            tags: ["C#", "MySQL", "Unity", "game development"],
            progress: 100
        },
        { 
            name: '📁 Tabs', 
            description: `
            An app for household + roommate management. 
            Manage inventory, rent, finances, schedule 
            chores and more.`,
            bannerUrl: tabsBanner,
            tags: ["React Native", "TypeScript", "MongoDB", "mobile", "ui/ux"],
            progress: 100,
        },
        { 
            name: '🪐 Planet Bot', 
            description: `A planning & team management chat that allows you to streamline Trello operations in 
            your Discord server!`,
            bannerUrl: planetBanner,
            tags: ["C#", ".NET", "Entity Framework Core"],
            progress: 100
        },
        { 
            name: '🏟️ Venue Bookings', 
            description: `An app that allows users to join and schedule upcoming
             events at venues, built on Google's Material Design 3.`,
            bannerUrl: venueBanner,
            tags: ["Java", "Firebase","mobile"],
            progress: 100
        },
        { 
            name: '🐍 SnakeAI', 
            description: `Using a simple Feedforward Neural Network and Deep 
            Q-Learning to train an AI to play the classic Snake game! :>`,
            bannerUrl: snakeBanner,
            tags: ["Python", "PyTorch","PyGame", "Machine Learning"],
            progress: 100
        },
        { 
            name: '📱 iPortfolio', 
            description: `An iPad-themed responsive portfolio website made with Angular, HTML, and CSS.`,
            bannerUrl: iportfolioBanner,
            tags: ["Angular", "JavaScript","HTML", "CSS", "web development"],
            progress: 100
        },
        { 
            name: '🌟 Fantage Reboot', 
            description: `Unofficial HTML5 & JavaScript port of the flash-based 
            MMORPG Fantage with core features from the original game.`,
            bannerUrl: defaultBannerUrl,
            tags: ["HTML5", "JavaScript", "Node.js", "MongoDB", "game development"],
            progress: 60
        },
        { 
            name: '🌐 MiniWeb 3DS', 
            description: `Compact web-browser for the Nintendo 3DS that allows you 
            to visit websites that won't load on the native browser!`,
            bannerUrl: miniwebBanner,
            tags: ["C++", "Homebrew"],
            progress: 40
        },
    ];

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
    };
      
    const projectMotion = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
    };    

    return (
        <div className='tab'>
            {/* <div className='header'></div> */}
            <div className='content'>
                {/* <div className='projects-grid'> */}
                {/* <Text>
                    here's a portfolio showcasing a few of the projects i've worked 
                    on in the past. it's constantly evolving, so feel free to head 
                    over to my GitHub for even more updates!
                </Text> */}
                <motion.div
                    className={classes.projectsGrid}
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {projectList.map((item, idx) => (
                        <motion.div
                            key={idx} 
                            className="item" 
                            variants={projectMotion}
                            transition={{ duration: 0.6 }}
                        >
                        <ProjectCard
                            key={idx} 
                            name={item.name} 
                            description={item.description}
                            ghUser={ghUser}
                            ghUserIcon={ghUserIcon}
                            bannerUrl={item.bannerUrl}
                            tags={item.tags}
                            progress={item.progress}
                        />
                        </motion.div>
                    ))}
                </motion.div>
                {/* </div> */}
            </div>
        </div>
    );
}

export default Projects;
