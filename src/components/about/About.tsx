import {Text, Space } from "@mantine/core";
import { useEffect } from "react";
import BadgesComponent from "./Badges";

const About = () => {
    useEffect(() => {
        const content = document.querySelector('.content');
        
        if (content) {
            setTimeout(() => {
                content.classList.add('fade-in');
            }, 300);
        }
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
                            fourth-year computer science co-op student @ the University of 
                            Toronto, passionate about software development and its innovative 
                            (and fun) applications. i'm always learning and exploring new 
                            technologies!<br></br>
                        </Text>
                        <Space h='sm'/>
                        <Text>
                            the purpose of this website is to allow me to share my projects, 
                            hobbies, and interests, while practicing my web development skills 
                            by building a responsive, interactive, fun experience.
                        </Text>
                    </div>
                </div>
                <Space h='md'/>
                <div className='horizontal-section'>
                    <div>
                        <Text size="xl" fw={800}>
                            &#9135; skills / technologies
                        </Text>
                        <BadgesComponent />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;
