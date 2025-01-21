import React from "react";
import instance from "../../utils/axiosConfig.js";
import {useNavigate} from "react-router-dom";
import './Header.scss';

const Header = () => {

    return(
        <header className="header">
            <h1>Powerful Lifts</h1>
        </header>
    )
}

export default Header;