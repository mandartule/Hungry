import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

//offline data
import restaurantMenus from "./restaurantMenus"

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    console.log(restaurantMenus);

    // useEffect(() =>{
    //     fetchMenu();
    // },[]);

    // console.log(resId);
    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API+resId);
    //     const json = await data.json();
    //     setResInfo(json);
    // }

    //--------------------------offline data--------------------------

    //using offline restaurant data to make it online uncomment the above code and comment the below code


    useEffect(() => {
        const resData = restaurantMenus.find((res) => res.restaurantId === resId);
        console.log(resData);
        setResInfo(resData);
    }, [resId]); // Only re-run the effect if resId changes

    return resInfo;
}


export default useRestaurantMenu;