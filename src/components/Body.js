import resList from "../utils/mockData";
import RestrorantCard from "./RestaurantCard";

import {useState} from "react"

const Body = () => {

    const [ratedList,setRatedList] = useState(resList);

    return (
        <div className="body">

            <div className="search">
                <input type="text" placeholder="Search for restaurants" />
                <button>Search</button>
            </div>

            <div className="filter">
                <button className="filter-btn" onClick={ ()=>{

                    const filteredList = ratedList.filter(
                        (res) => res.info.avgRating > 4.4
                    );
                    console.log(ratedList);
                    console.log(filteredList);

                    setRatedList(filteredList);
                }}><h3>Top Rated Restaurants ⭐⭐⭐⭐</h3></button>
            </div>

            <div className="res-container">
            {ratedList.map((restaurant) => <RestrorantCard key = {restaurant.info.id} res = {restaurant} />)}
            </div>


        </div>
    )
}

export default Body;