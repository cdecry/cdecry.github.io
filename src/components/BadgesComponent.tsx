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
        { name: 'TypeScript', categories: ['languages', 'frontend'] },
        { name: 'HTML', categories: ['languages', 'frontend'] },
        { name: 'CSS', categories: ['languages', 'frontend'] },
        { name: 'C++', categories: ['languages'] },
        { name: 'C', categories: ['languages'] },
        { name: 'React.js', categories: ['frontend', 'libraries/frameworks'] },
        { name: 'Node.js', categories: ['libraries/frameworks'] },
        { name: 'TailwindCSS', categories: ['frontend', 'libraries/frameworks'] },
        { name: 'pandas', categories: ['libraries/frameworks'] },
        { name: 'NumPy', categories: ['libraries/frameworks'] },
        { name: 'PostgreSQL', categories: ['databases'] },
        { name: 'MySQL', categories: ['databases'] },
        { name: 'MongoDB', categories: ['databases'] },
        { name: 'Unity', categories: ['tools/os'] },
        { name: 'Visual Studio', categories: ['tools/os'] },
        { name: 'Visual Studio Code', categories: ['tools/os'] },
        { name: 'Linux', categories: ['tools/os'] },
    ];
    
    const handleCategorySelect = (selected: string[]) => {
        setSelectedCategories(selected);
    };

    const getBadgeColor = (categories: string[]) => {
        if (categories.includes('languages')) return 'blue';
        if (categories.includes('libraries/frameworks')) return 'red';
        if (categories.includes('databases')) return 'green';
        if (categories.includes('tools/os')) return 'yellow';
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
            
            {/*

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