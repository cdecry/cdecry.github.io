import {Text, Space } from "@mantine/core";
import { useEffect } from "react";
import BadgesComponent from "./badges/Badges";
import classes from './about.module.css';

const About = () => {
    useEffect(() => {
        const nodes = document.querySelectorAll(`.${classes.fadeInNode}`);
        const content = document.querySelector('.content');

        if (content) {
            setTimeout(() => {
              content.classList.add('fade-in');
            }, 300);
        }

        nodes.forEach((node, index) => {
            setTimeout(() => {
                node.classList.add(classes.fadeIn);
            }, (index) * 600);
        });
    }, []);

    return (
        <div className='tab'>
            <div className='content'>
                <div>
                    <div className={classes.fadeInNode}>
                        <Text size="xl" fw={800}>
                            &#9135; welcome
                        </Text>
                        <Text>
                            hi! my name is <em id='crystal'>crystal</em>, and i'm a 
                            fourth-year computer science co-op student @ the University of 
                            Toronto, passionate about software development and its innovative 
                            (and fun!) applications. <br></br>
                        </Text>
                        <Space h='sm'/>
                        <Text>
                        {"💼 i've recently interned as a software engineer at "}
                        <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer"><b>Microsoft</b></a>,{" "}
                        <a href="https://www.hubspot.com" target="_blank" rel="noopener noreferrer"><b>HubSpot</b></a>, and{" "}
                        <a href="https://www.dayforce.com" target="_blank" rel="noopener noreferrer"><b>Dayforce</b></a>.
                        </Text>
                        <Space h='sm'/>
                        <Text>
                            {"this page is still a work-in-progress, but feel free to look around! 😎"}
                        </Text>
                        {/* <Space h='sm'/>
                        <Text>
                            the purpose of this website is to allow me to share my projects, 
                            hobbies, and interests, while practicing my web development skills 
                            by building a responsive, interactive, fun experience! 😄
                        </Text> */}
                    </div>
                </div>
                <Space h='md'/>
                <div>
                    <div className={classes.fadeInNode}>
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
