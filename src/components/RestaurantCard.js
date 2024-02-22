import {CDN_URL} from "../utils/constants";

const RestrorantCard = (props) => {

    const {res} = props;
    const{cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = res?.info;
     
    return (
        <div className="res-card">
            <img className="logo-img" src={CDN_URL+cloudinaryImageId} />
            <h2 style={{ textAlign: "center" }}>{name}</h2>
            <p>{cuisines.join(", ")}</p>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} Minitues</h4>
            
        </div>
    )
}

export default RestrorantCard;