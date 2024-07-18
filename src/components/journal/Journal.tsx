import {Text, Space } from "@mantine/core";
import { useEffect } from "react";

const JournalComponent = () => {
    useEffect(() => {
        const content = document.querySelector('.content');
        
        if (content) {
            setTimeout(() => {
                content.classList.add('fade-in');
            }, 300);
        }
    }, []);

    return (
        <div className='tab'>
            <div className='content'>
                <div>
                    <div>
                        
                        <Text>
                            oops! there's nothing here yet.. 😔 stay tuned!
                        </Text>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JournalComponent;
