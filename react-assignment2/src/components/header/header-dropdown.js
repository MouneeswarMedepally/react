import React from "react";
import './header.css';
class HeaderDropDown extends React.Component{
    render(){
        return(
            <div className="expl-cat-dropDown">
                <ul className="expl-cat-list">
                    {this.props.data.map((listItem)=>{
                        if(listItem.categoryId!=='ALL'){
                            return(
                                <li key={listItem.categoryId}>{listItem.catergoryName}</li>
                            )
                        }
                    })}
                </ul>
            </div>
        )
    }
}

export default HeaderDropDown;