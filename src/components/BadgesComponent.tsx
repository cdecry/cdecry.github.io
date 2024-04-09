import { Space } from '@mantine/core';
import { useState } from 'react';

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

const SKILLS = [
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
    { name: 'SQL Server', categories: ['databases'] },
    { name: 'MongoDB', categories: ['databases'] },
    { name: 'Unity', categories: ['tools/os'] },
    { name: 'Visual Studio', categories: ['tools/os'] },
    { name: 'Visual Studio Code', categories: ['tools/os'] },
    { name: 'Linux', categories: ['tools/os'] },
    { name: 'SSMS', categories: ['tools/os'] },
    { name: 'Azure Data Studio', categories: ['tools/os'] },
];

const BadgesComponent = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    
    const toggleSelect = (selected: string) => {
        if (selectedCategories.includes(selected))
            setSelectedCategories(selectedCategories.filter(item => item !== selected));
        else
            setSelectedCategories([...selectedCategories, selected]);
    };

    const getBadgeColor = (categories: string[]) => {
        if (categories.includes('languages')) return 'blue';
        if (categories.includes('libraries/frameworks')) return 'red';
        if (categories.includes('databases')) return 'green';
        if (categories.includes('tools/os')) return 'indigo';
        return 'gray';
    };

    const filteredSkills = SKILLS.filter((skill: Skill) => {
        if (selectedCategories.includes('all')) return SKILLS
        return selectedCategories.every((category: string) => 
            skill.categories.includes(category));
    });

    const pills = CATEGORIES
        .map((category, index) => (
            <button
                key={index}
                className={`pill-button ${selectedCategories.includes(category) ? 'active' : ''}`}
                onClick={() => toggleSelect(category)}
            >
                {category}
            </button>
        ));

  return (
    <>
        {pills}
        <Space h='sm'/>
        <div className="badge-container">
            {filteredSkills.map((skill, index) => (
                <span key={index} className={`badge ${getBadgeColor(skill.categories)}`}>
                    {skill.name}
                </span>
            ))}
        </div>
    </>
  );
}

export default BadgesComponent;