
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return <Shimmer />
    }

    const rest = resInfo?.data?.cards[0]?.card?.card?.info;
    const itemCard = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    //console.log(itemCard);

    return (



        <div>
            <h1>{rest?.name}</h1>
            <h3>{rest?.costForTwoMessage}</h3>
            <h3>Cusines : {rest?.cuisines.join(", ")}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCard?.map((item) => (
                    <li key={item.card.info.id}>
                        <h3>{item.card.info.name}</h3>
                        <img className="menuImg" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}></img>
                        <p>{item.card.info.description}</p>
                        <h4>Price : Rs. {item.card.info.defaultPrice/100 || item.card.info.price/100}</h4>
                    </li>
                ))}
            </ul>


        </div>
    )
}

export default RestaurantMenu;