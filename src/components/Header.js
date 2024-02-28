import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

    const [loginBtn, setLogin] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        setLogin("Logout");
                    }}>{loginBtn}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;