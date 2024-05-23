import { Text } from "@mantine/core";
import { useEffect } from "react";
import ProjectCardComponent from "./ProjectCardComponent";

const ProjectsComponent = () => {

    useEffect(() => {
        const content = document.querySelector('.content');
        
        if (content) {
            setTimeout(() => {
              content.classList.add('fade-in');
            }, 50);
        }
    }, []);
    
    const ghUser = "cdecry";
    const ghUserIcon = "https://avatars.githubusercontent.com/u/35664551"
    const defaultBannerUrl = "https://github.blog/wp-content/uploads/2020/12/102393310-07478b80-3f8d-11eb-84eb-392d555ebd29.png?resize=1200%2C630"
    const projectList = [
        { 
            id: 0, 
            name: 'Project 1', 
            description: 'This is the first item',
            bannerUrl: defaultBannerUrl,
            tags: ["tag 1"]
        },
        { 
            id: 1, 
            name: 'Project 2', 
            description: 'This is the second item',
            bannerUrl: defaultBannerUrl,
            tags: ["tag 2"]
        },
        { 
            id: 2, 
            name: 'Project 3', 
            description: 'This is the third item',
            bannerUrl: defaultBannerUrl,
            tags: ["tag 1"]
        },
    ];


    return (
        <div className='tab'>
            {/* <div className='header'></div> */}
            <div className='content'>
                <div className='projects-grid'>
                {/* <Text>
                    here's a portfolio showcasing a few of the projects i've worked 
                    on in the past. it's constantly evolving, so feel free to head 
                    over to my GitHub for even more updates!
                </Text> */}
                    {projectList.map(item => (
                        <ProjectCardComponent 
                        // key={item.id} 
                        // id={item.id} 
                        name={item.name} 
                        description={item.description}
                        ghUser={ghUser}
                        ghUserIcon={ghUserIcon}
                        bannerUrl={item.bannerUrl}
                        tags={item.tags}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectsComponent;
