import React from "react";
import { cardData, categoriesData } from "../../data";
import styles from "./main.module.css";

class FilterCategories extends React.Component {
  constructor(props){
    super(props);
    this.state={id:"ALL"}
    this.categoryClick=this.categoryClick.bind(this);
  }
  categoryClick(e){
    this.setState({id:e.currentTarget.id});
    const newData=cardData.filter((item)=>{
      let includes=(item.categoryId===e.currentTarget.id);
      return includes
    });
    (e.currentTarget.id==='ALL')?this.props.setData(cardData):this.props.setData(newData);
  }
  render() {
    return categoriesData.map((item) => {
      return (
        <button
          key={item.categoryId}
          id={item.categoryId}
          className={(item.categoryId===this.state.id) ? styles.active+" "+styles.category : styles.category }
          onClick={this.categoryClick}
        >
          {item.catergoryName}
        </button>
      );
    });
  }
}

export { FilterCategories };
