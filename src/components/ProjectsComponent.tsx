import { Text } from "@mantine/core";
import { useEffect } from "react";

const ProjectsComponent = () => {

    useEffect(() => {
        const content = document.querySelector('.content');
        
        if (content) {
            setTimeout(() => {
              content.classList.add('fade-in');
            }, 50);
        }
      }, []);
      
    return (
        <div className='tab'>
            {/* <div className='header'></div> */}
            <div className='content'>
                {/* <Text>
                    here's a portfolio showcasing a few of the projects i've worked 
                    on in the past. it's constantly evolving, so feel free to head 
                    over to my GitHub for even more updates!
                </Text> */}
            </div>
        </div>
    );
}

export default ProjectsComponent;
