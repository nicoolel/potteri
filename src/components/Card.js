function Card(props){
    let badgeText
    if (props.openSpots === 0){
        badgeText = "Sold Out"
    } else if (props.location === "Online"){
        badgeText = "Online"
    }
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-img" src={`../images/${props.img}`}alt="ceramics"></img>
            <div className="rating">
                <img src="../images/star.png"  className="star" alt="star"/>
                <span className="rating-score">{props.rating}</span>
                <span className="reviewNumber">({props.reviewCount}) •</span>
                <span className="location">{props.location}</span>
            </div>
            <p className="courseTitle">{props.title}</p>
            <p className="price"><span>From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card