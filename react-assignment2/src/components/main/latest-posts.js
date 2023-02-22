import React from "react";
import { FilterCategories } from "./filter-categories";
import styles from './main.module.css';
import {FaFilter} from 'react-icons/fa';
class FilterSection extends React.Component{
    render(){
        return(
            <div className={styles.latestPostsDiv}>
                <h3>Latest Posts</h3>
                <div className={styles.filterSection}>
                    <div className={styles.filterHeading}>
                        <span className={styles.filterIcon}><FaFilter /></span>
                        <span>Filter By Category</span>
                    </div>
                    <div className={styles.filterCategories}>
                        <FilterCategories data={this.props.data} setData={this.props.setData}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterSection;