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
            <text className="blurb">blah blah blah blah blah blah blah blah blah blah blah blah blah<br/><br/>blah blah blah blah blah blah blah blah blah blah!</text>
        </div>
    );
}

export default Profile;