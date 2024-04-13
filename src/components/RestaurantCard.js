import {useContext} from "react";
import {CDN_URL} from "../utils/constants";
import UserContext from "../utils/UserContext";




const RestrorantCard = (props) => {

    const {loggedInUser} = useContext(UserContext);

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
            <h5 className="text-sm text-gray-500">{loggedInUser}</h5>
        </div>
    )
}

export const withPromoted = (RestrorantCard) =>{
    return(props) => {
        return(
            <div>
            <label className="absolute bg-opacity-90 z-40 bg-slate-700 text-red-100 m-2 p-2 rounded-md font-medium">
            {props.res.info.aggregatedDiscountInfoV3.header + (props.res.info.aggregatedDiscountInfoV3?.subHeader ? " : " + props.res.info.aggregatedDiscountInfoV3.subHeader : "")}</label>
            <RestrorantCard {...props}/>
            </div>
        )
    }
}



export default RestrorantCard;