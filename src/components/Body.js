import resList from "../utils/mockData";
import RestrorantCard from "./RestaurantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

import {Link} from "react-router-dom";

import useOnlineStatus from "./useOnlineStatus";


const Body = () => {

    const backupData = resList[0].data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    
    //const [ratedList, setRatedList] = useState(backupData);

    //when proxy is not working comment below line and uncomment the above line till fetchData function
    const [ratedList, setRatedList] = useState([]);

    const [searchText, setSearchText] = useState("");

    const [filteredRestaurants, setFilteredRestaurants] = useState(backupData);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1544444&lng=78.9943191&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

        setRatedList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        
        //updating for if we make a empty search in search bar
        setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    const status = useOnlineStatus();

    if(!status){

        return(
            <div>
                <h1>Looks Like you are offline, Please Check your connection !</h1>
                <img  className="offlineImg" src="https://static.vecteezy.com/system/resources/previews/005/720/385/large_2x/sad-face-cloud-icon-no-internet-connection-free-vector.jpg"></img>
                
            </div>
        )
    }
    
    

    if (ratedList.length === 0) {
        return <Shimmer />;
    }
    

     return (
        <div className="body">

            <div className="search">
                <input type="text" className="search-bar" placeholder="Search for restaurants" 
                    value = {searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        
                        const filteredList = ratedList.filter(
                            (res) => res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
                        );
                        setFilteredRestaurants(filteredList);
                    }}
                />
                <button className="search-btn"
                    onClick={() => {
                        const filteredRestaurants = ratedList.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(filteredRestaurants);
                    }}
                >Search</button>
            </div>

            <div className="filter">
                <button className="filter-btn" onClick={() => {

                    const filteredList = ratedList.filter(
                        (res) => res.info.avgRating > 4.4
                    );
                    console.log(ratedList);
                    console.log(filteredList);

                    setRatedList(filteredList);
                }}>
                <h3>Top Rated Restaurants ⭐⭐⭐⭐</h3></button>
                
            </div>

            <div className="res-container">

                {filteredRestaurants.map((restaurant) =>(
                    
                    <Link className="linkTag" key={restaurant.info.id} to={"restaurants/"+restaurant.info.id}><RestrorantCard res={restaurant} /></Link>))
                }
            </div>


        </div>
    )
}

export default Body;