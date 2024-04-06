import { Button } from "@mantine/core";
import { useState } from "react";

type ButtonComponentProps = {
    name: string;
    setCurrentTab: (t: string) => void;
}

const ButtonComponent = (props: ButtonComponentProps) => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(true);
        props.setCurrentTab(props.name.split(' ')[0]);
    };

    return (
        <Button 
            className='nav-button'
            onClick={handleClick}
        >
            {props.name}
        </Button>
    );
}

export default ButtonComponent;
