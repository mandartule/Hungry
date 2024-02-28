import resList from "../utils/mockData";
import RestrorantCard from "./RestaurantCard";

import { useState, useEffect } from "react";

const Body = () => {

    const [ratedList, setRatedList] = useState(resList);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1544444&lng=78.9943191&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        setRatedList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        console.log(json);
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        //data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    }




    

    return (
        <div className="body">

            <div className="search">
                <input type="text" placeholder="Search for restaurants" />
                <button>Search</button>
            </div>

            <div className="filter">
                <button className="filter-btn" onClick={() => {

                    const filteredList = ratedList.filter(
                        (res) => res.info.avgRating > 4.4
                    );
                    console.log(ratedList);
                    console.log(filteredList);

                    setRatedList(filteredList);
                }}><h3>Top Rated Restaurants ⭐⭐⭐⭐</h3></button>
            </div>

            <div className="res-container">
                {ratedList.map((restaurant) => <RestrorantCard key={restaurant.info.id} res={restaurant} />)}
            </div>


        </div>
    )
}

export default Body;