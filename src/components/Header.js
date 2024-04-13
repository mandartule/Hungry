import { LOGO_URL, BackgroundBeamsDemo } from "../utils/constants";
import { useState } from "react";

import { Link } from "react-router-dom";

import useOnlineStatus from "./useOnlineStatus"

import { useSelector } from "react-redux";

const Header = () => {

    const status = useOnlineStatus();

    const [loginBtn, setLogin] = useState("Login");

    //subscribing to our store for cart
    const cart = useSelector((store) => store.cart.items);

    return (
        <div className="flex bg-pink-200 rounded-lg shadow-xl fixed  z-50 w-full justify-between ">
            <div className="logo-container">
                <img className="w-48 rounded-lg border-dashed border-4 border-black" src={LOGO_URL} />
            </div>
            <div className="nav-items flex items-center justify-center m-2">
                <ul className="flex space-x-10 font-bold items-center text-xl">
                    <li className="rounded-lg border-solid border-2 border-black transition duration- rounded py-2 px-1 mr-52">
                        <span>Online Status : {status ? "✅" : "🔴"}</span>
                    </li>
                    <li className=" hover:bg-pink-400  transition duration-500 rounded py-2 px-1">
                        <Link to="/">Home</Link>
                    </li>

                    <li className=" hover:bg-pink-400  transition duration-500 rounded py-2 px-1 rounded">
                        <Link to="/About">About us</Link>
                    </li>
                    <li className=" hover:bg-pink-400  transition duration-500 rounded py-2 px-1">
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li className=" hover:bg-pink-400  transition duration-500 rounded py-2 px-1">
                        <Link to="/Grocery">Grocery</Link>
                    </li>
                    <li className="hover:border-2 hover:border-black transition duration-500 rounded py-2 px-1 m-1">
                        <Link to="/Cart">
                            <span className="text-3xl">🛒</span>
                            <span className="bg-white rounded-full p-2 w-8 h-8">{cart.length}</span> Items
                        </Link>
                    </li>

                    <button className="ml-6 bg-[#94FBAB] hover:bg-[#94FBAB] hover:text-black text-black-700 font-semibold py-2 px-4 ml-4 border border-blue-500 hover:border-transparent rounded-xl" onClick={() => {
                        loginBtn === "Login" ? setLogin("Logout") : setLogin("Login");
                    }}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;