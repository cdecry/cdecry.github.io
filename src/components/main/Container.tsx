import { Image, Card, Text } from '@mantine/core';
import ButtonComponent from './NavButton';
import { useState } from 'react';
import AboutComponent from '../about/About';
import ExperienceComponent from '../experience/Experience';
import ProjectsComponent from '../projects/Projects';
import ThemeSwitch from './ThemeSwitch';

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
                <ButtonComponent name="journal" currentTab={currentTab} setCurrentTab={setCurrentTab}/>
                <ThemeSwitch />
            </Card.Section>

            <div className='header'>
                <Text ta='left' className='header-text'>/ {currentTab}</Text>
            </div>
            <div className='container-body'>
                {currentTab === 'about me' && <AboutComponent />}
                {currentTab === 'experience' && <ExperienceComponent />}
                {currentTab === 'projects' && <ProjectsComponent />}
            </div>

        </Card>
        );
}

export default Container;
