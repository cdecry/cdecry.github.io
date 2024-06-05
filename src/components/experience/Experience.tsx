import { Text, Space, Timeline, Avatar } from "@mantine/core";
import { useEffect } from "react";
import classes from './experience.module.css';
import { motion } from "framer-motion";

const hubspotIcon = require('../../assets/experience/hubspot-icon.png');
const dayforceIcon = require('../../assets/experience/dayforce-icon.png');
const khergIcon = require('../../assets/experience/kherg-icon.png');
const uhnIcon = require('../../assets/experience/uhn-icon.png');
const uoftIcon = require('../../assets/experience/uoft-icon-bg.png');
const mmhsIcon = require('../../assets/experience/mmhs-icon.png');

const Experience = () => {
    
    useEffect(() => {
        // const nodes = document.querySelectorAll('.fadeInNode');
        const content = document.querySelector('.content');
        if (content) {
            setTimeout(() => {
              content.classList.add('fade-in');
            }, 50);
        }
        // nodes.forEach((node, index) => {
        //     setTimeout(() => {
        //       node.classList.add('fade-in');
        //     }, (nodes.length - index) * 100);
        // });
    }, []);

    const experienceList = [
        {
            title: "Software Engineering Intern",
            company: "HubSpot",
            icon: hubspotIcon,
            date: "September 2024 - December 2024",
            location: "Cambridge, MA"
        },
        {
            title: "Software Engineering Intern",
            company: "Dayforce",
            icon: dayforceIcon,
            date: "May 2024 - Present",
            location: "Toronto, ON"
        },
        {
            title: "Machine Learning Research Intern",
            company: "University of Toronto",
            icon: uoftIcon,
            date: "May 2024 - Present",
            location: "Toronto, ON"
        },
        {
            title: "Software Engineering Intern",
            company: "Dayforce",
            icon: dayforceIcon,
            date: "January 2024 - April 2024",
            location: "Toronto, ON"
        },
        {
            title: "Software Engineer",
            company: "Kidney Health Education and Research Group",
            icon: khergIcon,
            date: "September 2023 - Present",
            location: "Toronto, ON"
        },
        {
            title: "Software Engineeing Intern",
            company: "University Health Network",
            icon: uhnIcon,
            date: "May 2023 - August 2024",
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
                <Timeline color="#ea80fc" reverseActive active={4} bulletSize={24} lineWidth={6} className="exp-timeline">
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
                        </Timeline.Item>
                    ))}
                    </Timeline>
            </div>
        </div>
    );
}

export default Experience;
