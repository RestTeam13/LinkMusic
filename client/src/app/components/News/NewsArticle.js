import React from "react";
import './style.css'


class NewsArticle extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {img, imgAlt, date, title, link='#'} = this.props
        return (
            <div className='news__article'>
                <a href={link} className="news__article-img-wrapper">
                    <img src={img} alt={imgAlt}/>
                </a>
                <p className="news__article-date">{date}</p>
                <a href={link} className="news__article-title">{title}</a>
            </div>
        )
    }

}


export default NewsArticle;
