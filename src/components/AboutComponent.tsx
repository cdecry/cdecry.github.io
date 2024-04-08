import { Avatar, Text, ThemeIcon, Timeline } from "@mantine/core";
import { Time } from "phaser";
import { IconSun, IconVideo } from '@tabler/icons-react';

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
                    learn and improve my skills, i tend to integrate them into 
                    and rework my personal projects.<br></br><br></br>
                    
                    fun fact: this is actually the 4th iteration of my website 
                    portfiolio!<br></br><br></br>
                </Text>
                <Text size="xl" fw={800}>
                    &#9135; history
                </Text>
                <Text>
                    Here's a brief overview on my progression with development:<br></br><br></br>
                </Text>

                <Timeline bulletSize={24}>
                    <Timeline.Item title="Default bullet">
                        <Text c="dimmed" size="sm">
                        Default bullet without anything
                        </Text>
                    </Timeline.Item>
                    <Timeline.Item
                        title="Avatar"
                        bullet={
                        <Avatar
                            size={22}
                            radius="xl"
                            src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
                        />
                        }
                    >
                        <Text c="dimmed" size="sm">
                        Timeline bullet as avatar image
                        </Text>
                    </Timeline.Item>
                    <Timeline.Item title="Icon" bullet={<IconSun size="0.8rem" />}>
                        <Text c="dimmed" size="sm">
                        Timeline bullet as icon
                        </Text>
                    </Timeline.Item>
                    <Timeline.Item
                        title="ThemeIcon"
                        bullet={
                        <ThemeIcon
                            size={22}
                            variant="gradient"
                            gradient={{ from: 'lime', to: 'cyan' }}
                            radius="xl"
                        >
                            <IconVideo size="0.8rem" />
                        </ThemeIcon>
                        }
                    >
                        <Text c="dimmed" size="sm">
                        Timeline bullet as ThemeIcon component
                        </Text>
                    </Timeline.Item>
                    </Timeline>
            </div>
        </div>
    );
}

export default AboutComponent;
