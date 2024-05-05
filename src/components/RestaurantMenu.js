
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";

import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    

    if (resInfo === null) {
        return <Shimmer />
    }

    console.log(resInfo);
    const rest = resInfo?.data.cards[2].card.card.info;

    
    const categories = resInfo?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (c) => c.card.card["@type"] ===  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
    //console.log(categories);
    const itemCard = resInfo?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
    //console.log(itemCard);

    return (
    <div className="flex flex-col items-center  p-4">
        <h1 className="text-4xl font-bold mb-2">{rest?.name}</h1>
        <h3 className="text-xl mb-2">{rest?.costForTwoMessage}</h3>
        <h3 className="text-xl mb-2">Cuisines : {rest?.cuisines.join(", ")}</h3>
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
       
        {categories.map((category) => (
            <RestaurantCategory key={category.card.card.title} data={category.card.card} />
        ))}
    </div>
)
}

export default RestaurantMenu;