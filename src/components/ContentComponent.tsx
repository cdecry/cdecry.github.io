import { Text } from "@mantine/core";

type ContentComponentProps = {
    currentTab: string;
}

const ContentComponent = (props: ContentComponentProps) => {

    return (
        <div className='tab'>
            <div className='header'></div>
            <div className='content'>
                {props.currentTab === 'about me' && 
                <Text className='content-active'>
                    hi! my name is <em id='crystal'>crystal</em>, and i'm a 
                    third-year computer science co-op student @ the University of 
                    Toronto, passionate about software development and its innovative 
                    (and fun) applications. my enthusiasm for exploring new technologies 
                    makes me a quick learner!<br></br><br></br>

                    the purpose of this website is to allow me to share my projects, 
                    hobbies, and interests, while practicing my web development skills 
                    by building a responsive, interactive, fun experience.
                </Text>}
                {props.currentTab === 'experience' && 
                <Text className='content-active'>
                    experience
                </Text>}
                {props.currentTab === 'projects' && 
                <Text className='content-active'>
                    here's a portfolio showcasing a few of the projects i've worked 
                    on in the past. it's constantly evolving, so feel free to head 
                    over to my GitHub for even more updates!
                </Text>}
                {props.currentTab === 'more' && 
                <Text className='content-active'>
                    more?
                </Text>}
            </div>
        </div>
    );
}

export default ContentComponent;
