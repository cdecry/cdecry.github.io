import {Card, SimpleGrid, Text, Image, Space, Tooltip } from "@mantine/core";
import { useEffect } from "react";
import BadgesComponent from "./BadgesComponent";
const reactIcon = require('../images/react-icon.png');
const jsIcon = require('../images/js-icon.png');
const htmlIcon = require('../images/html-icon.png');
const cssIcon = require('../images/css-icon.png');


const AboutComponent = () => {
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
            }, orderIndex * 100); //
        });
        icons.forEach((icon, index) => {
            icon.classList.remove('scale-animation');
        });
      }, []);

    return (
        <div className='tab'>
            {/* <div className='header'></div> */}
            <div className='content'>
                <div className='horizontal-section'>
                    <div>
                        <Text size="xl" fw={800}>
                            &#9135; welcome
                        </Text>
                        <Text>
                            hi! my name is <em id='crystal'>crystal</em>, and i'm a 
                            third-year computer science co-op student @ the University of 
                            Toronto, passionate about software development and its innovative 
                            (and fun) applications. i'm always learning and exploring new 
                            technologies!<br></br><br></br>

                            the purpose of this website is to allow me to share my projects, 
                            hobbies, and interests, while practicing my web development skills 
                            by building a responsive, interactive, fun experience.
                        </Text>
                    </div>
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
                </div>
                <Space h='md'/>
                <div className='horizontal-section'>
                    <div>
                        <Text size="xl" fw={800}>
                            &#9135; skills / technologies
                        </Text>
                        <Space h='md' />
                        <BadgesComponent />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AboutComponent;
