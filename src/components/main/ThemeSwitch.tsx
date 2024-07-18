import { Switch, useMantineTheme, rem, useMantineColorScheme, Tooltip } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

const ThemeSwitch = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme({ keepTransitions: true });
    const dark = colorScheme === 'dark';
    const theme = useMantineTheme();

    const sunIcon = (
        <IconSun
            style={{ width: rem(20), height: rem(20) }}
            stroke={2.5}
            color={theme.colors.yellow[4]}
        />
    );

    const moonIcon = (
        <IconMoonStars
            style={{ width: rem(20), height: rem(20) }}
            stroke={2.5}
            color={theme.colors.blue[6]}
        />
    );

    return <Tooltip label={`coming soon 😔`} position="top" offset={-33}>
        <div>
            <Switch 
                disabled
                size="xl" 
                color="dark.4" 
                onLabel={sunIcon} 
                offLabel={moonIcon} 
                onChange={toggleColorScheme}
            />
        </div>
    </Tooltip>;
}

export default ThemeSwitch;