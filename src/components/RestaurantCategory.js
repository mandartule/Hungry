import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {

    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);//for toggle feature
    }
    
    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-70 shadow-xl p-4  ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick} >
                <span className="font-bold  text-lg">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
            <div className="">
                {showItems && <ItemList items={data.itemCards} />}
            </div>

        </div>
    );
}

export default RestaurantCategory;