import NavBar from '../NavBar';
import './index.scss';
import { Routes, Route } from 'react-router-dom';

const Website = () => {
    return (
        <div className='website-card'>
            <NavBar/>
            
                <Routes>
                    <Route path="/" element={
                        <div className='website-content'></div>
                    }/>
                </Routes>
        </div>
    )
}

export default Website;