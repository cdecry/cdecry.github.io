import {
    Card,
    Image,
    ActionIcon,
    Group,
    Text,
    Avatar,
    Badge,
    useMantineTheme,
    rem,
    Center
} from '@mantine/core';
import { IconHeart, IconBookmark, IconShare } from '@tabler/icons-react';
import classes from './projects.module.css';

type ProjectCardProps = {
    name: string;
    description: string;
    ghUser: string;
    ghUserIcon: string;
    bannerUrl: string;
    tags: string[];
}

const ProjectCard = (props: ProjectCardProps) => {

    const theme = useMantineTheme();

  return (
    <Card withBorder padding="lg" radius="md" className={classes.card}>
        <Card.Section mb="sm">
            <Image
                src={props.bannerUrl}
                alt={props.name}
                height={160}
            />
        </Card.Section>

        <div className={classes.projectTagsContainer}>
            {props.tags.map(tagName => (
                <Badge w="fit-content" variant="light">{tagName}</Badge>
            ))}
        </div>

        <Text fw={700} className={classes.title} mt="xs">{props.name}</Text>

        <Text fz="sm" c="dimmed" lineClamp={3}>{props.description}</Text>

        <Card.Section className={classes.footer}>
            <Group justify="space-between" className={classes.footer}>
                <Center>
                    <Avatar
                        src={props.ghUserIcon}
                        size={24}
                        radius="xl"
                        mr="xs"
                    />
                    <Text fz="sm" inline>
                        {props.ghUser}
                    </Text>
                </Center>

                <Group gap={0}>
                    <ActionIcon variant="subtle" color="gray">
                        <IconHeart
                        style={{ width: rem(20), height: rem(20) }}
                        color={theme.colors.red[6]}
                        stroke={1.5}
                        />
                    </ActionIcon>
                    <ActionIcon variant="subtle" color="gray">
                        <IconBookmark
                        style={{ width: rem(20), height: rem(20) }}
                        color={theme.colors.yellow[6]}
                        stroke={1.5}
                        />
                    </ActionIcon>
                    <ActionIcon variant="subtle" color="gray">
                        <IconShare
                        style={{ width: rem(20), height: rem(20) }}
                        color={theme.colors.blue[6]}
                        stroke={1.5}
                        />
                    </ActionIcon>
                </Group>
            </Group>
        </Card.Section>
    </Card>
  );
}

export default ProjectCard;
