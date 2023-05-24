import React from "react";
import image from "./image.png";
import "./Header.css";
import {Link} from "react-router-dom"
const Header=()=>{
    return(
        <div className="header">
            <div className="headerleft">
                <Link to="/"><img className="header_icon"src={image}/></Link>
                <Link to="/movies/popular"style={{textDecoration:"none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated"style={{textDecoration:"none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming"style={{textDecoration:"none"}}><span>Upcoming</span></Link>
            </div>
        </div>
    )

    
}
export default Header;