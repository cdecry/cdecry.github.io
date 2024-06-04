import { Button } from "@mantine/core";

let buttonClickSound = new Audio("sound/button-click.mp3")

type ButtonComponentProps = {
    name: string;
    currentTab: string;
    setCurrentTab: (t: string) => void;
}

const NavButton = (props: ButtonComponentProps) => {
    const handleClick = () => {
        buttonClickSound.play();
        props.setCurrentTab(props.name);
    };

    return (
        <Button 
            className={props.currentTab === props.name ? 'nav-button-active' : 'nav-button'}
            onClick={handleClick}
        >
            {props.name}
        </Button>
    );
}

export default NavButton;
