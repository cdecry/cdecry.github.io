import { Card, Image, Text, Button, Group, Avatar, Divider, Space } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';
import classes from './profile.module.css';

const Profile = () => {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder className="profile">
            <Card.Section
        h={100}
        style={{
            backgroundImage:
            'url(https://cdnb.artstation.com/p/assets/images/images/052/004/767/original/yurii-ray-06-gif-export-200.gif?1658731969)',
        }}
            />
            <Avatar
                src="https://avatars.githubusercontent.com/u/35664551?v=4"
                size={120}
                radius={80}
                mx="auto"
                mt={-80}
                className={classes.avatar}
            />
    
            <Text ta="center" fz="lg" fw={700} mt="sm">
                Crystal Huang
            </Text>
            <Text size='sm' ta='center' c='dimmed'>@cdecry</Text>


            <Space h='xs' />
            <Group gap="sm" justify="center">
                <Button variant="subtle" color="dark" component='a' target='_' href="https://github.com/cdecry">
                    <IconBrandGithub size={18} />
                </Button>
                <Button variant="subtle" color="dark" component='a' target='_' href="https://www.linkedin.com/in/crystalchuang/">
                    <IconBrandLinkedin size={18} />
                </Button>
                <Button variant="subtle" color="dark" component='a' target='_' href="https://twitter.com/byeue">
                    <IconBrandTwitter size={18} />
                </Button>
            </Group>
            <Divider my="xs" />
            <Card.Section style={{ padding: '10px 20px' }}>
                <Text style={{ textAlign: 'center' }}>
                </Text>
                <Text size="sm" c="dimmed" ta='center'>
                - seeking 2026 new grad roles!
                </Text>
                <Text size="sm" c="dimmed" ta='center'>
                website currently under construction c:
                </Text>
                <Divider my="xs" />
                <Text ta='center'>🌸</Text>
            </Card.Section>
        </Card>
      );
    };

export default Profile;
