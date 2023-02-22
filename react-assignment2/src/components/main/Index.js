import React from "react";
import BlogSection from "./blog-section";
import FilterSection from "./latest-posts";
import './main.module.css';
import { cardData } from "../../data";
class MainSection extends React.Component{
    constructor(){
        super();
        this.state={data:cardData};
        this.updateState=this.updateState.bind(this);
    }
    updateState(updatedData){
        this.setState({data:updatedData});
    }
    render(){
        return(<main>
            <FilterSection data={this.state.data} setData={this.updateState}/>
            <BlogSection data={this.state.data}/>
        </main>)
    }
}

export default MainSection;