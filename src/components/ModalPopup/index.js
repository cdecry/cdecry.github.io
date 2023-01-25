import { Link, NavLink } from 'react-router-dom';
import NavButton from '../NavButton';
import './index.scss';

const ModalPopup = ({show, onHide, content}) => {

    return (
    <div className="blackout">
        <div className='modal'>
            <div className='modal-header'>
                <button onClick={onHide} className='close-button'></button>
            </div>
            <div className='modal-body'>
                <text>THIS IS A POPUP MODAL c:</text>
                {content}
            </div>
            <div className='modal-footer'>

            </div>
        </div>
    </div>
    );
}

export default ModalPopup;