import resList from "../utils/mockData";
import RestrorantCard from "./RestaurantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

    const backupData = resList[0].data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    
    //const [ratedList, setRatedList] = useState(backupData);

    //when proxy is not working comment below line and uncomment the above line till fetchData function
    const [ratedList, setRatedList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1544444&lng=78.9943191&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        setRatedList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        
    }
    
    

    if (ratedList.length === 0) {
        return <Shimmer />;
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