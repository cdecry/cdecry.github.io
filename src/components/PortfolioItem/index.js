import './index.scss';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import ModalPopup from '../ModalPopup';

const PortfolioItem = ({ title, description, image }) => {
    var itemStyle = {
        backgroundImage: `url(${image})`
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <div>
        <div onClick={handleShow} className='item' style={itemStyle}>
            <div className="info-cover">
                <text className='project-title'>{title}</text>
                <br/><br/>
                <text className='description'>{description}</text>
            </div>
        </div>

        {
            show && <ModalPopup onHide={handleClose}/>
        }
    </div>
    );
}

export default PortfolioItem;