import './index.scss';
import Profile from '../Profile';
import Website from '../Website';

const Layout = () => {
    return (
        <div className='layout'>
            <Profile/>
            <Website/>
        </div>
    );
}

export default Layout;