import { Image, Button, Card } from '@mantine/core';
import React from 'react';

const Container = () => {
        return (
        <Card className='container'>
            <Card.Section className='navigation'>
                <Button className='nav-button'>about me</Button>
                <Button className='nav-button'>experience</Button>
                <Button className='nav-button'>projects</Button>
                <Button className='nav-button'>more</Button>
            </Card.Section>
            <Card.Section className='header'>
                <Image></Image>
            </Card.Section>
        </Card>
        );
}

export default Container;
