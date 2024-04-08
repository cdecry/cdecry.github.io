import { Avatar, Text, ThemeIcon, Timeline } from "@mantine/core";
import { IconSun, IconVideo, IconHtml } from '@tabler/icons-react';

const AboutComponent = () => {

    return (
        <div className='tab'>
            <div className='header'></div>
            <div className='content'>
                <Text size="xl" fw={800}>
                    &#9135; welcome
                </Text>
                <Text>
                    hi! my name is <em id='crystal'>crystal</em>, and i'm a 
                    third-year computer science co-op student @ the University of 
                    Toronto, passionate about software development and its innovative 
                    (and fun) applications. i love exploring new technologies and 
                    putting them to use!<br></br><br></br>

                    the purpose of this website is to allow me to share my projects, 
                    hobbies, and interests, while practicing my web development skills 
                    by building a responsive, interactive, fun experience. as i 
                    continue to learn and improve my skills, I frequently 
                    integrate them into and refine my personal projects.<br></br><br></br>
                    
                    fun fact: this is actually the 4th iteration of my personal 
                    website!<br></br><br></br>
                </Text>
            </div>
        </div>
    );
}

export default AboutComponent;
