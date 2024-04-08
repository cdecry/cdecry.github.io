import { Text, Space, Timeline, Avatar } from "@mantine/core";
const hubspotIcon = require('../images/hubspot-icon.png');
const dayforceIcon = require('../images/dayforce-icon.png');
const khergIcon = require('../images/kherg-icon.png');
const uhnIcon = require('../images/uhn-icon.png');

const ExperienceComponent = () => {

    return (
        <div className='tab'>
            <div className='header'></div>
            <div className='content'>
                <Text size="xl" fw={800}>
                    &#9135; work experience
                </Text>
                <Space h="md" />
                
                <Timeline active={2} bulletSize={24} lineWidth={2}>
                    <Timeline.Item 
                        title="HubSpot"
                        bullet={
                            <Avatar className="company-icon" src={hubspotIcon} />
                        }
                    >
                        <Text c="dimmed" size="sm">Incoming Software Engineer Intern</Text>
                        <Text size="xs" mt={4}>September 2024 - December 2024</Text>
                    </Timeline.Item>

                    <Timeline.Item 
                        title="Dayforce"
                        bullet={
                            <Avatar className="company-icon" src={dayforceIcon} />
                        }
                    >
                        <Text c="dimmed" size="sm">Software Engineer Intern</Text>
                        <Text size="xs" mt={4}>January 2024 - August 2024</Text>
                    </Timeline.Item>

                    <Timeline.Item 
                        title="Kidney Health Education and Research Group"
                        bullet={
                            <Avatar className="company-icon" src={khergIcon} />
                        }
                    >
                        <Text c="dimmed" size="sm">Software Engineer</Text>
                        <Text size="xs" mt={4}>September 2023 - August 2024</Text>
                    </Timeline.Item>

                    <Timeline.Item 
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
