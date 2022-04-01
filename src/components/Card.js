import star from "../images/star.png"

function Card(props){
    return (
        <div className="card">
            <span>Sold Out</span>
            <img className="card-img" src="https://source.unsplash.com/BshM9VkzGw8/300x400" alt="ceramics"></img>
            <div className="rating">
                <img src={star}  className="star" alt="star"/>
                <span className="rating-score">{props.rating}</span>
                <span className="reviewNumber">({props.reviewCount}) •</span>
                <span className="country">{props.country}</span>
            </div>
            <p className="courseTitle">{props.title}</p>
            <p className="price"><span>From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card