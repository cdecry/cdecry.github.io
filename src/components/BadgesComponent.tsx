import { InputBase, Pill, Space } from '@mantine/core';
import React, { useState } from 'react';

type Skill = {
    name: string;
    categories: string[];
}

const CATEGORIES = [
    'all',
    'languages',
    'libraries/frameworks',
    'databases',
    'tools/operating systems',
    'frontend',
    'backend'
]

const BadgesComponent = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const skills = [
        { name: 'C#', categories: ['languages'] },
        { name: 'Java', categories: ['languages'] },
        { name: 'Python', categories: ['languages', 'backend'] },
        { name: 'JavaScript', categories: ['languages', 'frontend'] },
        { name: 'React.js', categories: ['frontend', 'libraries/frameworks'] },
    ];
    
    const handleCategorySelect = (selected: string[]) => {
        setSelectedCategories(selected);
    };

    const getBadgeColor = (categories: string[]) => {
        if (categories.includes('languages')) return 'blue';
        if (categories.includes('libraries/frameworks')) return 'green';
        if (categories.includes('databases')) return 'yellow';
        if (categories.includes('tools/operating systems')) return 'purple';
        return 'gray';
    };

    const filteredSkills = skills.filter((skill: Skill) => {
        if (selectedCategories.includes('all')) return skills
        return selectedCategories.every((category: string) => 
            skill.categories.includes(category));
    });

    const pills = CATEGORIES
        .map((category, index) => (
            <Pill key={index}>
                {category}
            </Pill>
        ));

  return (
    <>
        
        {/* <InputBase component="div" multiline> */}
        <Pill.Group>{pills}</Pill.Group>
        <Space h='sm'/>
        {/* </InputBase> */}
      
        {/* <MultiSelect
            label="filter by..."
            placeholder="Pick value"
            data={CATEGORIES}
            // value={selectedCategories}
            onChange={handleCategorySelect}
        /> */}
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