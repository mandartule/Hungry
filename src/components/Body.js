import resList from "../utils/mockData";
import RestrorantCard from "./RestaurantCard";
const Body = () => {
    return (
        <div className="body">

            <div className="search">
                <input type="text" placeholder="Search for restaurants" />
                <button>Search</button>
            </div>

            <div className="res-container">
            {resList.map((restaurant) => <RestrorantCard key = {restaurant.info.id} res = {restaurant} />)}
            </div>


        </div>
    )
}

export default Body;