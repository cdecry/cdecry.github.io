import {Card, SimpleGrid, Text, Image, Space } from "@mantine/core";
const reactIcon = require('../images/react-icon.png');
const jsIcon = require('../images/js-icon.png');
const htmlIcon = require('../images/html-icon.png');
const cssIcon = require('../images/css-icon.png');


const AboutComponent = () => {

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
                            <Image
                                radius="md"
                                h={80}
                                w="auto"
                                fit="contain"
                                src={reactIcon}
                            />
                            <Image
                                radius="md"
                                h={80}
                                w="auto"
                                fit="contain"
                                src={jsIcon}
                            />
                            <Image
                                radius="md"
                                h={80}
                                w="auto"
                                fit="contain"
                                src={htmlIcon}
                            />
                            <Image
                                radius="md"
                                h={80}
                                w="auto"
                                fit="contain"
                                src={cssIcon}
                            />
                        </SimpleGrid>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;
