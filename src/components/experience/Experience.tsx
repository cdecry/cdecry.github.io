import { Text, Space, Timeline, Avatar } from "@mantine/core";
import { useEffect } from "react";
import classes from './experience.module.css';
import { motion } from "framer-motion";

const hubspotIcon = require('../../assets/experience/hubspot-icon.png');
const dayforceIcon = require('../../assets/experience/dayforce-icon.png');
const khergIcon = require('../../assets/experience/kherg-icon.png');
const uhnIcon = require('../../assets/experience/uhn-icon.png');
const uoftIcon = require('../../assets/experience/uoft-icon-bg.png');
const microsoftIcon = require('../../assets/experience/microsoft-icon.jpeg');
const mmhsIcon = require('../../assets/experience/mmhs-icon.png');

const Experience = () => {
    
    useEffect(() => {
        
        const nodes = document.querySelectorAll(`.${classes.fadeInNode}`);

        const content = document.querySelector('.content');
        if (content) {
            setTimeout(() => {
              content.classList.add('fade-in');
            }, 50);
        }

        nodes.forEach((node, index) => {
            console.log(node);
            setTimeout(() => {
                node.classList.add(classes.fadeIn);
            }, (index) * 200);
        });
    }, []);

    const experienceList = [
        {
            title: "Incoming Software Engineering Intern",
            company: "Microsoft",
            icon: microsoftIcon,
            date: "Jan 2025 - Apr 2025",
            location: "Vancouver, BC"
        },
        {
            title: "Incoming Software Engineering Intern",
            company: "HubSpot",
            icon: hubspotIcon,
            date: "Sep 2024 - Dec 2024",
            location: "Cambridge, MA"
        },
        {
            title: "Software Engineer Intern",
            company: "Dayforce",
            icon: dayforceIcon,
            date: "Jan 2024 - Present",
            location: "Toronto, ON"
        },
        {
            title: "Machine Learning Research Intern",
            company: "University of Toronto",
            icon: uoftIcon,
            date: "May 2024 - Present",
            location: "Toronto, ON"
        },
        // {
        //     title: "Software Engineering Intern",
        //     company: "Dayforce",
        //     icon: dayforceIcon,
        //     date: "January 2024 - April 2024",
        //     location: "Toronto, ON"
        // },
        {
            title: "Software Engineer",
            company: "KHERG",
            icon: khergIcon,
            date: "Sep 2023 - Present",
            location: "Toronto, ON"
        },
        {
            title: "Software Engineer Intern",
            company: "University Health Network",
            icon: uhnIcon,
            date: "May 2023 - Aug 2024",
            location: "Toronto, ON"
        }
    ]

    return (
        <div className='tab'>
            {/* <div className='header'></div> */}
            <div className='content'>
                <Text size="xl" fw={800}>
                    &#9135; work experience
                </Text>
                <Space h="lg" />
                <Space h="sm" />
                <Timeline color="#ea80fc" reverseActive active={3} bulletSize={24} lineWidth={6} className="exp-timeline">
                    {experienceList.map((item, idx) => (
                        <Timeline.Item 
                            className={classes.fadeInNode}
                            title={item.title}
                            bullet={
                                <Avatar className={classes.companyIcon} src={item.icon} />
                            }
                        >
                            <Text size="sm">{item.company}</Text>
                            <Text size="xs" mt={4}>{item.date}</Text>
                            {/* <Text size="xs" mt={4}>{item.location}</Text> */}
                        </Timeline.Item>
                    ))}
                    </Timeline>
            </div>
        </div>
    );
}

export default Experience;
