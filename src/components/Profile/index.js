import NavBar from '../NavBar';
import './index.scss';
import pfp from '../../../src/assets/images/profile-picture.png';

const Profile = () => {
    return (
        <div className='profile-card'>
            <div className='profile-picture'>
                <img className='profile-image' src={pfp}/>
            </div>

            <text className="name">crystal huang</text>
            <text className="blurb">hi! welcome to my "all-in-one" personal page!<br/><br/>my portfolio, blog, and dev notes mashed into a fun website c:<br/><br/>let’s connect:</text>
        </div>
    );
}

export default Profile;