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
    
    const assetLoc = "../../assets/experience"
    const miraiBanner = require(`${assetLoc}/mirai-banner.png`);

    const ghUser = "cdecry";
    const ghUserIcon = "https://avatars.githubusercontent.com/u/35664551"
    const defaultBannerUrl = "https://github.blog/wp-content/uploads/2020/12/102393310-07478b80-3f8d-11eb-84eb-392d555ebd29.png?resize=1200%2C630"
    const projectList = [
        { 
            id: 0, 
            name: 'Mirai', 
            description: `
            An MMORPG virtual world built with Unity and C#. Features include login/signup, multiplayer interaction, inventory system, chat system, 
            room location management, and buddy system.
            `,
            bannerUrl: miraiBanner,
            tags: ["C#", "MySQL", "Unity", "game development"]
        },
        { 
            id: 1, 
            name: 'Tabs', 
            description: `
            Tabs is an iOS/Android app for household and roommate management. 
            Users are able to manage inventory and finances, create/schedule 
            chores and more.`,
            bannerUrl: defaultBannerUrl,
            tags: ["React Native", "TypeScript", "MongoDB", "full stack"]
        },
        { 
            id: 2, 
            name: 'Project 3', 
            description: 'This is the third item',
            bannerUrl: defaultBannerUrl,
            tags: ["tag 1"]
        },
        { 
            id: 3, 
            name: 'Project 4', 
            description: 'This is the fourth item',
            bannerUrl: defaultBannerUrl,
            tags: ["tag 1"]
        },
        { 
            id: 4, 
            name: 'Project 5', 
            description: 'This is the fifth item',
            bannerUrl: defaultBannerUrl,
            tags: ["tag 1"]
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
                    {projectList.map(item => (
                        <motion.div
                            key={item.id} 
                            className="item" 
                            variants={projectMotion}
                            transition={{ duration: 0.6 }}
                        >
                        <ProjectCard
                            key={item.id} 
                            name={item.name} 
                            description={item.description}
                            ghUser={ghUser}
                            ghUserIcon={ghUserIcon}
                            bannerUrl={item.bannerUrl}
                            tags={item.tags}
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
