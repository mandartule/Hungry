import {CDN_URL} from "../utils/constants";

const RestrorantCard = (props) => {

    const {res} = props;
    const{cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = res?.info;
     
    return (
        <div className="m-4 p-4 w-64 hover:shadow-lg border border-gray-300 rounded-md bg-blue-200 space-y-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <img className="h-48 w-full object-cover rounded-t-md" src={CDN_URL+cloudinaryImageId} alt={name} />
            <h2 className="text-lg font-bold mt-4 text-center text-xl">{name}</h2>
            <p className="text-sm text-gray-700">{cuisines.join(", ")}</p>
            <h4 className="text-lg font-bold">{avgRating} Stars</h4>
            <h4 className="text-lg font-bold">{costForTwo}</h4>
            <h4 className="text-lg font-bold">{sla.deliveryTime} Minutes</h4>
        </div>
    )
}

export default RestrorantCard;