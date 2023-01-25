import './index.scss';



const PortfolioItem = ({ title, description, image }) => {
    var itemStyle = {
        backgroundImage: `url(${image})`
    };
    return (
    <div onClick={console.log("hi")} className='item' style={itemStyle}>
        <div className="info-cover">
            <text className='project-title'>{title}</text>
            <br/><br/>
            <text className='description'>{description}</text>
        </div>
        
    </div>
    );
}

export default PortfolioItem;