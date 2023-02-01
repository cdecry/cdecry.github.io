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
            <text className="blurb">
                welcome to my page! i am currently seeking a summer/spring 2023 internship. c:<br/><br/><a target="_blank" href="https://www.linkedin.com/in/crystalchuang/">LinkedIn</a>
                <br/>
                <a target="_blank" href="https://github.com/cdecry">GitHub</a>
                <br/>
                crystalc.huang@mail.utoronto.ca
            </text>
        </div>
    );
}

export default Profile;