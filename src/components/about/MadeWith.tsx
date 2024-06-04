import {Card, SimpleGrid, Text, Image, Space, Tooltip } from "@mantine/core";
import { useEffect } from "react";
const reactIcon = require('../images/react-icon.png');
const jsIcon = require('../images/js-icon.png');
const htmlIcon = require('../images/html-icon.png');
const cssIcon = require('../images/css-icon.png');


const MadeWith = () => {
    useEffect(() => {
        const icons = document.querySelectorAll('.made-with-icon');
        const content = document.querySelector('.content');
        
        if (content) {
            setTimeout(() => {
              content.classList.add('fade-in');
            }, 50);
        }

        [1, 2, 4, 3].forEach((index, orderIndex) => {
            setTimeout(() => {
                const icon = icons[index - 1];
                icon.classList.add('scale-animation');
            }, orderIndex * 100 + 200); //
        });
        icons.forEach((icon, index) => {
            icon.classList.remove('scale-animation');
        });
    }, []);
    
    return (
        <Card className='made-with-container'>
            <Text size='xs' c='dimmed'>this website is made with:</Text>
            <Space h='xs'/>
            <SimpleGrid cols={2} verticalSpacing="xs" spacing="xs">
                <Tooltip
                    label='React.js'
                >
                    <Image
                        className='made-with-icon'
                        radius="md"
                        h={80}
                        w="auto"
                        fit="contain"
                        src={reactIcon}
                        tabIndex={0}
                    />
                </Tooltip>
                <Tooltip
                    label='JavaScript'
                >
                    <Image
                        className='made-with-icon'
                        radius="md"
                        h={80}
                        w="auto"
                        fit="contain"
                        src={jsIcon}
                        tabIndex={0}
                    />
                </Tooltip>
                <Tooltip
                    label='HTML5'
                >
                    <Image
                        className='made-with-icon'
                        radius="md"
                        h={80}
                        w="auto"
                        fit="contain"
                        src={htmlIcon}
                        tabIndex={0}
                    />
                </Tooltip>
                <Tooltip
                    label='CSS3'
                >
                    <Image
                        className='made-with-icon'
                        radius="md"
                        h={80}
                        w="auto"
                        fit="contain"
                        src={cssIcon}
                        tabIndex={0}
                    />
                </Tooltip>
            </SimpleGrid>
        </Card>
    );
}

export default MadeWith;
