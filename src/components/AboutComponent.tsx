import { Avatar, Card, SimpleGrid, Text, ThemeIcon, Timeline } from "@mantine/core";
import { IconSun, IconVideo, IconHtml } from '@tabler/icons-react';

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
                    <SimpleGrid cols={2} verticalSpacing="sm">
                        <div>React</div>
                        <div>HTML5</div>
                        <div>CSS</div>
                        <div>TypeScript</div>
                    </SimpleGrid>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default AboutComponent;
