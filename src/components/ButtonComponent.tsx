import { Button } from "@mantine/core";
import { useState } from "react";

type ButtonComponentProps = {
    name: string;
    currentTab: string;
    setCurrentTab: (t: string) => void;
}

const ButtonComponent = (props: ButtonComponentProps) => {
    const handleClick = () => {
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

export default ButtonComponent;
