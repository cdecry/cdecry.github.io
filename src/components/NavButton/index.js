// making my own button component because bootstrap/mui ones don't look right :D
import './index.scss';
import React from 'react';

const NavButton = ({ page }) => {
    const [coords, setCoords] = React.useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = React.useState(false);
    
    React.useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
          setIsRippling(true);
          setTimeout(() => setIsRippling(false), 300);
        } else setIsRippling(false);
    }, [coords]);
    
    React.useEffect(() => {
        if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);
    
    return (
        <button
        className="ripple-button"
        onClick={e => {
            const rect = e.target.getBoundingClientRect();
            setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        >
            {isRippling ? (
                <span className="ripple" style={{ left: coords.x, top: coords.y }}/>) : (''
            )}
            <text className="content">{page}</text>
        </button>
    );
}

export default NavButton;