import React, { useState } from 'react';

type Skill = {
    name: string;
    categories: string[];
}

const BadgesComponent = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const skills = [
        { name: 'C#', categories: ['ProgrammingLanguages'] },
        { name: 'Java', categories: ['ProgrammingLanguages'] },
        { name: 'Python', categories: ['ProgrammingLanguages', 'Backend'] },
        { name: 'JavaScript', categories: ['ProgrammingLanguages', 'Frontend'] },
        { name: 'React.js', categories: ['Frontend', 'LibrariesFrameworks'] },
    ];
    
    const handleCategorySelect = (selected: string[]) => {
        setSelectedCategories(selected);
    };

    const getBadgeColor = (categories: string[]) => {
        if (categories.includes('ProgrammingLanguages')) return 'blue';
        if (categories.includes('LibrariesFrameworks')) return 'green';
        if (categories.includes('Databases')) return 'yellow';
        if (categories.includes('ToolsOS')) return 'purple';
        return 'gray';
    };

    const filteredSkills = skills.filter((skill: Skill) =>
        selectedCategories.every((category: string) => skill.categories.includes(category))
    );

  return (
    <>
        <div className="badge-container">
            {/* blue- programming languages */}
            {/* green - libraries and frameworks */}
            {/* yellow - databases */}
            {/* purple - tools */}

            {filteredSkills.map((skill, index) => (
                <span key={index} className={`badge ${getBadgeColor(skill.categories)}`}>
                    {skill.name}
                </span>
            ))}
            {/* <span className='badge blue'>C#</span>
            <span className='badge blue'>Java</span>
            <span className='badge blue'>Python</span>
            <span className='badge blue'>JavaScript</span>
            <span className='badge blue'>TypeScript</span>
            <span className='badge blue'>HTML</span>
            <span className='badge blue'>CSS</span>
            <span className='badge blue'>C++</span>
            <span className='badge blue'>C</span>

            <span className='badge green'>React.js</span>
            <span className='badge green'>Node.js</span>
            <span className='badge green'>TailwindCSS</span>
            <span className='badge green'>pandas</span>
            <span className='badge green'>NumPy</span>

            <span className='badge yellow'>PostgreSQL</span>
            <span className='badge yellow'>MySQL</span>
            <span className='badge yellow'>MongoDB</span>

            <span className='badge purple'>Unity</span>
            <span className='badge purple'>Visual Studio</span>
            <span className='badge purple'>VS Code</span>

            <span className='badge pink'>Linux</span>
            <span className='badge pink'>Unix</span> */}

        </div>
    </>
  );
}

export default BadgesComponent;