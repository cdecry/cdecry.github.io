import { Text, Space, Timeline, Avatar } from "@mantine/core";
import { useEffect } from "react";
const hubspotIcon = require('../images/hubspot-icon.png');
const dayforceIcon = require('../images/dayforce-icon.png');
const khergIcon = require('../images/kherg-icon.png');
const uhnIcon = require('../images/uhn-icon.png');

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
                
                <Timeline color="#a98cedff" reverseActive active={2} bulletSize={24} lineWidth={6}>
                    <Timeline.Item
                        className="fade-in-node"
                        title="HubSpot"
                        bullet={
                            <Avatar className="company-icon" src={hubspotIcon} />
                        }
                    >
                        <Text size="sm">Incoming Software Engineer Intern</Text>
                        <Text size="xs" mt={4}>September 2024 - December 2024</Text>
                    </Timeline.Item>

                    <Timeline.Item 
                        className="fade-in-node"
                        title="Dayforce"
                        bullet={
                            <Avatar className="company-icon" src={dayforceIcon} />
                        }
                    >
                        <Text c="dimmed" size="sm">Software Engineer Intern</Text>
                        <Text size="xs" mt={4}>January 2024 - August 2024</Text>
                    </Timeline.Item>

                    <Timeline.Item 
                        className="fade-in-node"
                        title="Kidney Health Education and Research Group"
                        bullet={
                            <Avatar className="company-icon" src={khergIcon} />
                        }
                    >
                        <Text c="dimmed" size="sm">Software Engineer</Text>
                        <Text size="xs" mt={4}>September 2023 - August 2024</Text>
                    </Timeline.Item>

                    <Timeline.Item 
                        className="fade-in-node"
                        title="University Health Network"
                        bullet={
                            <Avatar className="company-icon" src={uhnIcon} />
                        }
                    >
                        <Text c="dimmed" size="sm">Software Engineer Intern</Text>
                        <Text size="xs" mt={4}>May 2023 - August 2023</Text>
                    </Timeline.Item>
                    </Timeline>
            </div>
        </div>
    );
}

export default ExperienceComponent;
