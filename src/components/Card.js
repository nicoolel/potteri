function Card(props){
    console.log(props)
    let badgeText
    if (props.item.openSpots === 0){
        badgeText = "Sold Out"
    } else if (props.item.location === "Online"){
        badgeText = "Online"
    }
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-img" src={`../images/${props.item.coverImg}`}alt="ceramics"></img>
            <div className="rating">
                <img src="../images/star.png"  className="star" alt="star"/>
                <span className="rating-score">{props.item.stats.rating}</span>
                <span className="reviewNumber">({props.item.stats.reviewCount}) •</span>
                <span className="location">{props.item.location}</span>
            </div>
            <p className="courseTitle">{props.item.title}</p>
            <p className="price"><span>From ${props.item.price}</span> / person</p>
        </div>
    )
}

export default Card