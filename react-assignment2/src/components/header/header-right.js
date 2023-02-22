import React from "react";
import './header.css';
class HeaderRight extends React.Component{
    render(){
        return(
            <div className="header-right-section">
                <p className="edyoda-description">EdYoda is a learning and knowledge<br></br>sharing platform for techies</p>
                <button className="go-to">Go To Main Website</button>
            </div>
        )
    }
}

export default HeaderRight;