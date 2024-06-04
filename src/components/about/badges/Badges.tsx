import { Space, Text } from '@mantine/core';
import { animate, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import classes from './badges.module.css';

type Skill = {
    name: string;
    categories: string[];
}

const CATEGORIES = [
    'all',
    'frontend',
    'backend',
    'languages',
    'libraries/frameworks',
    'tools/os',
    'databases',
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

let buttonClickSound = new Audio("sound/button-click.mp3")

const Badges = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>(['all']);
    
    useEffect(() => {
        let pills = document.querySelectorAll('.pill-button');

        pills.forEach((pill, orderIndex) => {
            pill.classList.add('hidden');
        });

        pills.forEach((pill, orderIndex) => {
            setTimeout(() => {
                pill.classList.remove('hidden');
            }, orderIndex * 100);
        });
    }, []);

    const toggleSelect = (selected: string) => {
        if (selected === 'all' && !selectedCategories.includes('all')) {
            selectedCategories.every((category: string) => 
                toggleSelect(category));
            setSelectedCategories(['all']);
            return;
        }
        let updated = selectedCategories.filter(item => item !== 'all');
        
        if (selected === 'frontend')
            updated = updated.filter(item => item !== 'backend');
        else if (selected === 'backend')
            updated = updated.filter(item => item !== 'frontend');
        else if (selected === 'languages')
            updated = updated.filter(item => item !== 'libraries/frameworks' && item !== 'tools/os');
        else if (selected === 'libraries/frameworks')
            updated = updated.filter(item => item !== 'languages' && item !== 'tools/os');
        else if (selected === 'tools/os')
            updated = updated.filter(item => item !== 'libraries/frameworks' && item !== 'languages');

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
                className={`${classes.pillButton} ${selectedCategories.includes(category) ? `active` : ''}`}
                onClick={() => {buttonClickSound.play(); toggleSelect(category);}}
            >
                {category}
            </button>
        ));

  return (
    <div className={classes.badgeComponent}>
        <Text size='sm'>
            filter skills by one or more categories {filteredSkills.length > 0 ? "😊" : "🤔"}
        </Text>
        <div className={classes.pillButtonContainer}>
            {pills}
        </div>
        <Space h='sm'/>
        <div className={classes.badgeContainer}>
            {filteredSkills.length > 0 ? filteredSkills.map((skill, index) => (
                <motion.div
                    layout="position"
                    whileHover="hover"
                    animate="visible"
                    transition={{ duration: 0.3 }}
                    initial="hidden"
                    exit={{ opacity: 0 }}
                    variants={{
                        hover: { opacity: 1, scale: 1.1 },
                        visible: { opacity: 1, scale: 1.0 },
                        hidden: { opacity: 0, scale: 0 },
                    }}
                >
                <span key={index} className={`${classes.badge} ${classes[getBadgeColor(skill.categories)]}`}>
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

export default Badges;