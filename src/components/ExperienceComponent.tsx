import { Text, Space, Timeline, Avatar } from "@mantine/core";
import { useEffect } from "react";
const hubspotIcon = require('../images/hubspot-icon.png');
const dayforceIcon = require('../images/dayforce-icon.png');
const khergIcon = require('../images/kherg-icon.png');
const uhnIcon = require('../images/uhn-icon.png');
const uoftIcon = require('../images/uoft-icon-bg.png');
const mmhsIcon = require('../images/mmhs-icon.png');

const ExperienceComponent = () => {
    
    useEffect(() => {
        const nodes = document.querySelectorAll('.fade-in-node');
        const content = document.querySelector('.content');
        if (content) {
            setTimeout(() => {
              content.classList.add('fade-in');
            }, 50);
        }
        nodes.forEach((node, index) => {
            setTimeout(() => {
              node.classList.add('fade-in');
            }, (nodes.length - index) * 100);
        });
    }, []);

    return (
        <div className='tab'>
            {/* <div className='header'></div> */}
            <div className='content'>
                <Text size="xl" fw={800}>
                    &#9135; work experience
                </Text>
                <Space h="lg" />
                
                <Timeline color="#a98cedff" reverseActive active={3} bulletSize={24} lineWidth={6}>
                    {/* <Timeline.Item
                        className="fade-in-node"
                        title="Software Engineer Intern"
                        bullet={
                            <Avatar className="company-icon" src={hubspotIcon} />
                        }
                    >
                        <Text size="sm">HubSpot</Text>
                        <Text size="xs" mt={4}>September 2024 - December 2024</Text>
                    </Timeline.Item> */}

                    <Timeline.Item 
                        className="fade-in-node"
                        title="Software Engineer Intern"
                        bullet={
                            <Avatar className="company-icon" src={dayforceIcon} />
                        }
                    >
                        <Text size="sm">Dayforce</Text>
                        <Text size="xs" mt={4}>May 2024 - Present</Text>
                    </Timeline.Item>

                    <Timeline.Item 
                        className="fade-in-node"
                        title="Machine Learning Researcher"
                        bullet={
                            <Avatar className="company-icon" src={uoftIcon} />
                        }
                    >
                        <Text size="sm">University of Toronto</Text>
                        <Text size="xs" mt={4}>May 2024 - Present</Text>
                    </Timeline.Item>


                    <Timeline.Item 
                        className="fade-in-node"
                        title="Software Engineer Intern"
                        bullet={
                            <Avatar className="company-icon" src={dayforceIcon} />
                        }
                    >
                        <Text size="sm">Dayforce</Text>
                        <Text size="xs" mt={4}>January 2024 - April 2024</Text>
                    </Timeline.Item>

                    <Timeline.Item 
                        className="fade-in-node"
                        title="Software Engineer"
                        bullet={
                            <Avatar className="company-icon" src={khergIcon} />
                        }
                    >
                        <Text size="sm">Kidney Health Education and Research Group</Text>
                        <Text size="xs" mt={4}>September 2023 - Present</Text>
                    </Timeline.Item>

                    <Timeline.Item 
                        className="fade-in-node"
                        title="Software Engineer Intern"
                        bullet={
                            <Avatar className="company-icon" src={uhnIcon} />
                        }
                    >
                        <Text size="sm">University Health Network</Text>
                        <Text size="xs" mt={4}>May 2023 - August 2023</Text>
                    </Timeline.Item>

                    {/* <Timeline.Item 
                        className="fade-in-node"
                        title="Milliken Mills High School"
                        bullet={
                            <Avatar className="company-icon" src={mmhsIcon} />
                        }
                    >
                        <Text size="sm">Computer Lab Assistant</Text>
                        <Text size="xs" mt={4}>January 2018 - March 2020</Text>
                    </Timeline.Item> */}
                    </Timeline>
            </div>
        </div>
    );
}

export default ExperienceComponent;
