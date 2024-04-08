import { Image, Card, Text } from '@mantine/core';
import ButtonComponent from './ButtonComponent';
import { useState } from 'react';
import ContentComponent from './ContentComponent';
import AboutComponent from './AboutComponent';
import ExperienceComponent from './ExperienceComponent';

type ContainerProps = {
    currentTab: string;
}

const Container = () => {

    const [currentTab, setCurrentTab] = useState("about me");

        return (
        <Card className='container'>
            <Card.Section className='navigation'>
                <ButtonComponent name="about me" currentTab={currentTab} setCurrentTab={setCurrentTab}/>
                <ButtonComponent name="experience" currentTab={currentTab} setCurrentTab={setCurrentTab}/>
                <ButtonComponent name="projects" currentTab={currentTab} setCurrentTab={setCurrentTab}/>
                <ButtonComponent name="more" currentTab={currentTab} setCurrentTab={setCurrentTab}/>
            </Card.Section>

            {currentTab === 'about me' && <AboutComponent />}
            {currentTab === 'experience' && <ExperienceComponent />}

        </Card>
        );
}

export default Container;
