import resList from "../utils/mockData";
import RestrorantCard,{withPromoted} from "./RestaurantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";

import useOnlineStatus from "./useOnlineStatus";


const Body = () => {

    const backupData = resList[0].data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

    //const [ratedList, setRatedList] = useState(backupData);

    //when proxy is not working comment below line and uncomment the above line till fetchData function
    const [ratedList, setRatedList] = useState([]);

    const [searchText, setSearchText] = useState("");

    const [filteredRestaurants, setFilteredRestaurants] = useState(backupData);

    //promoted cards
    const PromotedRestrorantCard = withPromoted(RestrorantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1544444&lng=78.9943191&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

        setRatedList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

        //updating for if we make a empty search in search bar
        setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    const status = useOnlineStatus();

    if (!status) {

        return (
            <div>
                <h1>Looks Like you are offline, Please Check your connection !</h1>
                <img className="offlineImg" src="https://static.vecteezy.com/system/resources/previews/005/720/385/large_2x/sad-face-cloud-icon-no-internet-connection-free-vector.jpg"></img>

            </div>
        )
    }



    if (ratedList.length === 0) {
        return <Shimmer />;
    }


    return (
        <div className="body ">
        

            <div className="search flex items-center space-x-4  mt-10 mb-10">

                <input type="text" className="search-bar bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-50 appearance-none leading-normal ml-96" placeholder="Search for restaurants"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);

                        const filteredList = ratedList.filter(
                            (res) => res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
                        );
                        setFilteredRestaurants(filteredList);
                    }}
                />
                <button className="search-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        const filteredRestaurants = ratedList.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(filteredRestaurants);
                    }}
                >Search</button>


                <div className="filter">
                    <button className=" ml-40 filter-btn bg-green-500 hover:bg-green-700 text-neutral-800 font-bold py-2 px-4 rounded" onClick={() => {

                        const filteredList = ratedList.filter(
                            (res) => res.info.avgRating > 4.4
                        );
                        // console.log(ratedList);
                        //console.log(filteredList);

                        setRatedList(filteredList);
                    }}>
                        <h3>Top Rated Restaurants ⭐⭐⭐⭐</h3></button>

                </div>
            </div>


            
            <div className="flex flex-wrap ml-32 w-11/12 items-start">

                

                {filteredRestaurants.map((restaurant) => (
                    
                    <Link className="linkTag" key={restaurant.info.id} to={"restaurants/" + restaurant.info.id}>
                    {restaurant.info.aggregatedDiscountInfoV3?.header ?<PromotedRestrorantCard res={restaurant} />:<RestrorantCard res={restaurant} />}
                    </Link>))
                }
                
            </div>


        </div>
    )
}

export default Body;