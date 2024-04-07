import { Text } from "@mantine/core";

type ContentComponentProps = {
    currentTab: string;
}

const ContentComponent = (props: ContentComponentProps) => {

    return (
        <div className='content'>
            {props.currentTab === 'about me' && <Text>
                hi! my name is <em id='crystal'>crystal</em>, and i'm a third-year computer science co-op student @ the University of 
                Toronto, passionate about software development and its innovative 
                (and fun) applications. my enthusiasm for exploring new technologies 
                makes me a quick learner!<br></br><br></br>

                the purpose of this website is to allow me to share my projects, 
                hobbies, and interests, while practicing my web development skills 
                by building a responsive, interactive, fun experience.
            </Text>}
            {props.currentTab === 'experience' && <Text>
                experience
            </Text>}
            {props.currentTab === 'projects' && <Text>
                projects
            </Text>}
            {props.currentTab === 'more' && <Text>
                more?
            </Text>}
        </div>
    );
}

export default ContentComponent;
