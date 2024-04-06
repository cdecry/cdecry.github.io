import { Image, Button, Card } from '@mantine/core';
import ButtonComponent from './ButtonComponent';
import { useState } from 'react';

type ContainerProps = {
    currentTab: string;
}

const Container = () => {

    const [currentTab, setCurrentTab] = useState("about");
    console.log(currentTab);

        return (
        <Card className='container'>
            <Card.Section className='navigation'>
                <ButtonComponent name="about me" setCurrentTab={setCurrentTab}/>
                <ButtonComponent name="experience" setCurrentTab={setCurrentTab}/>
                <ButtonComponent name="projects" setCurrentTab={setCurrentTab}/>
                <ButtonComponent name="more" setCurrentTab={setCurrentTab}/>
            </Card.Section>

            <Card.Section className='header'>
                <Image></Image>
            </Card.Section>

        </Card>
        );
}

export default Container;
