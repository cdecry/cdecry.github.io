import { Space, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import { useState } from 'react';

type Skill = {
    name: string;
    categories: string[];
}

const CATEGORIES = [
    'all',
    'languages',
    'frontend',
    'backend',
    'libraries/frameworks',
    'databases',
    'tools/os',
]

const SKILLS = [
    { name: 'C#', categories: ['languages', 'backend'] },
    { name: 'Java', categories: ['languages', 'backend'] },
    { name: 'Python', categories: ['languages', 'backend'] },
    { name: 'JavaScript', categories: ['languages', 'frontend'] },
    { name: 'TypeScript', categories: ['languages', 'frontend'] },
    { name: 'HTML', categories: ['languages', 'frontend'] },
    { name: 'CSS', categories: ['languages', 'frontend'] },
    { name: 'C++', categories: ['languages', 'backend'] },
    { name: 'C', categories: ['languages', 'backend'] },
    { name: 'React.js', categories: ['frontend', 'libraries/frameworks'] },
    { name: 'Node.js', categories: ['libraries/frameworks', 'backend'] },
    { name: 'TailwindCSS', categories: ['frontend', 'libraries/frameworks'] },
    { name: 'pandas', categories: ['libraries/frameworks', 'backend'] },
    { name: 'NumPy', categories: ['libraries/frameworks', 'backend'] },
    { name: 'PostgreSQL', categories: ['databases', 'backend'] },
    { name: 'MySQL', categories: ['databases', 'backend'] },
    { name: 'SQL Server', categories: ['databases', 'backend'] },
    { name: 'MongoDB', categories: ['databases', 'backend'] },
    { name: 'Unity', categories: ['tools/os'] },
    { name: 'Visual Studio', categories: ['tools/os'] },
    { name: 'Visual Studio Code', categories: ['tools/os'] },
    { name: 'Linux', categories: ['tools/os'] },
    { name: 'SSMS', categories: ['tools/os', 'databases', 'backend'] },
    { name: 'Azure Data Studio', categories: ['tools/os', 'databases', 'backend'] },
];

const BadgesComponent = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>(['all']);
    
    const toggleSelect = (selected: string) => {
        if (selected === 'all' && !selectedCategories.includes('all')) {
            selectedCategories.every((category: string) => 
                toggleSelect(category));
            setSelectedCategories(['all']);
            return;
        }

        let updated = selectedCategories.filter(item => item !== 'all');

        if (selectedCategories.includes(selected) && selectedCategories.length == 1)
            setSelectedCategories(['all']);
        else if (selectedCategories.includes(selected))
            setSelectedCategories(updated.filter(item => item !== selected));
        else
            setSelectedCategories([...updated, selected]);
    };

    const getBadgeColor = (categories: string[]) => {
        if (categories.includes('languages')) return 'blue';
        if (categories.includes('libraries/frameworks')) return 'red';
        if (categories.includes('tools/os')) return 'indigo';
        if (categories.includes('databases')) return 'green';
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
    <div className='badge-component'>
        <Text size='sm'>
            filter skills by one or more categories {filteredSkills.length > 0 ? "😊" : "🤔"}
        </Text>
        <div className='pill-button-container'>
            {pills}
        </div>
        <Space h='sm'/>
        <div className="badge-container">
            {filteredSkills.length > 0 ? filteredSkills.map((skill, index) => (
                <motion.div
                    layout="position"
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                >
                <span key={index} className={`badge ${getBadgeColor(skill.categories)}`}>
                    {skill.name}
                </span>
                </motion.div>
            )) : <Text c='dimmed' size='sm'>no results.. looks like it's time to pick up some new tricks! c:
                </Text>
            }
        </div>
    </div>
  );
}

export default BadgesComponent;