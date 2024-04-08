import { Text } from "@mantine/core";

const AboutComponent = () => {

    return (
        <div className='tab'>
            <div className='header'></div>
            <div className='content'>
                <Text>
                    <h2>welcome!</h2>
                    hi! my name is <em id='crystal'>crystal</em>, and i'm a 
                    third-year computer science co-op student @ the University of 
                    Toronto, passionate about software development and its innovative 
                    (and fun) applications. my enthusiasm for exploring new technologies 
                    makes me a quick learner!<br></br><br></br>

                    the purpose of this website is to allow me to share my projects, 
                    hobbies, and interests, while practicing my web development skills 
                    by building a responsive, interactive, fun experience.<br></br><br></br>
                    <h2>How I got into cs</h2>
                </Text>
            </div>
        </div>
    );
}

export default AboutComponent;
