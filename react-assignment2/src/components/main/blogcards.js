import React from "react";
import styles from './main.module.css';
class BlogCards extends React.Component{
    render(){
        return(
            this.props.data.map((card)=>{
                return(
                    <div key={card.id} id={card.id} data-category={card.categoryId} className={styles.blogPost}>
                        <div className={styles.blogImgDiv}>
                            <img src={card.blogImage} alt={card.blogHeading}></img>
                        </div>
                        <div className={styles.blogDetails}>
                            <h3 className={styles.blogHeading}>{card.blogHeading}</h3>
                            <div className={styles.blogAuthorSection}>
                                <span className={styles.author}>{card.blogAuthorName}</span>
                                <span className={styles.blogDate}> | {card.blogDate}</span>
                            </div>
                            {console.log(card.blogDescription.length)}
                            <p className={styles.blogDescription}>{card.blogDescription}
                            <span className={styles.blogDescriptionEllipses}>...</span>
                            </p>
                        </div>
                    </div>
                )
            })
        )
    }
}

export default BlogCards;